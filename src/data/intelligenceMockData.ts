export type UserRole = "owner" | "gm" | "hr" | "ops";

export type WorkspaceId =
  | "overview"
  | "financials"
  | "people"
  | "assets"
  | "operations"
  | "assistant"
  | "datasources"
  | "activity";

export interface RoleConfig {
  id: UserRole;
  title: string;
  badge: string;
  description: string;
  allowedWorkspaces: WorkspaceId[];
  accessLevel: "Full Access" | "Operational & Financial" | "Workforce & Confidential" | "Operations & Facilities";
}

export const ROLES: Record<UserRole, RoleConfig> = {
  owner: {
    id: "owner",
    title: "Hotel Ownership",
    badge: "Executive / Board",
    description: "Full visibility across all financial balances, executive intelligence, workforce costs, and operational audits.",
    allowedWorkspaces: ["overview", "financials", "people", "assets", "operations", "assistant", "datasources", "activity"],
    accessLevel: "Full Access",
  },
  gm: {
    id: "gm",
    title: "General Manager",
    badge: "Operations & P&L",
    description: "Day-to-day command of hotel operations, guest services, departmental revenue performance, and facility status.",
    allowedWorkspaces: ["overview", "financials", "people", "assets", "operations", "assistant", "datasources", "activity"],
    accessLevel: "Operational & Financial",
  },
  hr: {
    id: "hr",
    title: "HR & Talent Manager",
    badge: "Workforce & Compliance",
    description: "Specialized visibility into employee records, biometric attendance, shift scheduling, payroll distribution, and leave compliance.",
    allowedWorkspaces: ["overview", "people", "assistant", "datasources", "activity"],
    accessLevel: "Workforce & Confidential",
  },
  ops: {
    id: "ops",
    title: "Operations & Facilities Manager",
    badge: "Field Operations",
    description: "Tactical control of room rack turnaround, housekeeping queues, power generator telemetry, equipment maintenance, and procurement.",
    allowedWorkspaces: ["overview", "assets", "operations", "assistant", "datasources", "activity"],
    accessLevel: "Operations & Facilities",
  },
};

export interface OperationalZone {
  id: string;
  name: string;
  department: string;
  level: string;
  status: "Optimal" | "Action Required" | "Active Event" | "Under Maintenance";
  kpis: { label: string; value: string }[];
  summary: string;
  staffOnDuty: number;
  outstandingIssues: string[];
  recentActivity: string;
  recommendedWorkspace: WorkspaceId;
  modelCoordinates: { x: number; y: number; z: number };
}

