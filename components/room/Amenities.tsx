"use client";

import { RoomListing } from "@/lib/data";
import { Wifi, Tv, Wind, Coffee, Utensils, ParkingMeter } from "lucide-react";

interface AmenitiesProps {
  room: RoomListing;
}

export function Amenities({ room }: AmenitiesProps) {
  // Map of amenity names to icons
  const amenityIcons: Record<string, JSX.Element> = {
    "Free Wi-Fi": <Wifi className="h-5 w-5" />,
    "Flat-screen TV": <Tv className="h-5 w-5" />,
    "Large Flat-screen TV": <Tv className="h-5 w-5" />,
    "Air Conditioning": <Wind className="h-5 w-5" />,
    "Coffee Maker": <Coffee className="h-5 w-5" />,
    "Coffee Machine": <Coffee className="h-5 w-5" />,
    "Mini Fridge": <Utensils className="h-5 w-5" />,
    "Mini Bar": <Utensils className="h-5 w-5" />,
    "Free Parking": <ParkingMeter className="h-5 w-5" />,
  };

  // Default icon for amenities without a specific icon
  const defaultIcon = (
    <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center">
      <span className="text-amber-600 text-xs">•</span>
    </div>
  );

  return (
    <section className="py-8 border-t">
      <h2 className="text-2xl font-semibold mb-6">What this room offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {room.amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-amber-600">
              {amenityIcons[amenity] || defaultIcon}
            </div>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
