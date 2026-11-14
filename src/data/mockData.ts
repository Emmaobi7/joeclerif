import { GroupReservation, ExtractedIdData } from "@/types";

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80", // Grand luxury hotel facade/pool
  suite: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80", // Luxury presidential suite
  deluxe: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80", // Executive king room
  executive: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80", // Luxury bedroom
  banquetHall: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80", // Elegant banquet / event hall
  dining: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80", // Fine dining restaurant
  lobby: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80", // Elegant boutique reception lounge
  concierge: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80", // Warm hospitality service
};

export const MOCK_GROUP_RESERVATION: GroupReservation = {
  id: "GRP-2026-8841",
  title: "Adewale & Danjuma Wedding Delegation",
  coordinator: {
    name: "Mrs. Folashade Adewale",
    phone: "+234 803 459 2810",
    email: "f.adewale@lagosgroup.ng",
    city: "Lagos, Nigeria",
  },
  eventDate: "25 November 2026 (3 Nights)",
  roomsCount: 15,
  hallName: "Grand Savannah Banquet Hall",
  hallCapacity: "150-220 Guests (Banquet Style)",
  totalEstimatedAmount: "₦ 4,850,000",
  billingMode: "Split (Rooms Individual / Hall Master)",
  status: "Inquiry Analysis",
  allocations: [
    {
      id: "ALC-01",
      guestName: "Chief & Mrs. O. Adewale (Parents)",
      roomType: "Governor Suite",
      roomNumber: "Ste 401",
      nights: 3,
      occupancy: "2 Adults",
      status: "Allocated",
      dietaryOrNotes: "VIP Welcome Fruit Basket, Ground-floor preference",
      estimatedRate: "₦ 145,000 / night",
    },
    {
      id: "ALC-02",
      guestName: "Bride & Bridal Party (Prep suite)",
      roomType: "Executive Deluxe Suite",
      roomNumber: "Ste 402",
      nights: 3,
      occupancy: "3 Guests",
      status: "Allocated",
      dietaryOrNotes: "Full-length steamer requested, late checkout",
      estimatedRate: "₦ 110,000 / night",
    },
    {
      id: "ALC-03",
      guestName: "Groom & Best Man",
      roomType: "Executive King Room",
      roomNumber: "Room 312",
      nights: 3,
      occupancy: "2 Adults",
      status: "Allocated",
      dietaryOrNotes: "Adjacent to bridal wing",
      estimatedRate: "₦ 75,000 / night",
    },
    {
      id: "ALC-04",
      guestName: "Dr. Ibrahim Danjuma",
      roomType: "Executive King Room",
      roomNumber: "Room 314",
      nights: 3,
      occupancy: "1 Adult",
      status: "Allocated",
      dietaryOrNotes: "Quiet wing, arrival via Kaduna Airport",
      estimatedRate: "₦ 75,000 / night",
    },
    {
      id: "ALC-05",
      guestName: "Barrister & Mrs. K. Bello",
      roomType: "Deluxe Double Queen",
      roomNumber: "Room 316",
      nights: 3,
      occupancy: "2 Adults, 1 Child",
      status: "Allocated",
      dietaryOrNotes: "Baby cot requested",
      estimatedRate: "₦ 85,000 / night",
    },
    {
      id: "ALC-06",
      guestName: "Engr. Tunde Coker",
      roomType: "Superior Standard King",
      roomNumber: "Room 208",
      nights: 2,
      occupancy: "1 Adult",
      status: "Allocated",
      dietaryOrNotes: "Arriving Nov 26 morning",
      estimatedRate: "₦ 60,000 / night",
    },
    {
      id: "ALC-07",
      guestName: "Mrs. Amina Yusuf & Family",
      roomType: "Deluxe Double Queen",
      roomNumber: "Room 210",
      nights: 3,
      occupancy: "3 Adults",
      status: "Allocated",
      dietaryOrNotes: "Adjoining room request",
      estimatedRate: "₦ 85,000 / night",
    },
    {
      id: "ALC-08",
      guestName: "Alhaji Garba Sani",
      roomType: "Superior Standard King",
      roomNumber: "Room 212",
      nights: 3,
      occupancy: "1 Adult",
      status: "Allocated",
      dietaryOrNotes: "Vegetarian breakfast request",
      estimatedRate: "₦ 60,000 / night",
    },
    {
      id: "ALC-09",
      guestName: "Family Delegation Group A (4 Guests)",
      roomType: "Two Interconnected Kings",
      roomNumber: "Rooms 214-216",
      nights: 3,
      occupancy: "4 Adults",
      status: "Allocated",
      dietaryOrNotes: "Early check-in requested",
      estimatedRate: "₦ 120,000 / night",
    },
    {
      id: "ALC-10",
      guestName: "Cousins Wing (3 Guests)",
      roomType: "Deluxe Twin Room",
      roomNumber: "Room 218",
      nights: 3,
      occupancy: "2 Adults",
      status: "Pending Details",
      dietaryOrNotes: "Pending guest names verification",
      estimatedRate: "₦ 65,000 / night",
    },
    {
      id: "ALC-11",
      guestName: "Family Delegation Group B",
      roomType: "Superior Standard King",
      roomNumber: "Room 220",
      nights: 3,
      occupancy: "2 Adults",
      status: "Pending Details",
      dietaryOrNotes: "Arrival time pending flight confirmation",
      estimatedRate: "₦ 60,000 / night",
    },
    {
      id: "ALC-12",
      guestName: "Event Coordinators & Vendors",
      roomType: "Superior Standard King",
      roomNumber: "Room 105",
      nights: 3,
      occupancy: "2 Staff",
      status: "Allocated",
      dietaryOrNotes: "Late night access required",
      estimatedRate: "₦ 60,000 / night",
    },
    {
      id: "ALC-13",
      guestName: "Photography & Media Crew",
      roomType: "Standard Twin Room",
      roomNumber: "Room 106",
      nights: 2,
      occupancy: "2 Staff",
      status: "Allocated",
      dietaryOrNotes: "High-speed upload needs",
      estimatedRate: "₦ 55,000 / night",
    },
    {
      id: "ALC-14",
      guestName: "Uncle Biodun & Guest",
      roomType: "Executive King Room",
      roomNumber: "Room 318",
      nights: 3,
      occupancy: "2 Adults",
      status: "Allocated",
      dietaryOrNotes: "Ground floor or elevator close",
      estimatedRate: "₦ 75,000 / night",
    },
    {
      id: "ALC-15",
      guestName: "Special Guest from UK",
      roomType: "Executive Deluxe Suite",
      roomNumber: "Ste 403",
      nights: 4,
      occupancy: "1 Adult",
      status: "Allocated",
      dietaryOrNotes: "Airport pick-up from Abuja requested",
      estimatedRate: "₦ 110,000 / night",
    },
  ],
};