export const OPERATIONAL_ZONES: OperationalZone[] = [
  {
    id: "rooms_west",
    name: "West Accommodation Wing",
    department: "Guest Rooms (Deluxe & Executive)",
    level: "Floors 1 – 3",
    status: "Optimal",
    kpis: [
      { label: "Rooms Occupied", value: "39 / 48 (81.2%)" },
      { label: "Turnaround Time", value: "24 mins" },
      { label: "Guest Rating", value: "4.8 / 5.0" },
    ],
    summary: "High occupancy driven by ABU Zaria academic research conference delegation. All HVAC fan-coil units operating smoothly.",
    staffOnDuty: 6,
    outstandingIssues: ["Room 204 minibar restocking pending", "Room 312 extra hypoallergenic pillows requested"],
    recentActivity: "4 express digital pre-check-ins confirmed at 14:15",
    recommendedWorkspace: "operations",
    modelCoordinates: { x: -2.2, y: 1.4, z: 0 },
  },
  {
    id: "rooms_east",
    name: "East Accommodation Wing & Suites",
    department: "Governor Suite 401 & Diplomatic Wing",
    level: "Floors 2 – 4",
    status: "Optimal",
    kpis: [
      { label: "Suites Occupied", value: "52 / 72 (72.2%)" },
      { label: "VIP Protocol", value: "Governor Suite Active" },
      { label: "Direct Revenue", value: "₦14.2M MTD" },
    ],
    summary: "Governor Suite 401 occupied by state economic delegation. Security clearance active with private elevator lockout.",
    staffOnDuty: 8,
    outstandingIssues: ["Evening turndown service scheduled for 18:30"],
    recentActivity: "Luggage express transit delivered to Suite 401 without delay",
    recommendedWorkspace: "operations",
    modelCoordinates: { x: 2.2, y: 1.6, z: 0 },
  },
  {
    id: "lobby_atrium",
    name: "Grand Reception & Atrium Lobby",
    department: "Front Office & Concierge",
    level: "Ground Level",
    status: "Optimal",
    kpis: [
      { label: "Arrivals Processed", value: "24 Today" },
      { label: "Avg Wait Time", value: "1.4 mins" },
      { label: "Digital Check-in Rate", value: "68%" },
    ],
    summary: "Front desk operating with 3 duty agents. Digital check-in kiosk flow eliminating reception queues during afternoon peak.",
    staffOnDuty: 5,
    outstandingIssues: ["Airport VIP transit arrival expected at 17:45 (Kaduna Airport shuttle)"],
    recentActivity: "Fast-track QR boarding pass scanned for guest Dr. Al-Hassan",
    recommendedWorkspace: "operations",
    modelCoordinates: { x: 0, y: 0.3, z: 1.2 },
  },
  {
    id: "dining_kitchen",
    name: "Savannah Dining & Commercial Kitchen",
    department: "Food & Beverage",
    level: "Ground & Mezzanine",
    status: "Action Required",
    kpis: [
      { label: "Covers Today", value: "184 Covers" },
      { label: "Daily F&B Revenue", value: "₦1,840,000" },
      { label: "Inventory Health", value: "88% (3 Low Items)" },
    ],
    summary: "Lunch service completed smoothly. Executive Chef flagged low cooking gas reserve and bulk dairy replenishment pending from Kaduna supplier.",
    staffOnDuty: 9,
    outstandingIssues: ["Commercial LPG cylinder level at 18% (delivery scheduled 09:00 tomorrow)", "Pastry display refrigeration seal inspection needed"],
    recentActivity: "Banquet buffet menu prepped for 220 guests",
    recommendedWorkspace: "financials",
    modelCoordinates: { x: -1.6, y: 0.4, z: -1.4 },
  },
  {
    id: "banquet_hall",
    name: "Grand Savannah Banquet Hall",
    department: "Conferences & Events",
    level: "Pavilion East",
    status: "Active Event",
    kpis: [
      { label: "Current Booking", value: "ABU Convocation Gala" },
      { label: "Guaranteed Guests", value: "220 Guests" },
      { label: "Contract Value", value: "₦3,850,000" },
    ],
    summary: "Hall pre-cooling in progress. Audiovisual line check completed. Group Folio GRP-2026-8841 linked with 15 attendee suites.",
    staffOnDuty: 7,
    outstandingIssues: ["Stage podium microphone wireless channel 4 RF interference cleared"],
    recentActivity: "Master coordinator verified room layout at 14:30",
    recommendedWorkspace: "operations",
    modelCoordinates: { x: 2.8, y: 0.6, z: -1.2 },
  },
  {
    id: "housekeeping_hub",
    name: "Housekeeping & Linen Hub",
    department: "Rooms & Hygiene",
    level: "Basement 1",
    status: "Optimal",
    kpis: [
      { label: "Rooms Cleaned", value: "58 / 74 (78.4%)" },
      { label: "Awaiting Cleaning", value: "12 Rooms" },
      { label: "Inspection Queue", value: "4 Rooms" },
    ],
    summary: "On track for complete 16:00 room turnover deadline. Industrial laundry steam press operational with zero maintenance backlog.",
    staffOnDuty: 8,
    outstandingIssues: ["Linen detergent restock PO awaiting procurement approval"],
    recentActivity: "Floor 2 supervisor cleared 6 deluxe rooms for check-in",
    recommendedWorkspace: "operations",
    modelCoordinates: { x: 0, y: -0.4, z: 0.8 },
  },
  {
    id: "admin_boardroom",
    name: "Executive Administration & Boardroom",
    department: "Management & Finance",
    level: "Mezzanine Floor",
    status: "Optimal",
    kpis: [
      { label: "Ledger State", value: "Synchronized (14:00)" },
      { label: "Pending Approvals", value: "3 Purchase Orders" },
      { label: "Audit Compliance", value: "100% NDPR" },
    ],
    summary: "Accounts department processing month-end supplier remittances. Real-time ledger mirroring active across legacy spreadsheets and PMS SQL.",
    staffOnDuty: 4,
    outstandingIssues: ["Supplier payment batch ₦4.85M awaiting final Owner sign-off"],
    recentActivity: "Exported monthly P&L statement to board archive",
    recommendedWorkspace: "financials",
    modelCoordinates: { x: 0, y: 0.9, z: -0.8 },
  },
  {
    id: "power_plant",
    name: "Central Energy Plant & Generators",
    department: "Engineering & Facilities",
    level: "Service Compound",
    status: "Optimal",
    kpis: [
      { label: "Active Power", value: "Caterpillar 500kVA (Load 68%)" },
      { label: "Grid Status", value: "Kaduna DisCo Standby" },
      { label: "Diesel Reserve", value: "8,400L (84% Tank)" },
    ],
    summary: "Primary generator runtime 4.2 hours today with zero voltage flutters. Chiller plant water loop operating at nominal 7.2°C.",
    staffOnDuty: 3,
    outstandingIssues: ["Generator #2 250-hour oil & fuel filter service scheduled in 18 runtime hours"],
    recentActivity: "Fuel tank automated telemetry logged 200L consumption",
    recommendedWorkspace: "assets",
    modelCoordinates: { x: -2.8, y: -0.2, z: -1.6 },
  },
];

export interface FinancialMetric {
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
  subtext: string;
}

