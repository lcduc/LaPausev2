"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoomListing, rentalOptions, calculateRentalOptionPrice } from "@/lib/data";
import { BookingCalendar } from "@/components/booking/BookingCalendar";

interface BookingCardProps {
  room: RoomListing;
}

export function BookingCard({ room }: BookingCardProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedRentalOption, setSelectedRentalOption] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<string | undefined>(undefined);
  const [endTime, setEndTime] = useState<string | undefined>(undefined);
  const [nightShiftFee, setNightShiftFee] = useState<boolean>(false);

  // Format time for display (e.g., "1:00 PM")
  const formatTimeForDisplay = (timeStr?: string) => {
    if (!timeStr) return "";

    const [hourStr, minuteStr] = timeStr.split(':');
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);

    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:${minute === 0 ? "00" : "30"} ${period}`;
  };

  // Calculate the price based on the selected rental option
  const calculatePrice = () => {
    let basePrice = room.price;
    if (!selectedRentalOption) return basePrice;

    let price = calculateRentalOptionPrice(basePrice, selectedRentalOption);

    // Add night shift fee if applicable
    if (nightShiftFee) {
      price += 10;
    }

    return price;
  };

  const handleBookingComplete = (date: Date, optionId: string, newStartTime?: string, newEndTime?: string) => {
    setSelectedDate(date);
    setSelectedRentalOption(optionId);

    if (newStartTime && newEndTime) {
      setStartTime(newStartTime);
      setEndTime(newEndTime);

      // Check if night shift fee applies (checkout after 8 PM)
      const [endHourStr] = newEndTime.split(':');
      const endHour = parseInt(endHourStr);
      setNightShiftFee(endHour >= 20); // 8 PM or later
    } else {
      setStartTime(undefined);
      setEndTime(undefined);
      setNightShiftFee(false);
    }
  };

  // Check if we need a time slot but don't have one yet
  const needsTimeSlot = (selectedRentalOption === "option-2h" || selectedRentalOption === "option-4h") &&
                        (!startTime || !endTime);

  const handleReserveClick = () => {
    if (!selectedDate || !selectedRentalOption) return;
    if (needsTimeSlot) return;

    // Format the booking details for the alert
    let bookingDetails = `${room.title} on ${selectedDate.toLocaleDateString()}`;

    // Add time details if applicable
    if (startTime && endTime) {
      bookingDetails += ` from ${formatTimeForDisplay(startTime)} to ${formatTimeForDisplay(endTime)}`;
    }

    // Add rental option
    const option = rentalOptions.find(opt => opt.id === selectedRentalOption);
    if (option) {
      bookingDetails += ` (${option.name})`;
    }

    // Add night shift fee if applicable
    if (nightShiftFee) {
      bookingDetails += " with night shift fee";
    }

    // In a real application, this would submit the booking to a backend
    alert(`Booking submitted for ${bookingDetails}`);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-lg sticky top-24">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-xl font-bold">${calculatePrice()}</span>
          <span className="text-gray-500"> / {room.priceUnit}</span>
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-current text-amber-500 mr-1" />
          <span className="font-medium">{room.rating}</span>
          <span className="mx-1 text-gray-400">·</span>
          <span className="text-gray-500 underline">{room.reviewCount} reviews</span>
        </div>
      </div>

      <BookingCalendar onBookingComplete={handleBookingComplete} />

      {/* Booking Summary */}
      {selectedDate && selectedRentalOption && (
        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
          <h4 className="font-medium text-amber-800 mb-2">Booking Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{selectedDate.toLocaleDateString()}</span>
            </div>

            {startTime && endTime && (
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">
                  {formatTimeForDisplay(startTime)} - {formatTimeForDisplay(endTime)}
                </span>
              </div>
            )}

            <div className="flex justify-between">
              <span className="text-gray-600">Room:</span>
              <span className="font-medium">{room.title}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Option:</span>
              <span className="font-medium">
                {rentalOptions.find(opt => opt.id === selectedRentalOption)?.name}
              </span>
            </div>

            {nightShiftFee && (
              <div className="flex justify-between text-amber-600">
                <span>Night shift fee:</span>
                <span className="font-medium">$10</span>
              </div>
            )}

            <div className="flex justify-between pt-2 border-t border-amber-200 mt-2">
              <span className="font-medium">Total:</span>
              <span className="font-bold">${calculatePrice()}</span>
            </div>
          </div>
        </div>
      )}

      <Button
        className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white"
        disabled={!selectedDate || !selectedRentalOption || needsTimeSlot}
        onClick={handleReserveClick}
      >
        {!selectedDate || !selectedRentalOption
          ? "Select date and rental option"
          : needsTimeSlot
            ? "Please select a time slot"
            : "Reserve"}
      </Button>

      <p className="text-center text-sm text-gray-500 mt-4">
        You won't be charged yet
      </p>
    </div>
  );
}
