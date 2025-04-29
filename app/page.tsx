"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Wifi,
  Coffee,
  Tv,
  Utensils,
  Wind,
  ParkingMeter,
  Instagram,
  Facebook,
  ChevronRight,
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="flex min-h-[100dvh] flex-col"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-amber-600" />
            <span className="text-xl font-bold">LaPause Home</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="#rooms"
              className="text-sm font-medium hover:text-amber-600 transition-all duration-300 ease-in-out relative group"
            >
              Rooms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="#rental-options"
              className="text-sm font-medium hover:text-amber-600 transition-all duration-300 ease-in-out relative group"
            >
              Rental Options
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="#amenities"
              className="text-sm font-medium hover:text-amber-600 transition-all duration-300 ease-in-out relative group"
            >
              Amenities
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="#location"
              className="text-sm font-medium hover:text-amber-600 transition-all duration-300 ease-in-out relative group"
            >
              Location
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-amber-600 transition-all duration-300 ease-in-out relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-white md:hidden">
              <div className="flex flex-col h-full p-4">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <Home className="h-6 w-6 text-amber-600" />
                    <span className="text-xl font-bold">Cozy Corner</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-6 text-center">
                  <Link
                    href="#rooms"
                    className="text-lg font-medium py-3 border-b border-gray-100 hover:text-amber-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Rooms
                  </Link>
                  <Link
                    href="#rental-options"
                    className="text-lg font-medium py-3 border-b border-gray-100 hover:text-amber-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Rental Options
                  </Link>
                  <Link
                    href="#amenities"
                    className="text-lg font-medium py-3 border-b border-gray-100 hover:text-amber-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Amenities
                  </Link>
                  <Link
                    href="#location"
                    className="text-lg font-medium py-3 border-b border-gray-100 hover:text-amber-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Location
                  </Link>
                  <Link
                    href="#contact"
                    className="text-lg font-medium py-3 border-b border-gray-100 hover:text-amber-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
                <div className="mt-auto">
                  <Link href="#rooms" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 py-6 text-lg">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Book Now Button */}
          <Link href="#rooms">
            <Button className="hidden md:inline-flex bg-amber-600 hover:bg-amber-700">
              Book Now
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32">
          <Image
            src="/images/exterior/building.jpg"
            alt="Cozy homestay interior"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="container max-w-6xl mx-auto relative z-20 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 text-white">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Home Away From Home
                </h1>
                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                  Comfortable rooms with flexible rental options, perfect for
                  short stays or overnight rest.
                </p>
              </div>

              {/* Book Now Button */}
              <div className="mt-8">
                <Link href="#rooms">
                  <Button
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-6"
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                  Welcome to Cozy Corner
                </h2>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg">
                  Nestled in a quiet neighborhood, our small homestay offers a
                  peaceful retreat for travelers seeking comfort and
                  convenience. With just 5 carefully designed rooms, we provide
                  a personal touch that larger hotels simply can't match.
                </p>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg">
                  Whether you need a room for just a few hours to freshen up
                  between meetings, an overnight stay, or a longer visit, our
                  flexible rental options are designed to accommodate your
                  unique needs.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="#rooms">
                    <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                      Explore Our Rooms
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline" className="w-full sm:w-auto">Contact Us</Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg order-1 lg:order-2">
                <Image
                  src="/images/exterior/entrance.jpg"
                  alt="Homestay building exterior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Room Listings */}
        <section id="rooms" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Comfortable Rooms
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-lg">
                  Each of our rooms is designed with your comfort in mind,
                  featuring quality furnishings and all the essentials you need.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 py-8 sm:py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {/* Room 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/rooms/standard-room.jpg"
                    alt="Standard Room"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Standard Room</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Cozy room with a comfortable double bed, perfect for solo
                    travelers or couples.
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-lg font-bold">$25</span>
                      <span className="text-gray-500"> / 2 hours</span>
                    </div>
                    <Link href="/rooms/1">
                      <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Room 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/rooms/deluxe-room.jpg"
                    alt="Deluxe Room"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Deluxe Room</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Spacious room with a queen-sized bed and additional seating
                    area for added comfort.
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-lg font-bold">$35</span>
                      <span className="text-gray-500"> / 2 hours</span>
                    </div>
                    <Link href="/rooms/2">
                      <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Room 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/rooms/family-room.jpg"
                    alt="Family Room"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Family Room</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Large room with one queen bed and two single beds, ideal for
                    families or small groups.
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-lg font-bold">$45</span>
                      <span className="text-gray-500"> / 2 hours</span>
                    </div>
                    <Link href="/rooms/3">
                      <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Room 4 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/rooms/suite.jpg"
                    alt="Suite"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Suite</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Our most luxurious option with a king-sized bed, separate
                    sitting area, and premium amenities.
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-lg font-bold">$55</span>
                      <span className="text-gray-500"> / 2 hours</span>
                    </div>
                    <Link href="/rooms/4">
                      <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Room 5 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/rooms/twin-room.jpg"
                    alt="Twin Room"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Twin Room</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Comfortable room with two single beds, perfect for friends
                    or colleagues traveling together.
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-lg font-bold">$30</span>
                      <span className="text-gray-500"> / 2 hours</span>
                    </div>
                    <Link href="/rooms/5">
                      <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rental Options */}
        <section id="rental-options" className="w-full py-12 md:py-24 bg-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Flexible Rental Options
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-lg">
                  We understand that everyone's needs are different. That's why
                  we offer a variety of rental options to suit your schedule.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {/* Option 1 */}
                <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <h3 className="text-xl font-semibold">2 Hours</h3>
                  </div>
                  <p className="mt-2 text-gray-500">
                    Perfect for a quick rest, shower, or meeting. Ideal for
                    business travelers between appointments.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold">$25</p>
                  </div>
                </div>

                {/* Option 2 */}
                <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <h3 className="text-xl font-semibold">4 Hours</h3>
                  </div>
                  <p className="mt-2 text-gray-500">
                    Extended rest period, perfect for day use or when you need
                    more time to relax or work.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold">$40</p>
                  </div>
                </div>

                {/* Option 3 */}
                <div className="relative flex flex-col rounded-lg border-2 border-amber-600 bg-white p-6 shadow-sm">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 inline-block rounded-full bg-amber-600 px-4 py-1.5 text-xs font-bold text-white whitespace-nowrap shadow-md">
                    Most Popular
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <h3 className="text-xl font-semibold">Overnight</h3>
                  </div>
                  <p className="mt-2 text-gray-500">
                    Standard overnight stay from evening check-in to morning
                    check-out. Includes breakfast.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold">$60</p>
                  </div>
                </div>

                {/* Option 4 */}
                <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <h3 className="text-xl font-semibold">All Day</h3>
                  </div>
                  <p className="mt-2 text-gray-500">
                    Full day use from morning to evening. Perfect when you need
                    a base for the day.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold">$75</p>
                  </div>
                </div>

                {/* Option 5 */}
                <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-amber-600" />
                    <h3 className="text-xl font-semibold">2 Days 1 Night</h3>
                  </div>
                  <p className="mt-2 text-gray-500">
                    Extended stay with late check-out on the second day.
                    Includes breakfast both mornings.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold">$100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Room Amenities
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-lg">
                  All our rooms come equipped with these amenities to ensure a
                  comfortable stay.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-8 py-8 sm:py-12">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Wifi className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Free Wi-Fi</h3>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Tv className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Flat-screen TV</h3>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Wind className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Air Conditioning</h3>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Coffee className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Coffee Maker</h3>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Utensils className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Mini Fridge</h3>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                    <path d="m8 9 4-4 4 4" />
                  </svg>
                </div>
                <h3 className="font-medium">Hot Shower</h3>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <line x1="3" x2="21" y1="9" y2="9" />
                    <line x1="3" x2="21" y1="15" y2="15" />
                    <line x1="9" x2="9" y1="3" y2="21" />
                    <line x1="15" x2="15" y1="3" y2="21" />
                  </svg>
                </div>
                <h3 className="font-medium">Clean Linens</h3>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <ParkingMeter className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Free Parking</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="w-full py-12 md:py-24 bg-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Location
                </h2>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg">
                  Conveniently located in a quiet residential area, yet just
                  minutes away from the city center, shopping, and dining
                  options.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-500 text-sm sm:text-base">
                      123 Cozy Street, Hometown, HT 12345
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <div className="text-gray-500 text-sm sm:text-base">
                      <p>Check-in: 2:00 PM - 10:00 PM</p>
                      <p>Check-out: By 12:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-500 text-sm sm:text-base">(555) 123-4567</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-500 text-sm sm:text-base">info@cozycorner.com</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                    Get Directions
                    <MapPin className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg order-1 lg:order-2">
                <Image
                  src="/images/exterior/lobby.jpg"
                  alt="Map location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What Our Guests Say
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-lg">
                  Don't just take our word for it. Here's what some of our
                  recent guests have to say.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500">
                    "Perfect for my quick business trip. I needed a place to
                    rest for a few hours between meetings, and the 2-hour rental
                    option was exactly what I needed. Clean, comfortable, and
                    convenient!"
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-medium">Michael T.</p>
                  <p className="text-sm text-gray-500">Business Traveler</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500">
                    "We stayed in the family room for 2 days and 1 night. The
                    room was spacious, beds were comfortable, and the staff was
                    incredibly friendly. The flexible check-in/out times were a
                    huge plus for us!"
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-medium">Sarah J.</p>
                  <p className="text-sm text-gray-500">Family Traveler</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500">
                    "I booked the deluxe room for an overnight stay. The bed was
                    so comfortable, and I appreciated the little touches like
                    the coffee maker and mini fridge. Will definitely stay here
                    again!"
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-medium">David L.</p>
                  <p className="text-sm text-gray-500">Weekend Traveler</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-amber-600">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
                  Ready to Book Your Stay?
                </h2>
                <p className="mx-auto max-w-[700px] text-amber-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to check availability and reserve your room
                  with flexible rental options.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#rooms" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-white text-amber-600 hover:bg-gray-100">
                    Book Now
                  </Button>
                </Link>
                <Link href="#contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-white text-amber-600 hover:bg-gray-100">
                    Contact Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="w-full border-t bg-white py-12">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Home className="h-6 w-6 text-amber-600" />
                <span className="text-xl font-bold">Cozy Corner</span>
              </div>
              <p className="text-sm text-gray-500">
                A small, comfortable homestay offering flexible rental options
                for all your accommodation needs.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-amber-600">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-amber-600">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#rooms"
                  className="text-sm text-gray-500 hover:text-amber-600"
                >
                  Our Rooms
                </Link>
                <Link
                  href="#rental-options"
                  className="text-sm text-gray-500 hover:text-amber-600"
                >
                  Rental Options
                </Link>
                <Link
                  href="#amenities"
                  className="text-sm text-gray-500 hover:text-amber-600"
                >
                  Amenities
                </Link>
                <Link
                  href="#location"
                  className="text-sm text-gray-500 hover:text-amber-600"
                >
                  Location
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
                  <p className="text-gray-500">
                    123 Cozy Street, Hometown, HT 12345
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-amber-600 mt-0.5" />
                  <p className="text-gray-500">(555) 123-4567</p>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-amber-600 mt-0.5" />
                  <p className="text-gray-500">info@cozycorner.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Cozy Corner Homestay. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