export const FINANCIAL_METRICS: FinancialMetric[] = [
  {
    title: "Total Revenue (MTD)",
    value: "₦48,650,000",
    trend: "+14.8% vs last month",
    isPositive: true,
    subtext: "Driven by ABU Zaria conference room blocks & Savannah Hall events",
  },
  {
    title: "Operating Expenses (OpEx)",
    value: "₦29,420,000",
    trend: "-3.2% vs budget",
    isPositive: true,
    subtext: "Diesel fuel management optimization saved ₦840,000 this cycle",
  },
  {
    title: "Net Operating Income (NOI)",
    value: "₦19,230,000",
    trend: "39.5% Net Margin",
    isPositive: true,
    subtext: "Highest operating margin recorded in 2026 fiscal year",
  },
  {
    title: "Pending Supplier Liabilities",
    value: "₦4,850,000",
    trend: "5 Batches Due",
    isPositive: false,
    subtext: "Standard 30-day vendor payment cycles, zero overdue default",
  },
];

export const DEPARTMENT_REVENUES = [
  { department: "Guest Rooms & Suites", amount: "₦27,200,000", share: 55.9, color: "#F5B841" },
  { department: "Food & Beverage (Savannah Dining)", amount: "₦14,800,000", share: 30.4, color: "#EFE0B9" },
  { department: "Grand Savannah Banquet & Events", amount: "₦5,150,000", share: 10.6, color: "#D49E52" },
  { department: "Ancillary, Laundry & Business Centre", amount: "₦1,500,000", share: 3.1, color: "#80613A" },
];

export const EXPENSE_DISTRIBUTION = [
  { category: "Payroll & Staff Benefits", amount: "₦8,400,000", share: 28.5 },
  { category: "Energy, Diesel & Utilities", amount: "₦6,200,000", share: 21.1 },
  { category: "F&B Procurement & Ingredients", amount: "₦5,800,000", share: 19.7 },
  { category: "Operations, Admin & Insurance", amount: "₦5,170,000", share: 17.6 },
  { category: "Repairs, Spares & Maintenance", amount: "₦1,850,000", share: 6.3 },
  { category: "Marketing, Direct Booking Tech & OTA", amount: "₦2,000,000", share: 6.8 },
];

export const MONTHLY_FINANCIAL_TRENDS = [
  { month: "Jun", revenue: 38.2, opex: 26.8, noi: 11.4 },
  { month: "Jul", revenue: 41.5, opex: 27.4, noi: 14.1 },
  { month: "Aug", revenue: 39.8, opex: 26.9, noi: 12.9 },
  { month: "Sep", revenue: 44.2, opex: 28.1, noi: 16.1 },
  { month: "Oct", revenue: 42.4, opex: 27.9, noi: 14.5 },
  { month: "Nov (MTD)", revenue: 48.65, opex: 29.42, noi: 19.23 },
];

export const PENDING_SUPPLIERS = [
  { vendor: "Kaduna Petroleum & Diesel Logistics", service: "Bulk Low-Pour Fuel Oil & Diesel (10,000L)", amount: "₦2,100,000", dueDate: "28 Nov 2026", status: "Verified & Approved" },
  { vendor: "Savannah Wholesale Agritech", service: "Fresh Poultry, Beef, Vegetables & Dairy", amount: "₦1,250,000", dueDate: "30 Nov 2026", status: "Invoice Match Confirmed" },
  { vendor: "Zaria Clean Chemical Works", service: "Industrial Laundry & Housekeeping Detergents", amount: "₦520,000", dueDate: "02 Dec 2026", status: "Under PO Audit" },
  { vendor: "NorthGate HVAC & Chiller Services", service: "Quarterly Preventative Chiller Plant Maintenance", amount: "₦680,000", dueDate: "05 Dec 2026", status: "Work Order Verified" },
  { vendor: "Mainstream Telecommunications", service: "Dedicated Fibre Internet 100Mbps Backhaul", amount: "₦300,000", dueDate: "01 Dec 2026", status: "Automated Remittance Ready" },
];

export interface EmployeeRecord {
  id: string;
  name: string;
  department: string;
  role: string;
  shift: "Morning (07:00 – 15:00)" | "Afternoon (15:00 – 23:00)" | "Night (23:00 – 07:00)" | "Off Duty";
  status: "On Duty" | "On Leave" | "Off Duty";
  attendanceRate: string;
  joined: string;
}

