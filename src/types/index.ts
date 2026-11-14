export interface RoomAllocation {
  id: string;
  guestName: string;
  roomType: string;
  roomNumber: string;
  nights: number;
  occupancy: string;
  status: "Allocated" | "Checked-in" | "Pending Details";
  dietaryOrNotes?: string;
  estimatedRate: string;
}

export interface GroupReservation {
  id: string;
  title: string;
  coordinator: {
    name: string;
    phone: string;
    email: string;
    city: string;
  };
  eventDate: string;
  roomsCount: number;
  hallName: string;
  hallCapacity: string;
  totalEstimatedAmount: string;
  billingMode: "Consolidated Master Bill" | "Individual Guest Folio" | "Split (Rooms Individual / Hall Master)";
  status: "Inquiry Analysis" | "Tentative Hold" | "Deposit Confirmed";
  allocations: RoomAllocation[];
}

export interface ConciergeMessage {
  id: string;
  sender: "guest" | "ai" | "staff" | "system";
  text: string;
  originalText?: string;
  originalLanguage?: string;
  timestamp: string;
  isEscalated?: boolean;
}

export interface ExtractedIdData {
  documentType: string;
  documentNumber: string;
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  expiryDate: string;
  issuingCountry: string;
  confidenceScore: number;
}

