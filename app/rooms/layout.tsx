import { Home, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-6 w-6 text-amber-600" />
            <span className="text-xl font-bold">Cozy Corner</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="/#rooms"
              className="text-sm font-medium hover:text-amber-600 transition-all duration-300 ease-in-out relative group"
            >
              Rooms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/#rental-options"
              className="text-sm font-medium hover:text-amber-600 transition-all duration-300 ease-in-out relative group"
            >
              Rental Options
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/#amenities"
              className="text-sm font-medium hover:text-amber-600 transition-all duration-300 ease-in-out relative group"
            >
              Amenities
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/#location"
              className="text-sm font-medium hover:text-amber-600 transition-all duration-300 ease-in-out relative group"
            >
              Location
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-amber-600 transition-all duration-300 ease-in-out relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-12">
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
                  href="/#rooms"
                  className="text-sm text-gray-500 hover:text-amber-600"
                >
                  Our Rooms
                </Link>
                <Link
                  href="/#rental-options"
                  className="text-sm text-gray-500 hover:text-amber-600"
                >
                  Rental Options
                </Link>
                <Link
                  href="/#amenities"
                  className="text-sm text-gray-500 hover:text-amber-600"
                >
                  Amenities
                </Link>
                <Link
                  href="/#location"
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
