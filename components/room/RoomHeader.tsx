"use client";

import { MapPin, Star, Share, Heart } from "lucide-react";
import { RoomListing } from "@/lib/data";

interface RoomHeaderProps {
  room: RoomListing;
}

export function RoomHeader({ room }: RoomHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-semibold text-gray-900">
          {room.title}
        </h1>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg transition">
            <Share className="h-4 w-4" />
            <span className="text-sm font-medium underline">Share</span>
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg transition">
            <Heart className="h-4 w-4" />
            <span className="text-sm font-medium underline">Save</span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-current text-amber-500" />
          <span className="ml-1 font-medium">{room.rating}</span>
        </div>
        <span>·</span>
        <button className="font-medium underline">{room.reviewCount} reviews</button>
        {room.host.isSuperhost && (
          <>
            <span>·</span>
            <button className="font-medium underline">Superhost</button>
          </>
        )}
        <span>·</span>
        <button className="font-medium underline flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          {room.location}
        </button>
      </div>
    </div>
  );
}