export const EMPLOYEES: EmployeeRecord[] = [
  { id: "EMP-001", name: "Ibrahim Sanusi", department: "Front Office", role: "Duty Manager", shift: "Morning (07:00 – 15:00)", status: "On Duty", attendanceRate: "98.5%", joined: "Jan 2022" },
  { id: "EMP-004", name: "Amina Yusuf", department: "Front Office", role: "Senior Receptionist", shift: "Morning (07:00 – 15:00)", status: "On Duty", attendanceRate: "96.2%", joined: "Mar 2023" },
  { id: "EMP-012", name: "Chef Chukwuma Okafor", department: "Food & Beverage", role: "Executive Head Chef", shift: "Morning (07:00 – 15:00)", status: "On Duty", attendanceRate: "99.1%", joined: "Nov 2021" },
  { id: "EMP-018", name: "Fatima Balarabe", department: "Housekeeping", role: "Executive Housekeeper", shift: "Morning (07:00 – 15:00)", status: "On Duty", attendanceRate: "97.8%", joined: "Feb 2023" },
  { id: "EMP-025", name: "Engr. Musa Bello", department: "Engineering", role: "Chief Facilities Engineer", shift: "Morning (07:00 – 15:00)", status: "On Duty", attendanceRate: "100%", joined: "Aug 2020" },
  { id: "EMP-031", name: "Ngozi Adeyemi", department: "Finance & Admin", role: "Financial Controller", shift: "Morning (07:00 – 15:00)", status: "On Duty", attendanceRate: "98.0%", joined: "Jul 2022" },
  { id: "EMP-042", name: "Usman Danjuma", department: "Security", role: "Security Supervisor", shift: "Afternoon (15:00 – 23:00)", status: "Off Duty", attendanceRate: "95.5%", joined: "May 2023" },
  { id: "EMP-055", name: "Zainab Aliyu", department: "Food & Beverage", role: "Banquet Captain", shift: "Afternoon (15:00 – 23:00)", status: "On Leave", attendanceRate: "94.0%", joined: "Sep 2024" },
];

export interface AssetRecord {
  id: string;
  name: string;
  department: string;
  category: "Power & Generation" | "HVAC & Climate" | "Commercial Kitchen" | "Laundry & Housekeeping" | "Security & IT";
  condition: "Optimal" | "Requires Inspection" | "Critical / Out of Service";
  installedYear: number;
  lastService: string;
  nextService: string;
  serviceVendor: string;
  runtimeOrUsage: string;
  serviceHistory: string;
}

export const ASSET_INVENTORY: AssetRecord[] = [
  {
    id: "AST-ENG-001",
    name: "Caterpillar 500kVA Heavy-Duty Standby Diesel Generator #1",
    department: "Engineering",
    category: "Power & Generation",
    condition: "Optimal",
    installedYear: 2021,
    lastService: "12 Oct 2026",
    nextService: "12 Dec 2026 (or in 18 hrs)",
    serviceVendor: "Mantrac Nigeria",
    runtimeOrUsage: "4,820 Total Operating Hours",
    serviceHistory: "Oil, fuel filters and coolant flush performed at 4,600 hrs. All injector pressures within manufacturer specification.",
  },
  {
    id: "AST-ENG-002",
    name: "Perkins 350kVA Standby Diesel Generator #2 (Night/Base Load)",
    department: "Engineering",
    category: "Power & Generation",
    condition: "Optimal",
    installedYear: 2022,
    lastService: "04 Nov 2026",
    nextService: "04 Jan 2027",
    serviceVendor: "Mantrac Nigeria",
    runtimeOrUsage: "2,910 Total Operating Hours",
    serviceHistory: "Battery charger trickle unit replaced. Automatic transfer switch (ATS) calibrated.",
  },
  {
    id: "AST-HVAC-008",
    name: "Carrier 120-Ton Central Water Chiller & Cooling Tower",
    department: "Engineering",
    category: "HVAC & Climate",
    condition: "Requires Inspection",
    installedYear: 2022,
    lastService: "22 Sep 2026",
    nextService: "22 Nov 2026 (Tomorrow)",
    serviceVendor: "NorthGate HVAC Services",
    runtimeOrUsage: "Nominal 7.2°C Supply / 12.8°C Return",
    serviceHistory: "Compressor #2 exhibiting minor harmonic vibration. Preventative sensor check scheduled.",
  },
  {
    id: "AST-KTCH-014",
    name: "Rational iCombi Pro 20-Grid Commercial Combi Oven",
    department: "Food & Beverage",
    category: "Commercial Kitchen",
    condition: "Optimal",
    installedYear: 2023,
    lastService: "15 Oct 2026",
    nextService: "15 Jan 2027",
    serviceVendor: "Crown Hospitality Equipment",
    runtimeOrUsage: "Average 6.5 Cooking Cycles / Day",
    serviceHistory: "Descaling and steam injector de-mineralization cycle completed with chemical certificate.",
  },
  {
    id: "AST-LND-005",
    name: "Electrolux Industrial 2.5m Steam Flatwork Ironer / Press",
    department: "Housekeeping",
    category: "Laundry & Housekeeping",
    condition: "Optimal",
    installedYear: 2022,
    lastService: "30 Oct 2026",
    nextService: "30 Jan 2027",
    serviceVendor: "Zaria Commercial Laundry Maintenance",
    runtimeOrUsage: "180 Sheets & Duvets Processed Daily",
    serviceHistory: "Belt tensioning and hydraulic pressure check verified. Steam valves lubricated.",
  },
  {
    id: "AST-IT-003",
    name: "Dell PowerEdge On-Premise Local Server & PMS Mirror",
    department: "Security & IT",
    category: "Security & IT",
    condition: "Optimal",
    installedYear: 2024,
    lastService: "01 Nov 2026",
    nextService: "01 Feb 2027",
    serviceVendor: "Apex Cloud & Systems Kaduna",
    runtimeOrUsage: "99.98% Uptime, RAID-10 Healthy",
    serviceHistory: "Automated offline immutable backup verified on tape and secondary encrypted NAS.",
  },
  {
    id: "AST-HVAC-019",
    name: "Room 208 Split-Unit Daikin Inverter (Executive Deluxe)",
    department: "Engineering",
    category: "HVAC & Climate",
    condition: "Critical / Out of Service",
    installedYear: 2023,
    lastService: "10 Jul 2026",
    nextService: "Immediate Maintenance Required",
    serviceVendor: "Internal Facilities Team",
    runtimeOrUsage: "Compressor fault code E4",
    serviceHistory: "Capacitor failed during voltage surge. Room held as Out of Order until replacement part arrives today.",
  },
];

