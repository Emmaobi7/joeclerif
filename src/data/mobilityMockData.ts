export interface MobilityServiceCategory {
  id: string;
  num: string;
  title: string;
  headline: string;
  description: string;
  typicalDuration: string;
  recommendedFleet: string;
  rateEstimate: string;
  features: string[];
}

export const MOBILITY_SERVICES: MobilityServiceCategory[] = [
  {
    id: "airport",
    num: "01",
    title: "Airport Transfers",
    headline: "Seamless Kaduna & Abuja Flight Connections",
    description: "Personalized flight monitoring with uniformed greeting at Kaduna International (KAD) or Abuja Nnamdi Azikiwe (ABV), luggage assistance, and express highway transit directly to the hotel portico.",
    typicalDuration: "1h 15m (KAD) / 2h 45m (ABV)",
    recommendedFleet: "Executive Sedan & Luxury SUV",
    rateEstimate: "From ₦45,000 (KAD) / ₦95,000 (ABV)",
    features: ["Real-time Flight Tracking", "Complimentary 60m Wait Time", "Chilled Bottled Water & WiFi", "Luggage Porterage"],
  },
  {
    id: "chauffeur",
    num: "02",
    title: "Executive Chauffeur",
    headline: "Dedicated Professional Driver on Standby",
    description: "An experienced, discreet, background-checked professional chauffeur assigned exclusively to your itinerary for corporate meetings, academic summits, or VIP government consultations.",
    typicalDuration: "4 to 12 Hours Standby",
    recommendedFleet: "Mercedes-Benz S-Class or Toyota Land Cruiser",
    rateEstimate: "₦20,000 / Hour &bull; ₦140,000 / Day",
    features: ["Bilingual Professional Chauffeurs", "Security & Defensive Driving Certified", "Flexible Route Adaptability", "Direct Intercom with Hotel"],
  },
  {
    id: "luxury_hire",
    num: "03",
    title: "Luxury Flagship Sedans",
    headline: "Refined Cabin Serenity for Executive Guests",
    description: "Flagship luxury sedans offering acoustic isolation, rear-seat executive recline, climate control zones, and quiet highway performance for visiting professors, executives, and dignitaries.",
    typicalDuration: "Daily & Multi-Day Hire",
    recommendedFleet: "Mercedes-Benz S500 / BMW 740i / Lexus LS",
    rateEstimate: "₦125,000 / Day",
    features: ["Executive Nappa Leather Recline", "Rear Vanity Mirrors & Shading", "Harman Kardon / Burmester Sound", "Comprehensive Insurance"],
  },
  {
    id: "suv",
    num: "04",
    title: "Premium All-Terrain SUVs",
    headline: "Commanding Elevation for Regional Journeys",
    description: "Heavy-duty luxury SUVs engineered to navigate Northern Nigerian intercity expressways and regional terrain with unmatched comfort, high ground clearance, and optional armoring.",
    typicalDuration: "Daily & Regional Transit",
    recommendedFleet: "Toyota Land Cruiser 300 VXR / Lexus LX600",
    rateEstimate: "₦140,000 / Day (Armored: ₦280,000)",
    features: ["Heavy-Duty All-Terrain Capability", "High-Stance Road Presence", "Bulletproof / B6 Armored Available", "Reinforced Run-Flat Tires"],
  },
  {
    id: "group",
    num: "05",
    title: "Group & Family Shuttles",
    headline: "Coordinated Comfort for Conference Delegations",
    description: "High-roof luxury passenger vans configured with individual captain seats, overhead parcel storage, and dual-zone air conditioning for ABU Zaria conference speakers and wedding parties.",
    typicalDuration: "Airport Shuttle & Day Excursions",
    recommendedFleet: "Toyota HiAce Executive / Mercedes Sprinter VIP",
    rateEstimate: "From ₦85,000 / Transfer (14 Seats)",
    features: ["10–14 Leather Reclining Captains", "Central PA Microphone System", "Full Panoramic Glazing", "High-Capacity Luggage Cargo"],
  },
  {
    id: "intercity",
    num: "06",
    title: "Intercity Highway Journeys",
    headline: "Direct Non-Stop Highway Connections",
    description: "Direct highway transit between Zaria, Kaduna Metropolis, Abuja FCT, and Kano City with verified rest stops, dual-driver rotations for long trips, and telemetry tracking.",
    typicalDuration: "Point-to-Point Transit",
    recommendedFleet: "Luxury SUV or Executive Sedan",
    rateEstimate: "₦65,000 (Kaduna) / ₦120,000 (Abuja) / ₦75,000 (Kano)",
    features: ["Dedicated Highway Route Planning", "Live GPS Telemetry to Hotel Desk", "Emergency Fuel & Recovery Backup", "Toll Pass Pre-cleared"],
  },
  {
    id: "wedding",
    num: "07",
    title: "Wedding & Event Convoys",
    headline: "Grand Ceremonial Transportation Logistics",
    description: "Synchronized luxury motorcades for wedding couples, bridal parties, and distinguished family elders celebrating at the Grand Savannah Banquet Hall.",
    typicalDuration: "1 to 3 Days Wedding Block",
    recommendedFleet: "Matching White Mercedes / Land Cruiser Motorcade",
    rateEstimate: "From ₦350,000 / Day (3-Vehicle Convoy)",
    features: ["Coordinated Convoy Dispatch", "Ceremonial Floral Adornments", "Lead Vehicle Escort Protocol", "Driver Radio Synchronization"],
  },
  {
    id: "hourly",
    num: "08",
    title: "Hourly & Full-Day Standby",
    headline: "Maximum Schedule Freedom and Spontaneity",
    description: "Keep a premium vehicle and driver stationed at the hotel porte-cochère, ready to depart at a moment's notice for unscheduled meetings, dinners, or city tours.",
    typicalDuration: "Minimum 3 Hours",
    recommendedFleet: "Any Preferred Fleet Model",
    rateEstimate: "₦18,000 / Hour (Min 3h)",
    features: ["Immediate Portico Departure", "Zero Advance Booking Friction", "Fuel Included within 50km Radius", "Hotel Folio Consolidation"],
  },
];