export const MOCK_OCR_DATA: ExtractedIdData = {
  documentType: "National Passport (Standard E-Passport)",
  documentNumber: "A09482163",
  fullName: "FOLASHADE BLESSING ADEWALE",
  dateOfBirth: "14 SEP 1984",
  nationality: "NIGERIAN",
  expiryDate: "22 OCT 2029",
  issuingCountry: "NGA",
  confidenceScore: 98.4,
};

export const ROADMAP_PHASES = [
  {
    phase: "Phase 1",
    title: "Digital Foundation & Direct Booking",
    duration: "Estimated Foundation Track",
    summary:
      "Establish an owned high-conversion hotel website, direct booking engine, multi-currency display, and baseline property management integration.",
    deliverables: [
      "Custom responsive guest website with editorial photography showcase",
      "Real-time room availability & direct reservation checkout",
      "Card, USSD & bank transfer payments with automated receipting",
      "Core admin dashboard for room allocations and guest folios",
      "Automated branded confirmation emails and SMS booking notifications",
    ],
    businessValue:
      "Reclaims direct booking revenue, eliminates reliance on third-party OTA commissions, and establishes professional digital prestige for Joclarif.",
  },
  {
    phase: "Phase 2",
    title: "Group & Event Intelligence",
    duration: "Group & Banquet Track",
    summary:
      "Purpose-built architecture for weddings, university convocations, corporate retreats, and event hall reservations.",
    deliverables: [
      "Parent reservation architecture with multi-room delegation tools",
      "Interactive event hall booking with floorplan capacity previews",
      "Group coordinator portal for managing individual guest names & rooming lists",
      "Consolidated master billing or split guest pay-at-desk logic",
      "Integrated catering & audiovisual package enquiry flows",
    ],
    businessValue:
      "Captures high-value multi-room delegations in Zaria that currently require cumbersome phone calls and manual spreadsheet tracking.",
  },
  {
    phase: "Phase 3",
    title: "AI Guest Experience & Translation",
    duration: "Smart Concierge Track",
    summary:
      "Intelligent conversational booking co-pilot and 24/7 multilingual guest concierge with transparent staff escalation.",
    deliverables: [
      "Natural-language inquiry parser converting chat into structured quotes",
      "Multi-language guest concierge (English, French, Hausa, Arabic)",
      "Automated staff translation interface (staff reads French as English)",
      "Smart escalation routing to duty manager for high-touch requests",
      "Deterministic inventory check (AI never hallucinates prices or rooms)",
    ],
    businessValue:
      "Dramatically accelerates inquiry-to-booking speed, services international and regional travelers effortlessly, and relieves front desk telephone strain.",
  },
  {
    phase: "Phase 4",
    title: "Mobile App & Digital Self Check-in",
    duration: "Contactless Guest Track",
    summary:
      "Native mobile companion for guests: pre-arrival document capture, digital room keys, and in-stay service ordering.",
    deliverables: [
      "Lightweight guest web app / mobile companion (iOS & Android compatible)",
      "Pre-arrival identity document capture with OCR text extraction",
      "Consent-based guest privacy controls & data encryption",
      "Room service ordering, housekeeping requests & digital folio review",
      "Push alerts for room readiness and check-out confirmation",
    ],
    businessValue:
      "Reduces front desk lobby queues during peak check-in hours to under 60 seconds and creates high-margin in-stay dining and service revenue.",
  },
  {
    phase: "Phase 5",
    title: "Operational Intelligence & Automation",
    duration: "Enterprise Optimization Track",
    summary:
      "Unified operational nerve centre linking housekeeping, maintenance, front desk dispatch, and executive financial reporting.",
    deliverables: [
      "Live housekeeping mobile board (clean, inspected, turn-down status)",
      "Maintenance incident ticketing with photo attachments & tracking",
      "Night audit automation, daily revenue breakdowns & RevPAR reports",
      "Corporate account billing & recurring government delegation accounts",
      "Staff audit trails and granular role-based permission tiers",
    ],
    businessValue:
      "Eliminates operational leakage, prevents room downtime, and gives hotel ownership complete transparency over daily revenue from anywhere in the world.",
  },
];

