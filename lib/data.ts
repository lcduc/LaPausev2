// Mock data for room listings
export interface RoomListing {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  priceUnit: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  images: string[];
  amenities: string[];
  host: {
    name: string;
    title: string;
    avatar: string;
    responseRate: string;
    responseTime: string;
    isSuperhost: boolean;
    yearsHosting: number;
  };
  houseRules: string[];
  safetyInfo: string[];
  cancellationPolicy: string[];
}

export const roomListings: RoomListing[] = [
  {
    id: 1,
    title: "Standard Room",
    description: "Our cozy standard room features a comfortable double bed, perfect for solo travelers or couples. The room is equipped with all essential amenities to ensure a pleasant stay, including free Wi-Fi, a flat-screen TV, air conditioning, and a private bathroom with hot shower. Guests also have access to a small work desk, making it suitable for business travelers who need to catch up on work.",
    shortDescription: "Cozy room with a comfortable double bed, perfect for solo travelers or couples.",
    price: 25,
    priceUnit: "2 hours",
    location: "Downtown",
    rating: 4.8,
    reviewCount: 124,
    imageUrl: "/images/rooms/standard-room.jpg",
    images: [
      "/images/rooms/standard-room.jpg",
      "/images/rooms/standard-room-2.jpg",
      "/images/rooms/standard-room-3.jpg",
      "/images/rooms/standard-room-bathroom.jpg",
    ],
    amenities: [
      "Free Wi-Fi",
      "Flat-screen TV",
      "Air Conditioning",
      "Private Bathroom",
      "Hot Shower",
      "Work Desk",
      "Clean Linens",
      "Toiletries"
    ],
    host: {
      name: "Sarah",
      title: "Room Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      responseRate: "100%",
      responseTime: "within an hour",
      isSuperhost: true,
      yearsHosting: 5
    },
    houseRules: [
      "No smoking",
      "No pets",
      "No parties or events",
      "Check-in: 2:00 PM - 10:00 PM",
      "Checkout: 12:00 PM"
    ],
    safetyInfo: [
      "Security camera at entrance",
      "Carbon monoxide alarm",
      "Smoke alarm",
      "Fire extinguisher"
    ],
    cancellationPolicy: [
      "Free cancellation for 48 hours",
      "Review the host's full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19."
    ]
  },
  {
    id: 2,
    title: "Deluxe Room",
    description: "Our spacious deluxe room offers a premium experience with a queen-sized bed and an additional seating area for added comfort. The room features elegant decor, enhanced amenities, and a larger bathroom with premium toiletries. Perfect for those seeking extra space and comfort, the deluxe room also includes a mini-fridge, coffee maker, and a larger work desk, making it ideal for both leisure and business travelers.",
    shortDescription: "Spacious room with a queen-sized bed and additional seating area for added comfort.",
    price: 35,
    priceUnit: "2 hours",
    location: "Downtown",
    rating: 4.9,
    reviewCount: 98,
    imageUrl: "/images/rooms/deluxe-room.jpg",
    images: [
      "/images/rooms/deluxe-room.jpg",
      "/images/rooms/deluxe-room-2.jpg",
      "/images/rooms/deluxe-room-3.jpg",
      "/images/rooms/deluxe-room-bathroom.jpg",
    ],
    amenities: [
      "Free Wi-Fi",
      "Flat-screen TV",
      "Air Conditioning",
      "Private Bathroom",
      "Hot Shower",
      "Mini Fridge",
      "Coffee Maker",
      "Work Desk",
      "Seating Area",
      "Premium Toiletries",
      "Clean Linens"
    ],
    host: {
      name: "Sarah",
      title: "Room Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      responseRate: "100%",
      responseTime: "within an hour",
      isSuperhost: true,
      yearsHosting: 5
    },
    houseRules: [
      "No smoking",
      "No pets",
      "No parties or events",
      "Check-in: 2:00 PM - 10:00 PM",
      "Checkout: 12:00 PM"
    ],
    safetyInfo: [
      "Security camera at entrance",
      "Carbon monoxide alarm",
      "Smoke alarm",
      "Fire extinguisher"
    ],
    cancellationPolicy: [
      "Free cancellation for 48 hours",
      "Review the host's full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19."
    ]
  },
  {
    id: 3,
    title: "Family Room",
    description: "Our family room is designed to accommodate groups or families, featuring one queen bed and two single beds. This spacious room offers ample space for everyone to relax and unwind. The room includes a larger bathroom with a bathtub, a seating area, and all the essential amenities to ensure a comfortable stay for all guests. Additional features include a mini-fridge, microwave, and extra storage space for luggage.",
    shortDescription: "Large room with one queen bed and two single beds, ideal for families or small groups.",
    price: 45,
    priceUnit: "2 hours",
    location: "Downtown",
    rating: 4.7,
    reviewCount: 76,
    imageUrl: "/images/rooms/family-room.jpg",
    images: [
      "/images/rooms/family-room.jpg",
      "/images/rooms/family-room-2.jpg",
      "/images/rooms/family-room-3.jpg",
      "/images/rooms/family-room-bathroom.jpg",
    ],
    amenities: [
      "Free Wi-Fi",
      "Flat-screen TV",
      "Air Conditioning",
      "Private Bathroom",
      "Bathtub",
      "Hot Shower",
      "Mini Fridge",
      "Microwave",
      "Seating Area",
      "Extra Storage",
      "Clean Linens",
      "Toiletries"
    ],
    host: {
      name: "Sarah",
      title: "Room Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      responseRate: "100%",
      responseTime: "within an hour",
      isSuperhost: true,
      yearsHosting: 5
    },
    houseRules: [
      "No smoking",
      "No pets",
      "No parties or events",
      "Check-in: 2:00 PM - 10:00 PM",
      "Checkout: 12:00 PM"
    ],
    safetyInfo: [
      "Security camera at entrance",
      "Carbon monoxide alarm",
      "Smoke alarm",
      "Fire extinguisher"
    ],
    cancellationPolicy: [
      "Free cancellation for 48 hours",
      "Review the host's full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19."
    ]
  },
  {
    id: 4,
    title: "Suite",
    description: "Experience luxury in our premium suite, featuring a king-sized bed, separate sitting area, and premium amenities. This is our most spacious and elegant accommodation option, designed for those seeking the ultimate comfort. The suite includes a luxurious bathroom with both a shower and bathtub, a fully stocked mini-bar, coffee machine, and a large work desk. The separate sitting area provides a perfect space to relax or entertain guests.",
    shortDescription: "Our most luxurious option with a king-sized bed, separate sitting area, and premium amenities.",
    price: 55,
    priceUnit: "2 hours",
    location: "Downtown",
    rating: 4.9,
    reviewCount: 112,
    imageUrl: "/images/rooms/suite.jpg",
    images: [
      "/images/rooms/suite.jpg",
      "/images/rooms/suite-2.jpg",
      "/images/rooms/suite-3.jpg",
      "/images/rooms/suite-bathroom.jpg",
    ],
    amenities: [
      "Free Wi-Fi",
      "Large Flat-screen TV",
      "Air Conditioning",
      "Luxury Bathroom",
      "Bathtub & Shower",
      "King-sized Bed",
      "Separate Sitting Area",
      "Mini Bar",
      "Coffee Machine",
      "Large Work Desk",
      "Premium Toiletries",
      "Bathrobes & Slippers",
      "Clean Linens"
    ],
    host: {
      name: "Sarah",
      title: "Room Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      responseRate: "100%",
      responseTime: "within an hour",
      isSuperhost: true,
      yearsHosting: 5
    },
    houseRules: [
      "No smoking",
      "No pets",
      "No parties or events",
      "Check-in: 2:00 PM - 10:00 PM",
      "Checkout: 12:00 PM"
    ],
    safetyInfo: [
      "Security camera at entrance",
      "Carbon monoxide alarm",
      "Smoke alarm",
      "Fire extinguisher"
    ],
    cancellationPolicy: [
      "Free cancellation for 48 hours",
      "Review the host's full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19."
    ]
  },
  {
    id: 5,
    title: "Twin Room",
    description: "Our twin room features two comfortable single beds, making it perfect for friends or colleagues traveling together. The room is designed to provide comfort and functionality, with all the essential amenities including free Wi-Fi, a flat-screen TV, and air conditioning. The private bathroom includes a hot shower and basic toiletries. A small work desk is also available, making it suitable for business travelers.",
    shortDescription: "Comfortable room with two single beds, perfect for friends or colleagues traveling together.",
    price: 30,
    priceUnit: "2 hours",
    location: "Downtown",
    rating: 4.6,
    reviewCount: 89,
    imageUrl: "/images/rooms/twin-room.jpg",
    images: [
      "/images/rooms/twin-room.jpg",
      "/images/rooms/twin-room-2.jpg",
      "/images/rooms/twin-room-3.jpg",
      "/images/rooms/twin-room-bathroom.jpg",
    ],
    amenities: [
      "Free Wi-Fi",
      "Flat-screen TV",
      "Air Conditioning",
      "Private Bathroom",
      "Hot Shower",
      "Work Desk",
      "Clean Linens",
      "Toiletries"
    ],
    host: {
      name: "Sarah",
      title: "Room Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      responseRate: "100%",
      responseTime: "within an hour",
      isSuperhost: true,
      yearsHosting: 5
    },
    houseRules: [
      "No smoking",
      "No pets",
      "No parties or events",
      "Check-in: 2:00 PM - 10:00 PM",
      "Checkout: 12:00 PM"
    ],
    safetyInfo: [
      "Security camera at entrance",
      "Carbon monoxide alarm",
      "Smoke alarm",
      "Fire extinguisher"
    ],
    cancellationPolicy: [
      "Free cancellation for 48 hours",
      "Review the host's full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19."
    ]
  }
];