export interface DataSourceRecord {
  id: string;
  name: string;
  type: "Legacy Spreadsheet" | "Scanned Document" | "PMS Database" | "Biometric Terminal" | "IoT Telemetry" | "Modern Web & Mobile App";
  department: string;
  lastSync: string;
  recordCount: string;
  status: "Connected & Synced" | "Periodic Ingestion" | "Archive Verified" | "Real-Time Stream";
  dataFreshness: string;
  coverage: string;
  sampleRecords: string[];
  description: string;
}

export const DATA_SOURCES: DataSourceRecord[] = [
  {
    id: "SRC-001",
    name: "Historical Financial Spreadsheets (Excel 2018–2024)",
    type: "Legacy Spreadsheet",
    department: "Finance & Accounts",
    lastSync: "Today, 04:00 (Nightly Batch)",
    recordCount: "48,210 Rows",
    status: "Periodic Ingestion",
    dataFreshness: "24 Hours",
    coverage: "Historical cash flows, bank reconciliation ledgers, and past room revenues across 6 years.",
    sampleRecords: [
      "2023-11-14 | REV-BANQ-104 | ABU Senate Dinner | ₦2,850,000 | Cleared Zenith Bank",
      "2024-03-22 | EXP-FUEL-890 | Kaduna Fuel Supply | ₦1,420,000 | Cheque #004918",
      "2024-07-09 | REV-ROOM-441 | State Judicial Delegation | ₦4,120,000 | Transfer Verified",
    ],
    description: "Multi-tab workbooks ingested via automatic schema mapper, standardizing historical figures without manual data entry.",
  },
  {
    id: "SRC-002",
    name: "Physical Guest Registration Cards & Scanned Folios",
    type: "Scanned Document",
    department: "Front Office & Archive",
    lastSync: "Yesterday, 18:30",
    recordCount: "12,480 Documents",
    status: "Archive Verified",
    dataFreshness: "Historical On-Demand",
    coverage: "Handwritten guest sign-in cards, paper tax receipts, and wedding hall rental agreements.",
    sampleRecords: [
      "DOC-SCAN-8841 | Wedding Hall Agreement Alhaji Sanusi | Dec 2023 | OCR Verified",
      "DOC-SCAN-9024 | Guest Folio Dr. M. Bello | Oct 2024 | Signature Extracted",
      "DOC-SCAN-9118 | Maintenance Job Card Generator Alternator | Jun 2024 | Verified",
    ],
    description: "Optical Character Recognition (OCR) pipeline extracting guest metadata and contract terms into deterministic search indexes.",
  },
  {
    id: "SRC-003",
    name: "Hotel Property Management System (PMS SQL Database)",
    type: "PMS Database",
    department: "Hotel Operations",
    lastSync: "3 mins ago",
    recordCount: "186,400 Records",
    status: "Connected & Synced",
    dataFreshness: "Real-Time / 5 mins",
    coverage: "Live room inventory rack, guest reservations, daily rate codes, housekeeping clean states, and billing folios.",
    sampleRecords: [
      "RES-2026-9921 | Room 401 Gov Suite | Confirmed VIP | Rate ₦185,000/night",
      "HSK-FL2-014 | Room 204 Cleaned | Inspected by Supv Fatima | 13:45",
      "FOL-2026-3810 | Savannah Dining Table 4 | ₦42,500 | Room Charge 312",
    ],
    description: "Direct read-replica synchronization with hotel core database, providing instantaneous room availability and rate enforcement.",
  },
  {
    id: "SRC-004",
    name: "ZKTeco Biometric Time & Attendance Terminals",
    type: "Biometric Terminal",
    department: "Human Resources",
    lastSync: "12 mins ago",
    recordCount: "38,900 Punches",
    status: "Connected & Synced",
    dataFreshness: "Real-Time / 15 mins",
    coverage: "Employee clock-in timestamps, shift overlaps, meal break records, and overtime tracking.",
    sampleRecords: [
      "CLK-2026-11-21 | EMP-012 Chef Chukwuma | In: 06:48 | Morning Shift | Verified",
      "CLK-2026-11-21 | EMP-018 Fatima Balarabe | In: 06:54 | Morning Shift | Verified",
      "CLK-2026-11-21 | EMP-025 Engr. Musa Bello | In: 07:02 | Morning Shift | Verified",
    ],
    description: "Hardware network terminals deployed at staff service entrance delivering tamper-evident biometric attendance verification.",
  },
  {
    id: "SRC-005",
    name: "DeepSea Generator Controller & Energy IoT Telemetry",
    type: "IoT Telemetry",
    department: "Engineering & Plant",
    lastSync: "Just now (Live)",
    recordCount: "1,240,000 Telemetry Points",
    status: "Real-Time Stream",
    dataFreshness: "Sub-Second Stream",
    coverage: "Frequency (50.1Hz), phase voltage (415V), fuel flow rate (28L/hr), oil pressure, and cooling temperature.",
    sampleRecords: [
      "GEN-1 | 14:48:10 | V: 415.2V | Hz: 50.08 | Load: 68.4% | Coolant: 84°C | Status: Normal",
      "GEN-1 | 14:48:20 | Fuel Flow: 28.4L/hr | Fuel Level: 8,410L (84.1%)",
      "ATS-1 | 14:48:25 | Grid DisCo: Standby | Gen Contactor: Closed",
    ],
    description: "Modbus over TCP interface transmitting generator telemetry directly into operational anomaly detection algorithms.",
  },
  {
    id: "SRC-006",
    name: "Modern Joclarif Guest Web & Mobile App Ecosystem",
    type: "Modern Web & Mobile App",
    department: "Digital Guest Journey",
    lastSync: "Just now (Live)",
    recordCount: "4,120 Direct Bookings",
    status: "Connected & Synced",
    dataFreshness: "Instantaneous",
    coverage: "Direct booking engine, mobile pre-check-in passport scans, digital room keys, AI concierge requests, and guest feedback.",
    sampleRecords: [
      "WEB-2026-4410 | Direct Booking Confirmed | 3 Nights Deluxe | Zero Commission",
      "APP-CHK-1092 | Contactless OCR Check-in | Boarding Pass Generated | Room 312",
      "CON-CHAT-8821 | Multilingual Concierge | Airport Transit Assigned to Duty Driver",
    ],
    description: "The newly proposed Joclarif digital front-end capturing 100% of guest direct bookings without intermediary commissions.",
  },
];