export interface FleetVehicle {
  id: string;
  name: string;
  category: "Executive Sedan" | "Luxury SUV" | "VIP Sprinter Van" | "Armored Flagship";
  tier: "Hotel Fleet" | "Verified Partner";
  passengers: number;
  luggage: number;
  transmission: string;
  dailyRate: string;
  hourlyRate: string;
  image: string;
  tagline: string;
  specs: string[];
}

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: "veh-lc300",
    name: "Toyota Land Cruiser 300 VXR",
    category: "Luxury SUV",
    tier: "Hotel Fleet",
    passengers: 4,
    luggage: 4,
    transmission: "Automatic 4WD",
    dailyRate: "₦140,000",
    hourlyRate: "₦22,000",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Uncontested Standard for Northern Nigerian Executive Travel",
    specs: ["3.3L Twin-Turbo Diesel V6", "Cooled Semi-Aniline Leather", "Multi-Terrain Kinetic Suspension", "Rear Entertainment Displays"],
  },
  {
    id: "veh-s500",
    name: "Mercedes-Benz S-Class S500",
    category: "Executive Sedan",
    tier: "Hotel Fleet",
    passengers: 3,
    luggage: 3,
    transmission: "Automatic 9G-Tronic",
    dailyRate: "₦125,000",
    hourlyRate: "₦20,000",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    tagline: "Unrivaled First-Class Acoustic Cabin Isolation & Decorum",
    specs: ["First-Class Rear Executive Recline", "Burmester 3D Surround Sound", "Chauffeur Package with Footrest", "Active Road-Scanning Air Suspension"],
  },
  {
    id: "veh-sprinter",
    name: "Mercedes-Benz Sprinter VIP Coach",
    category: "VIP Sprinter Van",
    tier: "Verified Partner",
    passengers: 12,
    luggage: 12,
    transmission: "Automatic High-Roof",
    dailyRate: "₦180,000",
    hourlyRate: "₦28,000",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
    tagline: "Dedicated Luxury Transit for University Delegations & Wedding Parties",
    specs: ["12 Bespoke Leather Captain Chairs", "High-Definition HDMI Display Screen", "High-Volume Luggage Bay", "Onboard 220V Laptop Charging Points"],
  },
  {
    id: "veh-armored",
    name: "Toyota Land Cruiser B6 Armored V8",
    category: "Armored Flagship",
    tier: "Verified Partner",
    passengers: 4,
    luggage: 3,
    transmission: "Automatic 4WD Reinforced",
    dailyRate: "₦280,000",
    hourlyRate: "₦42,000",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    tagline: "Certified B6 Armored Ballistic Protection with Escort Handshake",
    specs: ["CEN B6 Ballistic Steel & Glass", "Run-Flat Tire Inserts (50km Escape)", "Underbody Blast Shielding", "Trained Security Defensive Chauffeur"],
  },
];
