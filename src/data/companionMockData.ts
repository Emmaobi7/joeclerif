export interface CompanionProfile {
  id: string;
  name: string;
  age: number;
  headline: string;
  location: string;
  languages: string[];
  interests: string[];
  bio: string;
  boundaries: string[];
  verificationStatus: "Approved & Active" | "Verification Pending" | "Draft" | "Suspended / Expired";
  verifiedDate: string;
  hourlyRate: string;
  rating: string;
  reviewsCount: number;
  avatar: string;
  heroImage: string;
  availableDays: string[];
  preferredVenues: string[];
  idProvider: string;
}

export const COMPANION_PROFILES: CompanionProfile[] = [
  {
    id: "CMP-001",
    name: "Amina Bello, M.A.",
    age: 27,
    headline: "Cultural Historian & Arts Curator",
    location: "Zaria / Kaduna",
    languages: ["English (Fluent)", "French (Conversational)", "Hausa (Native)"],
    interests: ["ABU Fine Arts Tours", "Heritage Architecture", "Literary Salons", "Fine Dining"],
    bio: "Master's graduate in Art History with a specialized focus on Northern Nigerian cultural heritage. Experienced in guiding visiting academics, diplomats, and hotel guests through gallery retrospectives and curated culinary evenings.",
    boundaries: [
      "Public hotel dining, exhibition spaces, and verified cultural venues only.",
      "Strict 23:00 engagement conclusion. No uncoordinated venue deviations.",
      "Alcohol consumption is strictly optional and moderate.",
      "Clear zero-tolerance policy regarding harassment or boundary breaches.",
    ],
    verificationStatus: "Approved & Active",
    verifiedDate: "14 Oct 2026",
    hourlyRate: "₦45,000 / 3-Hr Intro",
    rating: "4.98",
    reviewsCount: 24,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    availableDays: ["Thursdays", "Fridays", "Saturdays", "Sundays"],
    preferredVenues: ["Savannah Dining Room", "Zaria Arts Pavilion", "Joclarif Terrace Lounge"],
    idProvider: "Verified by IdentityPass (NIN & Passport Biometric)",
  },
  {
    id: "CMP-002",
    name: "Tariq Al-Mansoor",
    age: 31,
    headline: "Diplomatic Protocol & Golf Companion",
    location: "Zaria / Abuja",
    languages: ["English (Fluent)", "Arabic (Professional)", "Hausa (Native)"],
    interests: ["Zaria Golf Club Rounds", "Executive Dinner Escort", "Diplomatic Protocol", "Economic Dialogue"],
    bio: "Corporate communications background with deep experience hosting institutional guests, conference delegates, and visiting fellows. Knowledgeable in bilateral affairs, golf hospitality, and evening banquet decorum.",
    boundaries: [
      "Official conference dinners, clubhouse golf courses, and hotel private dining only.",
      "Minimum 24-hour advance coordination required.",
      "No unvetted off-property excursions.",
      "Non-smoking public environments preferred.",
    ],
    verificationStatus: "Approved & Active",
    verifiedDate: "02 Nov 2026",
    hourlyRate: "₦60,000 / 4-Hr Session",
    rating: "5.00",
    reviewsCount: 19,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    availableDays: ["Fridays", "Saturdays", "Sundays", "Mondays"],
    preferredVenues: ["Grand Savannah Banquet Hall", "Zaria Golf Club Lounge", "Governor Suite Dining"],
    idProvider: "Verified by IdentityPass (Voter Card & Interpol Clearance)",
  },
  {
    id: "CMP-003",
    name: "Dr. Nneka Eze",
    age: 29,
    headline: "Academic Fellow & Chamber Music Enthusiast",
    location: "Zaria (ABU Campus)",
    languages: ["English (Native)", "Igbo (Fluent)", "German (Basic)"],
    interests: ["Symposium Dinners", "Classical Music", "Philosophy of Architecture", "Literary Evenings"],
    bio: "Postdoctoral fellow exploring regional economic development in Northern Nigeria. Passionate conversationalist for symposium attendees, university visiting professors, and solo business travelers seeking intellectual depth.",
    boundaries: [
      "ABU academic functions, hotel banquet dining, and public library discussions only.",
      "No residential or non-accredited private venues.",
      "Zero tolerance for coercive language or uncoordinated requests.",
      "Mandatory dual confirmation PIN protocol.",
    ],
    verificationStatus: "Approved & Active",
    verifiedDate: "28 Sep 2026",
    hourlyRate: "₦50,000 / 3-Hr Intro",
    rating: "4.95",
    reviewsCount: 31,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    availableDays: ["Wednesdays", "Thursdays", "Fridays", "Saturdays"],
    preferredVenues: ["Joclarif Library Bar", "Savannah Dining Room", "Mezzanine Boardroom Lounge"],
    idProvider: "Verified by IdentityPass (ABU Faculty Card & National ID)",
  },
];

export interface CompanionBookingState {
  id: string;
  companionName: string;
  guestName: string;
  engagementType: string;
  scheduledTime: string;
  venue: string;
  amount: string;
  escrowStatus: "Held in Protected Escrow" | "Disbursed to Available" | "Dispute Hold";
  completionPin: string;
  guestConfirmed: boolean;
  companionConfirmed: boolean;
  status: "Requested" | "Accepted & Funded" | "In Session" | "Completed & Cleared";
}

export const SAMPLE_BOOKING: CompanionBookingState = {
  id: "BK-CMP-2026-904",
  companionName: "Amina Bello, M.A.",
  guestName: "Prof. Kenneth Sterling (ABU Visiting Fellow)",
  engagementType: "ABU Arts Retrospective & Savannah Dinner",
  scheduledTime: "Today &bull; 19:00 – 22:00 (3 Hours)",
  venue: "Savannah Dining Room (Table 4, Verified Public Setting)",
  amount: "₦45,000",
  escrowStatus: "Held in Protected Escrow",
  completionPin: "8492",
  guestConfirmed: false,
  companionConfirmed: false,
  status: "Accepted & Funded",
};

export const COMPANION_WALLET_MOCK = {
  protectedBookingFunds: "₦45,000",
  availableEarnings: "₦185,000",
  lifetimeEarnings: "₦680,000",
  completedEngagements: 16,
  upcomingEscrowHeld: "1 Active Booking (Today 19:00)",
  lastWithdrawal: "₦120,000 (15 Nov 2026 to Zenith Bank)",
  bankDetails: "Zenith Bank &bull; **** 4819 (Amina Bello)",
};
