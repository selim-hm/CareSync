// Centralized dummy data for developers to use
// All demo users share the same password for convenience

export const DEMO_PASSWORD = "Demo@123456";
export const COUNTRY_CODES = [
  { code: "+1", symbol: "US" },
  { code: "+91", symbol: "IN" },
  { code: "+44", symbol: "UK" },
  { code: "+81", symbol: "JP" },
  { code: "+61", symbol: "AU" },
  { code: "+971", symbol: "AE" },
  { code: "+92", symbol: "PK" },
  { code: "+880", symbol: "BD" },
  { code: "+49", symbol: "DE" },
  { code: "+86", symbol: "CN" },
  { code: "+7", symbol: "RU" },
  { code: "+34", symbol: "ES" },
  { code: "+39", symbol: "IT" },
  { code: "+33", symbol: "FR" },
  { code: "+60", symbol: "MY" },
  { code: "+65", symbol: "SG" },
  { code: "+20", symbol: "EG" },
  { code: "+62", symbol: "ID" },
  { code: "+63", symbol: "PH" },
  { code: "+27", symbol: "ZA" }, // South Africa
  { code: "+54", symbol: "AR" }, // Argentina
  { code: "+48", symbol: "PL" }, // Poland
  { code: "+41", symbol: "CH" }, // Switzerland
  { code: "+46", symbol: "SE" }, // Sweden
  { code: "+31", symbol: "NL" }, // Netherlands
  { code: "+82", symbol: "KR" }, // South Korea
  { code: "+30", symbol: "GR" }, // Greece
  { code: "+358", symbol: "FI" }, // Finland
  { code: "+64", symbol: "NZ" }, // New Zealand
  { code: "+234", symbol: "NG" }, // Nigeria
  { code: "+212", symbol: "MA" }, // Morocco
  { code: "+351", symbol: "PT" }, // Portugal
  { code: "+351", symbol: "PT" }, // Portugal
  { code: "+52", symbol: "MX" }, // Mexico
  { code: "+357", symbol: "CY" }, // Cyprus
  { code: "+353", symbol: "IE" }, // Ireland
  { code: "+90", symbol: "TR" }, // Turkey
  { code: "+354", symbol: "IS" }, // Iceland
  { code: "+297", symbol: "AW" }, // Aruba
  { code: "+359", symbol: "BG" }, // Bulgaria
  { code: "+389", symbol: "MK" }, // North Macedonia
  { code: "+226", symbol: "BF" }, // Burkina Faso
  { code: "+223", symbol: "ML" }, // Mali
  { code: "+995", symbol: "GE" }, // Georgia
];

export let doctors = [
  {
    id: "doc1",
    role: "doctor",
    email: "doctor@caresync.com",
    password: DEMO_PASSWORD,
    name: "Dr. Ahmed Hassan",
    specialization: "Cardiology",
    availability: ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
    phone: "+966501234567",
    experience: "8 years",
    hospital: "Al-Noor Hospital",
  },
  {
    id: "doc2",
    role: "doctor",
    email: "dr.fatima@caresync.com",
    password: DEMO_PASSWORD,
    name: "Dr. Fatima Al-Zahra",
    specialization: "Pediatrics",
    availability: ["10:00 AM", "12:00 PM", "03:00 PM"],
    phone: "+966502345678",
    experience: "6 years",
    hospital: "King Faisal Hospital",
  },
  {
    id: "doc3",
    role: "doctor",
    email: "dr.ali@caresync.com",
    password: DEMO_PASSWORD,
    name: "Dr. Ali Khan",
    specialization: "Orthopedics",
    availability: ["08:00 AM", "10:00 AM", "01:00 PM", "05:00 PM"],
    phone: "+966503456789",
    experience: "10 years",
    hospital: "Central Medical Center",
  },
];

export let patients = [
  {
    id: "pat1",
    role: "patient",
    email: "patient@caresync.com",
    password: DEMO_PASSWORD,
    name: "Mohammed Ahmed",
    phone: "+966501111111",
    age: 35,
    bloodType: "O+",
    gender: "Male",
    medicalNumber: "1234567890",
  },
  {
    id: "pat2",
    role: "patient",
    email: "fatima.patient@caresync.com",
    password: DEMO_PASSWORD,
    name: "Fatima Ahmed",
    phone: "+966502222222",
    age: 28,
    bloodType: "A+",
    gender: "Female",
    medicalNumber: "1234567891",
  },
  {
    id: "pat3",
    role: "patient",
    email: "sara.patient@caresync.com",
    password: DEMO_PASSWORD,
    name: "Sara Mohammed",
    phone: "+966503333333",
    age: 42,
    bloodType: "B+",
    gender: "Female",
    medicalNumber: "1234567892",
  },
];

export let pharmacists = [
  {
    id: "pharma1",
    role: "pharmacist",
    email: "pharmacist@caresync.com",
    password: DEMO_PASSWORD,
    name: "Hassan Al-Dosari",
    phone: "+966504444444",
    pharmacy: "Al-Salama Pharmacy",
    licenseNumber: "PH-2024-001",
    experience: "5 years",
    location: "Riyadh, Saudi Arabia",
  },
  {
    id: "pharma2",
    role: "pharmacist",
    email: "zainab.pharmacist@caresync.com",
    password: DEMO_PASSWORD,
    name: "Zainab Ibrahim",
    phone: "+966505555555",
    pharmacy: "Al-Afia Medical Store",
    licenseNumber: "PH-2024-002",
    experience: "7 years",
    location: "Jeddah, Saudi Arabia",
  },
  {
    id: "pharma3",
    role: "pharmacist",
    email: "ahmed.pharma@caresync.com",
    password: DEMO_PASSWORD,
    name: "Ahmed Al-Shehri",
    phone: "+966506666666",
    pharmacy: "Health Plus Pharmacy",
    licenseNumber: "PH-2024-003",
    experience: "9 years",
    location: "Dammam, Saudi Arabia",
  },
];

export let appointments = [
  {
    id: "apt1",
    patientId: "pat1",
    doctorId: "doc1",
    date: "2026-03-15",
    time: "09:00 AM",
    status: "Confirmed",
    reason: "Heart Checkup",
  },
  {
    id: "apt2",
    patientId: "pat2",
    doctorId: "doc2",
    date: "2026-03-16",
    time: "10:00 AM",
    status: "Pending",
    reason: "Child Vaccination",
  },
  {
    id: "apt3",
    patientId: "pat3",
    doctorId: "doc3",
    date: "2026-03-17",
    time: "02:00 PM",
    status: "Confirmed",
    reason: "Knee Pain Consultation",
  },
];

export let allUsers = [...patients, ...doctors, ...pharmacists];

export let usersByEmail = allUsers.reduce((acc, u) => {
  acc[u.email] = u;
  return acc;
}, {});

export const findDoctorById = (id) =>
  allUsers.find((d) => d.id === id && d.role === "doctor");
export const findPatientById = (id) =>
  allUsers.find((p) => p.id === id && p.role === "patient");

export const addUser = (user) => {
  if (user.role === "patient") {
    patients.push(user);
  } else if (user.role === "doctor") {
    doctors.push(user);
  } else if (user.role === "pharmacist") {
    pharmacists.push(user);
  }
  allUsers.push(user);
  usersByEmail[user.email] = user;
};
