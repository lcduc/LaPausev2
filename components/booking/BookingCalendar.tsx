"use client";

import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { RentalOptions } from "@/components/booking/RentalOptions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface BookingCalendarProps {
  onBookingComplete: (date: Date, rentalOptionId: string, startTime?: string, endTime?: string) => void;
}

export function BookingCalendar({ onBookingComplete }: BookingCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setCalendarOpen(false);
  };

  const handleRentalOptionSelect = (optionId: string, startTime?: string, endTime?: string) => {
    if (date) {
      onBookingComplete(date, optionId, startTime, endTime);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
              disabled={(date) => {
                // Disable dates in the past
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < today;
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      {date && (
        <RentalOptions
          selectedDate={date}
          onSelectRentalOption={handleRentalOptionSelect}
        />
      )}
    </div>
  );
}