export interface AssistantEvidence {
  sourceName: string;
  sourceType: "Verified Record" | "Derived Calculation" | "Historical Document" | "Simulated Demo" | "Data Unavailable";
  evidenceTimestamp: string;
  extractedSnippet: string;
  verificationBadge: string;
  referenceId: string;
}

export interface AssistantQuery {
  id: string;
  question: string;
  category: "financial" | "workforce" | "assets" | "operations" | "executive";
  response: string;
  evidence: AssistantEvidence[];
  suggestedFollowUps: string[];
}

export const PREPOPULATED_ASSISTANT_QUERIES: AssistantQuery[] = [
  {
    id: "query-1",
    question: "Give me an overview of the hotel's operational performance this month.",
    category: "executive",
    response:
      "The hotel generated ₦48.65 million in revenue month-to-date, with total operating expenditure of ₦29.42 million, yielding an estimated operating profit of ₦19.23 million (39.5% net margin).\n\nOccupancy has averaged 76% across the 120 available rooms and suites, with the West Wing experiencing peak occupancy from ABU Zaria conference delegates.\n\nFood & Beverage recorded ₦14.8 million in revenue, while Engineering reports 3 pending maintenance work orders, including Room 208 AC repair. There are currently 5 pending supplier liabilities totaling ₦4.85 million, all within standard 30-day settlement windows.",
    evidence: [
      {
        sourceName: "Hotel General Ledger & PMS Mirror (SRC-003)",
        sourceType: "Verified Record",
        evidenceTimestamp: "Today, 14:00 Sync",
        extractedSnippet: "Total MTD Revenue: ₦48,650,000 | Rooms: ₦27.2M | F&B: ₦14.8M | Events: ₦5.15M | Ancillary: ₦1.5M",
        verificationBadge: "Audited Financial Record",
        referenceId: "GL-2026-11-REV",
      },
      {
        sourceName: "Automated Energy & Facilities Expense Tracker",
        sourceType: "Derived Calculation",
        evidenceTimestamp: "Today, 13:30 Model Run",
        extractedSnippet: "OpEx: ₦29,420,000 (Payroll: ₦8.4M, Diesel/Power: ₦6.2M, F&B Procurement: ₦5.8M, Admin: ₦5.17M, Maint: ₦1.85M, Mktg: ₦2.0M)",
        verificationBadge: "Derived Ledger Reconciliation",
        referenceId: "CALC-OPEX-NOV",
      },
      {
        sourceName: "Daily Housekeeping & Room Rack State",
        sourceType: "Verified Record",
        evidenceTimestamp: "Today, 14:15 Live PMS",
        extractedSnippet: "91 of 120 Rooms Occupied (75.8%) | 24 Daily Check-ins | Average Stay: 2.8 Nights",
        verificationBadge: "Live PMS Telemetry",
        referenceId: "PMS-RACK-11-21",
      },
    ],
    suggestedFollowUps: [
      "Which department has the highest operating expenses?",
      "Compare this month's revenue with last month.",
      "What are our outstanding supplier payments?",
    ],
  },
  {
    id: "query-2",
    question: "Which department has the highest operating expenses?",
    category: "financial",
    response:
      "Payroll & Staff Benefits across all 64 hotel employees represents the highest single expenditure category at ₦8.40 million (28.5% of total OpEx).\n\nThe second largest expense is Energy & Diesel Fuel at ₦6.20 million (21.1%), reflecting generator runtime during public power interruptions. F&B raw food procurement follows closely at ₦5.80 million (19.7%).",
    evidence: [
      {
        sourceName: "Human Resources Biometric & Payroll Ledger (SRC-004)",
        sourceType: "Verified Record",
        evidenceTimestamp: "15 Nov 2026 Approved Batch",
        extractedSnippet: "Consolidated Monthly Payroll: ₦8,400,000 across 64 staff (Front Office, Kitchen, Housekeeping, Engineering, Security, Admin)",
        verificationBadge: "Verified Payroll Folio",
        referenceId: "PR-2026-11-B1",
      },
      {
        sourceName: "DeepSea IoT Telemetry & Bulk Fuel Log (SRC-005)",
        sourceType: "Derived Calculation",
        evidenceTimestamp: "Today, 14:00 Run",
        extractedSnippet: "Fuel Consumption: 14,200L Diesel MTD @ ₦1,250/L = ₦5,350,000 + Lubricants & Kaduna DisCo Tariff ₦850,000 = ₦6,200,000",
        verificationBadge: "IoT Energy Reconciled",
        referenceId: "ENG-PWR-EXP-NOV",
      },
    ],
    suggestedFollowUps: [
      "Can we reduce diesel generator operating costs?",
      "How many employees are currently on duty?",
      "What are our outstanding supplier payments?",
    ],
  },
  {
    id: "query-3",
    question: "Which equipment requires immediate maintenance?",
    category: "assets",
    response:
      "One asset currently requires immediate critical intervention:\n\n• Room 208 Split-Unit Daikin Inverter (Executive Deluxe) — Currently Out of Service with compressor fault code E4 following a voltage surge. The room is locked out of PMS inventory to protect guest satisfaction. Replacement capacitor is scheduled for installation by the internal facilities team today.\n\nAdditionally, two assets are under preventative watch:\n• Carrier 120-Ton Central Chiller (harmonic vibration on compressor #2; inspection tomorrow)\n• Standby Generator #1 (due for 250-hour preventative lube & filter service in 18 operating hours).",
    evidence: [
      {
        sourceName: "Engineering Work Order Maintenance Register (SRC-003)",
        sourceType: "Verified Record",
        evidenceTimestamp: "Today, 09:30 Work Order #1084",
        extractedSnippet: "Asset AST-HVAC-019: Status Out of Service | Room 208 Locked in PMS | Technician: Aliyu Sanusi | ETA Repair: 17:00",
        verificationBadge: "Active Engineering Ticket",
        referenceId: "WO-2026-1084",
      },
      {
        sourceName: "DeepSea Telemetry Auto-Diagnostics (SRC-005)",
        sourceType: "Derived Calculation",
        evidenceTimestamp: "Today, 14:30 Stream",
        extractedSnippet: "AST-ENG-001 Generator #1 Total Hours: 4,820 hrs | Service Threshold: 4,838 hrs | Remaining: 18.2 hrs",
        verificationBadge: "Telemetry Service Threshold",
        referenceId: "DIAG-GEN1-SRV",
      },
    ],
    suggestedFollowUps: [
      "What is our total maintenance expenditure this quarter?",
      "Show outstanding purchase orders for spare parts.",
      "Which assets have been out of service longest?",
    ],
  },
  {
    id: "query-4",
    question: "How many employees are currently on duty and are there any staffing shortages?",
    category: "workforce",
    response:
      "There are currently 38 employees on duty across the morning shift (07:00 – 15:00), out of 64 total registered staff.\n\n6 employees are currently on approved annual or compassionate leave, and 20 are off-duty ahead of the afternoon (15:00) and night (23:00) shift changeovers.\n\nBiometric attendance stands at 94.2% today with zero critical departmental shortages. The Front Office has all 5 scheduled agents active, ensuring zero lobby wait times.",
    evidence: [
      {
        sourceName: "ZKTeco Biometric Terminal Data Ingestion (SRC-004)",
        sourceType: "Verified Record",
        evidenceTimestamp: "Today, 14:00 Live Stream",
        extractedSnippet: "38 Clock-ins Verified Active | 0 Unexplained Absences | Morning Shift Compliance: 97.4%",
        verificationBadge: "Biometric Hardware Verified",
        referenceId: "BIO-ATT-2026-11-21",
      },
      {
        sourceName: "HR Approved Leave Roster (SRC-002)",
        sourceType: "Historical Document",
        evidenceTimestamp: "18 Nov 2026 Roster Lock",
        extractedSnippet: "Approved Leaves: Zainab Aliyu (F&B), 2 Housekeeping Attendants, 1 Security Officer, 2 Maintenance Techs",
        verificationBadge: "HR Signed Duty Roster",
        referenceId: "HR-ROSTER-W47",
      },
    ],
    suggestedFollowUps: [
      "Which department has the highest staffing cost?",
      "Who is scheduled to work the night shift today?",
      "Show pending leave requests awaiting approval.",
    ],
  },
  {
    id: "query-5",
    question: "What is our historical room revenue from 2023 compared to this year?",
    category: "financial",
    response:
      "In fiscal year 2023, Joclarif generated ₦284.6 million in total gross room revenue, averaging ₦23.7 million per month with an average occupancy of 61%.\n\nIn 2026 year-to-date, annualized room revenue is trending at ₦326.4 million (+14.7% growth), with current monthly run-rate at ₦27.2 million. This growth is directly attributable to capturing direct group bookings for university conferences and weddings rather than forfeiting 15–25% to online travel agents.",
    evidence: [
      {
        sourceName: "Historical Financial Spreadsheets 2018–2024 (SRC-001)",
        sourceType: "Historical Document",
        evidenceTimestamp: "Ingested Archive Spreadsheet",
        extractedSnippet: "FY2023 Gross Room Sales: ₦284,620,000 | Commissions Paid to Intermediaries: ₦48,385,000 (17.0% loss)",
        verificationBadge: "Legacy Spreadsheet Extraction",
        referenceId: "EXCEL-ARCHIVE-FY23",
      },
      {
        sourceName: "Modern Joclarif Unified Intelligence Engine",
        sourceType: "Derived Calculation",
        evidenceTimestamp: "Current Model Run",
        extractedSnippet: "FY2026 Direct Booking Channel Share: 74.2% | Commission Leakage Avoidance: ₦5,210,000 MTD",
        verificationBadge: "Deterministic Economic Calculation",
        referenceId: "CALC-DIRECT-REV-GROWTH",
      },
    ],
    suggestedFollowUps: [
      "How much did we save in OTA commissions this month?",
      "What is our projected annual revenue for 2027?",
      "What are our outstanding supplier payments?",
    ],
  },
];

