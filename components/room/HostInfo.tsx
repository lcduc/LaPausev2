"use client";

import Image from "next/image";
import { RoomListing } from "@/lib/data";

interface HostInfoProps {
  room: RoomListing;
}

export function HostInfo({ room }: HostInfoProps) {
  const { host } = room;
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Hosted by {host.name}</h2>
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={host.avatar}
            alt={`Host ${host.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-gray-500">
            {host.isSuperhost ? "Superhost · " : ""}{host.yearsHosting} years hosting
          </p>
          <p className="text-gray-500">Response rate: {host.responseRate}</p>
          <p className="text-gray-500">Response time: {host.responseTime}</p>
        </div>
      </div>
    </div>
  );
}
