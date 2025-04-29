"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { rentalOptions, RentalOption } from "@/lib/data";
import { TimeSlots } from "./TimeSlots";

interface RentalOptionsProps {
  selectedDate: Date;
  onSelectRentalOption: (optionId: string, startTime?: string, endTime?: string) => void;
}

export function RentalOptions({
  selectedDate,
  onSelectRentalOption,
}: RentalOptionsProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<RentalOption | null>(null);
  const [timeSlotKey, setTimeSlotKey] = useState<number>(0); // Key to force TimeSlots component to reset
  const [startTime, setStartTime] = useState<string | undefined>(undefined);
  const [endTime, setEndTime] = useState<string | undefined>(undefined);

  // Format time for display (e.g., "1:00 PM")
  const formatTimeForDisplay = (timeStr: string) => {
    const [hourStr, minuteStr] = timeStr.split(':');
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);

    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:${minute === 0 ? "00" : "30"} ${period}`;
  };

  // Handle rental option selection
  const handleOptionSelect = (optionId: string) => {
    // Check if we're switching between time slot options
    const isTimeSlotOption = optionId === "option-2h" || optionId === "option-4h";
    const wasTimeSlotOption = selectedOptionId === "option-2h" || selectedOptionId === "option-4h";

    // If switching between time slot options or from a non-time slot option to a time slot option,
    // reset the time slot selection
    if ((isTimeSlotOption && wasTimeSlotOption && optionId !== selectedOptionId) ||
        (isTimeSlotOption && !wasTimeSlotOption)) {
      setTimeSlotKey(prevKey => prevKey + 1);
      setStartTime(undefined);
      setEndTime(undefined);
    }

    // If switching to a non-time slot option, clear time slot selection
    if (!isTimeSlotOption) {
      setStartTime(undefined);
      setEndTime(undefined);
    }

    setSelectedOptionId(optionId);
    const option = rentalOptions.find(opt => opt.id === optionId);
    if (option) {
      setSelectedOption(option);

      // If this is not a time slot option, pass it to the parent immediately
      if (!isTimeSlotOption) {
        onSelectRentalOption(optionId);
      } else if (startTime && endTime) {
        // If this is a time slot option and we already have time slots, pass everything
        onSelectRentalOption(optionId, startTime, endTime);
      }
    }
  };

  // Handle time slot selection
  const handleTimeSlotSelect = (newStartTime: string, newEndTime: string) => {
    setStartTime(newStartTime);
    setEndTime(newEndTime);

    if (selectedOptionId) {
      onSelectRentalOption(selectedOptionId, newStartTime, newEndTime);
    }
  };

  // Check if the selected option needs time slots
  const needsTimeSlots = selectedOptionId === "option-2h" || selectedOptionId === "option-4h";

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Select rental option</h3>
      <div className="space-y-2">
        {rentalOptions.map((option) => (
          <div
            key={option.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedOptionId === option.id
                ? "border-amber-600 bg-amber-50"
                : "border-gray-200 hover:border-amber-300"
            }`}
            onClick={() => handleOptionSelect(option.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-600" />
                <h4 className="font-medium">{option.name}</h4>
              </div>
              {selectedOptionId === option.id && startTime && endTime && (
                <span className="text-sm font-medium text-amber-600">
                  {formatTimeForDisplay(startTime)} - {formatTimeForDisplay(endTime)}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-500">{option.description}</p>
          </div>
        ))}
      </div>

      {/* Show time slots for 2-hour and 4-hour options */}
      {needsTimeSlots && selectedOption && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <TimeSlots
            key={`${selectedOption.id}-${timeSlotKey}`}
            selectedDate={selectedDate}
            duration={selectedOption.duration}
            onSelectTimeSlot={handleTimeSlotSelect}
          />
        </div>
      )}
    </div>
  );
}
