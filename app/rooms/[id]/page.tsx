"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoomHeader } from "@/components/room/RoomHeader";
import { ImageGallery } from "@/components/room/ImageGallery";
import { BookingCard } from "@/components/room/BookingCard";
import { Amenities } from "@/components/room/Amenities";
import { HostInfo } from "@/components/room/HostInfo";
import { LocationSection } from "@/components/room/LocationSection";
import { ThingsToKnow } from "@/components/room/ThingsToKnow";
import { getRoomById, RoomListing } from "@/lib/data";

export default function RoomDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [room, setRoom] = useState<RoomListing | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const roomId = parseInt(params.id as string);
      const foundRoom = getRoomById(roomId);
      
      if (foundRoom) {
        setRoom(foundRoom);
      }
      
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl">Loading room details...</p>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Room not found</h1>
        <Link href="/#rooms">
          <Button className="bg-amber-600 hover:bg-amber-700">
            Back to all rooms
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Back button */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-700 hover:text-black"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>
      </div>

      {/* Room Header */}
      <div className="px-4 sm:px-6 lg:px-8">
        <RoomHeader room={room} />
      </div>

      {/* Image Gallery */}
      <div className="px-4 sm:px-6 lg:px-8">
        <ImageGallery room={room} />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Room Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">About this room</h2>
              <p className="text-gray-600">{room.description}</p>
            </div>

            {/* Host Info */}
            <HostInfo room={room} />

            {/* Amenities */}
            <Amenities room={room} />

            {/* Location */}
            <LocationSection room={room} />

            {/* Things to Know */}
            <ThingsToKnow room={room} />
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <BookingCard room={room} />
          </div>
        </div>
      </div>
    </div>
  );
}
