"use client";

import { useState } from "react";
import Image from "next/image";
import { RoomListing } from "@/lib/data";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageGalleryProps {
  room: RoomListing;
}

export function ImageGallery({ room }: ImageGalleryProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="relative mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden">
          {/* Main large image */}
          <div className="md:col-span-2 md:row-span-2 relative aspect-[4/3] md:aspect-square">
            <Image
              src={room.images[0]}
              alt={`${room.title} main image`}
              fill
              className="object-cover"
            />
          </div>

          {/* Secondary images */}
          {room.images.slice(1, 5).map((image, index) => (
            <div key={index} className="hidden md:block relative aspect-square">
              <Image
                src={image}
                alt={`${room.title} image ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}

          {/* Show all photos button */}
          <button
            onClick={() => setShowAllPhotos(true)}
            className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium hover:bg-gray-100 transition"
          >
            Show all photos
          </button>
        </div>
      </div>

      {/* Full screen photo gallery */}
      <Dialog open={showAllPhotos} onOpenChange={setShowAllPhotos}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-white">
          <div className="relative h-full flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">
                {room.title} - Photos
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAllPhotos(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 relative">
              <Image
                src={room.images[currentPhotoIndex]}
                alt={`${room.title} photo ${currentPhotoIndex + 1}`}
                fill
                className="object-contain p-4"
              />

              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
                onClick={handlePrevPhoto}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
                onClick={handleNextPhoto}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="p-4 border-t text-center">
              <span className="text-sm text-gray-500">
                {currentPhotoIndex + 1} / {room.images.length}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
