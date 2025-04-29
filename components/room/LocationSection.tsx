"use client";

import { MapPin } from "lucide-react";
import { RoomListing } from "@/lib/data";
import Image from "next/image";

interface LocationSectionProps {
  room: RoomListing;
}

export function LocationSection({ room }: LocationSectionProps) {
  return (
    <section className="py-8 border-t">
      <h2 className="text-2xl font-semibold mb-6">Where you'll be</h2>
      <div className="space-y-4">
        <div className="h-[320px] w-full rounded-xl overflow-hidden relative bg-gray-100">
          {/* Placeholder for map - in production, use a proper map component */}
          <div className="absolute inset-0 bg-center bg-cover opacity-50">
            <Image
              src="/images/exterior/lobby.jpg"
              alt="Map location"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-amber-600 rounded-full p-3">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{room.location}</h3>
          <p className="text-gray-600">
            Great location in the heart of downtown. Walking distance to major
            attractions, restaurants, and shopping areas.
          </p>
        </div>
        <div className="space-y-4 mt-6">
          <div className="flex gap-2">
            <span className="font-medium">Getting around</span>
          </div>
          <p className="text-gray-600">
            • 2 min walk to nearest subway station
            <br />
            • 10 min walk to Central Park
            <br />
            • 15 min to Times Square
            <br />• Easy access to bus stops and taxi stands
          </p>
        </div>
      </div>
    </section>
  );
}
