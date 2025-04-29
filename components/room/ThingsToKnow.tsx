"use client";

import { RoomListing } from "@/lib/data";

interface ThingsToKnowProps {
  room: RoomListing;
}

export function ThingsToKnow({ room }: ThingsToKnowProps) {
  const sections = [
    {
      title: "House rules",
      items: room.houseRules,
    },
    {
      title: "Safety & property",
      items: room.safetyInfo,
    },
    {
      title: "Cancellation policy",
      items: room.cancellationPolicy,
    },
  ];

  return (
    <section className="py-8 border-t">
      <h2 className="text-2xl font-semibold mb-6">Things to know</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-medium mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
