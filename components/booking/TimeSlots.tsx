"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimeSlotsProps {
  selectedDate: Date;
  duration: string;
  onSelectTimeSlot: (startTime: string, endTime: string) => void;
}

// Define the type for a time slot
interface TimeSlot {
  id: string;
  display: string;
  startTime: string;
  endTime: string;
  isCheckIn?: boolean;
  isCheckOut?: boolean;
  isInRange?: boolean;
  hasNightShiftFee?: boolean;
  isInvalid?: boolean; // Indicates if the time slot would result in checkout at or after 10 PM
}

export function TimeSlots({ selectedDate, duration, onSelectTimeSlot }: TimeSlotsProps) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const durationHours = parseInt(duration.replace("h", ""));

  // Format time for display (e.g., "1:00 PM")
  const formatTimeForDisplay = (hour: number, minute: number) => {
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:${minute === 0 ? "00" : "30"} ${period}`;
  };

  // Generate time slots based on duration
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];

    // Define available time range (1 PM to 9 PM)
    const startHour = 13; // 1 PM
    const maxCheckoutHour = 21; // 9 PM

    // Calculate the last possible start time based on duration
    const lastStartHour = maxCheckoutHour - durationHours;

    // Generate all possible time slots
    for (let hour = startHour; hour <= lastStartHour; hour++) {
      for (let minute of [0, 30]) {
        // Calculate checkout time
        const checkoutHour = hour + durationHours;
        const checkoutMinute = minute;

        // Create Date objects for comparison
        const checkoutTime = new Date();
        checkoutTime.setHours(checkoutHour, checkoutMinute, 0, 0);

        const tenPM = new Date();
        tenPM.setHours(maxCheckoutHour, 0, 0, 0);

        // Check if checkout time is after or at 10 PM
        const isInvalid = checkoutTime >= tenPM;

        const startTime = `${hour}:${minute === 0 ? "00" : "30"}`;
        const endTime = `${checkoutHour}:${checkoutMinute === 0 ? "00" : "30"}`;

        const displayStartTime = formatTimeForDisplay(hour, minute);

        // Check if this slot would result in a checkout after 7 PM (night shift fee applies)
        const hasNightShiftFee = checkoutHour >= 19; // 7 PM or later

        slots.push({
          id: startTime,
          display: displayStartTime,
          startTime,
          endTime,
          isCheckIn: false,
          isCheckOut: false,
          isInRange: false,
          hasNightShiftFee,
          isInvalid
        });
      }
    }

    return slots;
  };

  // Get all time slots
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(generateTimeSlots());

  // Update time slots when selected slot changes
  useEffect(() => {
    if (!selectedSlot) {
      // Reset all slots to default state
      setTimeSlots(generateTimeSlots());
      return;
    }

    // Update slots based on selected slot
    const updatedSlots = timeSlots.map(slot => {
      // Parse the selected slot time
      const [selectedHourStr, selectedMinuteStr] = selectedSlot.split(':');
      const selectedHour = parseInt(selectedHourStr);
      const selectedMinute = parseInt(selectedMinuteStr);

      // Parse the current slot time
      const [slotHourStr, slotMinuteStr] = slot.startTime.split(':');
      const slotHour = parseInt(slotHourStr);
      const slotMinute = parseInt(slotMinuteStr);

      // Calculate check-out time
      const checkOutHour = selectedHour + durationHours;
      const checkOutMinute = selectedMinute;

      // Check if this is the check-in slot
      const isCheckIn = slot.startTime === selectedSlot;

      // Check if this is the check-out slot
      const isCheckOut = slotHour === checkOutHour && slotMinute === checkOutMinute;

      // Check if this slot is in the range between check-in and check-out
      const slotTime = new Date();
      slotTime.setHours(slotHour, slotMinute, 0, 0);

      const checkInTime = new Date();
      checkInTime.setHours(selectedHour, selectedMinute, 0, 0);

      const checkOutTime = new Date();
      checkOutTime.setHours(checkOutHour, checkOutMinute, 0, 0);

      const isInRange = slotTime > checkInTime && slotTime < checkOutTime;

      return {
        ...slot,
        isCheckIn,
        isCheckOut,
        isInRange
      };
    });

    setTimeSlots(updatedSlots);
  }, [selectedSlot, durationHours]);

  // Handle time slot selection
  const handleSlotClick = (slot: TimeSlot) => {
    if (slot.isInvalid) return; // Don't allow selection of invalid slots

    // If the slot is already selected, deselect it
    if (selectedSlot === slot.startTime) {
      setSelectedSlot(null);
      return;
    }

    setSelectedSlot(slot.startTime);

    // Calculate end time based on duration
    const [startHourStr, startMinuteStr] = slot.startTime.split(':');
    const startHour = parseInt(startHourStr);
    const startMinute = parseInt(startMinuteStr);

    const endHour = startHour + durationHours;
    const endMinute = startMinute;

    const endTime = `${endHour}:${endMinute === 0 ? '00' : '30'}`;

    // Call the callback with the selected time slot
    onSelectTimeSlot(slot.startTime, endTime);
  };

  // Check if there are any available slots
  const hasAvailableSlots = timeSlots.some(slot => !slot.isInvalid);

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-3">
        <Clock className="h-5 w-5 text-amber-600" />
        <h3 className="font-medium">Select check-in time</h3>
      </div>

      {!hasAvailableSlots ? (
        <p className="text-sm text-gray-500">
          No available time slots for this duration on the selected date.
        </p>
      ) : (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              className={`
                py-2 px-1 text-sm rounded-lg border transition-all relative
                ${slot.isCheckIn
                  ? 'bg-amber-600 text-white border-amber-600 font-medium z-10'
                  : slot.isCheckOut
                    ? 'bg-green-600 text-white border-green-600 font-medium z-10'
                    : slot.isInRange
                      ? 'bg-gray-200 border-gray-300 text-gray-600'
                      : slot.isInvalid
                        ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                        : slot.hasNightShiftFee
                          ? 'border-amber-300 hover:border-amber-400 hover:bg-amber-50'
                          : 'border-gray-300 hover:border-amber-400 hover:bg-amber-50'}
              `}
              onClick={() => !slot.isInvalid && handleSlotClick(slot)}
              disabled={slot.isInvalid}
            >
              {slot.display}
              {slot.hasNightShiftFee && !slot.isInvalid && !slot.isCheckIn && !slot.isCheckOut && !slot.isInRange && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      )}

      {selectedSlot && timeSlots.find(slot => slot.id === selectedSlot)?.hasNightShiftFee && (
        <div className="mt-3 text-sm text-amber-600 flex items-center">
          <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
          Night shift fee applies (+$10)
        </div>
      )}
    </div>
  );
}