// Rental options data
export interface RentalOption {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  basePrice: number;
  roomMultiplier: number;
}

export const rentalOptions: RentalOption[] = [
  {
    id: "option-2h",
    name: "2 Hours",
    description: "Perfect for a quick rest, shower, or meeting. Ideal for business travelers between appointments.",
    duration: "2h",
    price: 0, // Will be calculated based on room
    basePrice: 25,
    roomMultiplier: 1
  },
  {
    id: "option-4h",
    name: "4 Hours",
    description: "Extended rest period, perfect for day use or when you need more time to relax or work.",
    duration: "4h",
    price: 0, // Will be calculated based on room
    basePrice: 40,
    roomMultiplier: 1.6
  },
  {
    id: "option-overnight",
    name: "Overnight",
    description: "Standard overnight stay from evening check-in to morning check-out. Includes breakfast.",
    duration: "overnight",
    price: 0, // Will be calculated based on room
    basePrice: 60,
    roomMultiplier: 2.4
  },
  {
    id: "option-allday",
    name: "All Day",
    description: "Full day use from morning to evening. Perfect when you need a base for the day.",
    duration: "allday",
    price: 0, // Will be calculated based on room
    basePrice: 75,
    roomMultiplier: 3
  },
  {
    id: "option-2d1n",
    name: "2 Days 1 Night",
    description: "Extended stay with late check-out on the second day. Includes breakfast both mornings.",
    duration: "2d1n",
    price: 0, // Will be calculated based on room
    basePrice: 100,
    roomMultiplier: 4
  }
];

// Function to calculate rental option price based on room
export function calculateRentalOptionPrice(roomPrice: number, optionId: string): number {
  const option = rentalOptions.find(opt => opt.id === optionId);
  if (!option) return 0;
  
  return Math.round(roomPrice * option.roomMultiplier);
}

// Function to get room by ID
export function getRoomById(id: number): RoomListing | undefined {
  return roomListings.find(room => room.id === id);
}