export interface ActivityAuditEntry {
  id: string;
  timestamp: string;
  user: string;
  role: string;
  department: string;
  category: "Query" | "Export" | "Sync" | "Alert" | "Maintenance" | "Auth";
  action: string;
  details: string;
  severity: "info" | "warning" | "success" | "critical";
}

export const ACTIVITY_AUDIT_LOGS: ActivityAuditEntry[] = [
  {
    id: "ACT-8921",
    timestamp: "Today, 14:42",
    user: "Owner / Executive Session",
    role: "Hotel Ownership",
    department: "Executive Board",
    category: "Query",
    action: "Natural Language Intelligence Query",
    details: "Queried monthly revenue, OpEx, and supplier liability balances with evidence inspector review.",
    severity: "info",
  },
  {
    id: "ACT-8920",
    timestamp: "Today, 14:15",
    user: "System Daemon (Modbus IoT)",
    role: "Automated Service",
    department: "Engineering",
    category: "Sync",
    action: "Telemetry Stream Synchronized",
    details: "Generator #1 running parameters ingested: 415.2V, 50.08Hz, fuel tank 8,400L (84%).",
    severity: "success",
  },
  {
    id: "ACT-8919",
    timestamp: "Today, 13:50",
    user: "Ngozi Adeyemi (Financial Controller)",
    role: "Finance & Admin",
    department: "Finance",
    category: "Export",
    action: "P&L Statement Generated",
    details: "Exported encrypted PDF of November month-to-date operating statement with cryptographic hash.",
    severity: "info",
  },
  {
    id: "ACT-8918",
    timestamp: "Today, 12:30",
    user: "Engr. Musa Bello",
    role: "Facilities Engineering",
    department: "Engineering",
    category: "Maintenance",
    action: "Work Order Dispatched",
    details: "Logged repair ticket WO-2026-1084 for Room 208 Daikin split unit inverter compressor.",
    severity: "warning",
  },
  {
    id: "ACT-8917",
    timestamp: "Today, 11:15",
    user: "Ibrahim Sanusi",
    role: "Duty Manager",
    department: "Front Office",
    category: "Alert",
    action: "Group Booking Folio Linked",
    details: "Group Folio GRP-2026-8841 (ABU Convocation, 15 suites + Banquet Hall) confirmed deposit.",
    severity: "success",
  },
  {
    id: "ACT-8916",
    timestamp: "Today, 09:00",
    user: "System ETL Pipeline",
    role: "Automated Service",
    department: "Data Architecture",
    category: "Sync",
    action: "Historical Spreadsheet Ingestion Batch",
    details: "Parsed 48,210 legacy rows from accounting archives (2018–2024) with zero parse errors.",
    severity: "success",
  },
  {
    id: "ACT-8915",
    timestamp: "Today, 07:00",
    user: "ZKTeco Ingestion Service",
    role: "Automated Service",
    department: "Human Resources",
    category: "Sync",
    action: "Morning Shift Biometric Roster Reconciled",
    details: "38 morning duty staff clocked in. 0 unexplained absences. Attendance rate 94.2%.",
    severity: "info",
  },
];
