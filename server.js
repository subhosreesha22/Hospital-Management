import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

// In-memory persistent data store for the prototype
let doctors = [
  {
    id: "D101",
    name: "Dr. Sharma",
    department: "Cardiology",
    contact: "9876543210",
    email: "sharma@cityhospital.com",
    qualification: "MD, DM (Cardiology)",
    experience: "14 yrs",
    room: "OPD 12",
    availableDays: ["Monday", "Wednesday", "Friday"],
    availableTime: "09:00 AM - 01:00 PM",
    rating: 4.9,
    patientsCount: 1420
  },
  {
    id: "D102",
    name: "Dr. Roy",
    department: "Neurology",
    contact: "9876543211",
    email: "roy@cityhospital.com",
    qualification: "MBBS, MCh (Neurology)",
    experience: "11 yrs",
    room: "OPD 05",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    availableTime: "10:00 AM - 02:00 PM",
    rating: 4.8,
    patientsCount: 980
  },
  {
    id: "D103",
    name: "Dr. Das",
    department: "Orthopedics",
    contact: "9876543212",
    email: "das@cityhospital.com",
    qualification: "MS (Ortho), Joint Specialist",
    experience: "9 yrs",
    room: "OPD 08",
    availableDays: ["Monday", "Tuesday", "Friday"],
    availableTime: "11:00 AM - 03:00 PM",
    rating: 4.7,
    patientsCount: 860
  },
  {
    id: "D104",
    name: "Dr. Ananya Sen",
    department: "Pediatrics",
    contact: "9876543213",
    email: "ananya.sen@cityhospital.com",
    qualification: "MD (Pediatrics), DCH",
    experience: "8 yrs",
    room: "OPD 03",
    availableDays: ["Monday", "Wednesday", "Saturday"],
    availableTime: "09:30 AM - 01:30 PM",
    rating: 4.9,
    patientsCount: 1150
  },
  {
    id: "D105",
    name: "Dr. Rajesh Verma",
    department: "Cardiology",
    contact: "9876543214",
    email: "verma@cityhospital.com",
    qualification: "MD, FACC Interventional",
    experience: "16 yrs",
    room: "OPD 14",
    availableDays: ["Tuesday", "Thursday"],
    availableTime: "02:00 PM - 06:00 PM",
    rating: 4.9,
    patientsCount: 2100
  },
  {
    id: "D106",
    name: "Dr. Priya Nair",
    department: "General Medicine",
    contact: "9876543215",
    email: "priya.nair@cityhospital.com",
    qualification: "MBBS, MD (Medicine)",
    experience: "10 yrs",
    room: "OPD 01",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    availableTime: "08:30 AM - 02:00 PM",
    rating: 4.8,
    patientsCount: 1890
  }
];

let patients = [
  {
    id: "P201",
    name: "Rahul Mukherjee",
    age: 42,
    gender: "Male",
    contact: "9812345670",
    email: "rahul.m@example.com",
    department: "Cardiology",
    doctor: "Dr. Sharma",
    bloodGroup: "O+",
    admissionStatus: "Outpatient",
    diagnosis: "Hypertension / Mild Arrhythmia",
    lastVisit: "2026-09-02"
  },
  {
    id: "P202",
    name: "Sunita Devi",
    age: 58,
    gender: "Female",
    contact: "9823456781",
    email: "sunita.d@example.com",
    department: "Neurology",
    doctor: "Dr. Roy",
    bloodGroup: "B+",
    admissionStatus: "Admitted",
    diagnosis: "Migraine & Cervical Spondylosis",
    lastVisit: "2026-09-05"
  },
  {
    id: "P203",
    name: "Aarav Banerjee",
    age: 11,
    gender: "Male",
    contact: "9834567892",
    email: "banerjee.parent@example.com",
    department: "Pediatrics",
    doctor: "Dr. Ananya Sen",
    bloodGroup: "A+",
    admissionStatus: "Discharged",
    diagnosis: "Acute Bronchitis Recovery",
    lastVisit: "2026-08-28"
  },
  {
    id: "P204",
    name: "Meera Joshi",
    age: 34,
    gender: "Female",
    contact: "9845678903",
    email: "meera.j@example.com",
    department: "Orthopedics",
    doctor: "Dr. Das",
    bloodGroup: "AB+",
    admissionStatus: "Outpatient",
    diagnosis: "Ligament Tear Rehab",
    lastVisit: "2026-09-04"
  }
];

let appointments = [
  {
    id: "APT-1001",
    token: "TK-01",
    patientName: "Amitabh Sen",
    email: "amitabh@example.com",
    phone: "9871112233",
    department: "Cardiology",
    doctorId: "D101",
    doctorName: "Dr. Sharma",
    date: "2026-09-08",
    timeSlot: "10:30 AM",
    status: "Confirmed",
    notes: "Routine ECG follow-up",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
  },
  {
    id: "APT-1002",
    token: "TK-02",
    patientName: "Kavita Rao",
    email: "kavita@example.com",
    phone: "9872223344",
    department: "Neurology",
    doctorId: "D102",
    doctorName: "Dr. Roy",
    date: "2026-09-09",
    timeSlot: "11:15 AM",
    status: "Pending",
    notes: "Persistent headaches",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
  },
  {
    id: "APT-1003",
    token: "TK-03",
    patientName: "Deepak Chawla",
    email: "deepak@example.com",
    phone: "9873334455",
    department: "Orthopedics",
    doctorId: "D103",
    doctorName: "Dr. Das",
    date: "2026-09-07",
    timeSlot: "02:00 PM",
    status: "Confirmed",
    notes: "Knee arthroscopy checkup",
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString()
  }
];

let contactMessages = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON middleware
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Summary statistics
  app.get("/api/stats", (req, res) => {
    const totalDoctors = doctors.length;
    const totalPatients = patients.length;
    const totalAppointments = appointments.length;
    const confirmedAppointments = appointments.filter(a => a.status === "Confirmed").length;
    res.json({
      totalDoctors,
      totalPatients,
      totalAppointments,
      confirmedAppointments,
      availableBeds: 42,
      emergencyStatus: "Active (24/7)"
    });
  });

  // Doctors endpoints
  app.get("/api/doctors", (req, res) => {
    const { department, search } = req.query;
    let filtered = [...doctors];

    if (department && department !== "All") {
      filtered = filtered.filter(
        d => d.department.toLowerCase() === department.toLowerCase()
      );
    }

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        d =>
          d.name.toLowerCase().includes(q) ||
          d.department.toLowerCase().includes(q) ||
          d.contact.includes(q) ||
          d.id.toLowerCase().includes(q)
      );
    }

    res.json(filtered);
  });

  app.post("/api/doctors", (req, res) => {
    const { name, department, contact, email, qualification, experience, room } = req.body;
    if (!name || !department || !contact) {
      return res.status(400).json({ error: "Name, department, and contact are required." });
    }

    const newId = `D${100 + doctors.length + 1}`;
    const newDoctor = {
      id: newId,
      name: name.startsWith("Dr.") ? name : `Dr. ${name}`,
      department,
      contact,
      email: email || `${name.toLowerCase().replace(/[^a-z]/g, "")}@cityhospital.com`,
      qualification: qualification || "MBBS, Specialist",
      experience: experience || "5+ yrs",
      room: room || `OPD ${Math.floor(Math.random() * 20) + 1}`,
      availableDays: ["Monday", "Wednesday", "Friday"],
      availableTime: "10:00 AM - 02:00 PM",
      rating: 4.8,
      patientsCount: 50
    };

    doctors.push(newDoctor);
    res.status(201).json({ success: true, doctor: newDoctor, message: "Doctor registered successfully!" });
  });

  // Patients endpoints
  app.get("/api/patients", (req, res) => {
    const { search, status } = req.query;
    let filtered = [...patients];

    if (status && status !== "All") {
      filtered = filtered.filter(p => p.admissionStatus.toLowerCase() === status.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q) ||
          p.department.toLowerCase().includes(q) ||
          p.contact.includes(q)
      );
    }

    res.json(filtered);
  });

  app.post("/api/patients", (req, res) => {
    const { name, age, gender, contact, email, department, doctor, bloodGroup, admissionStatus, diagnosis } = req.body;
    if (!name || !contact || !department) {
      return res.status(400).json({ error: "Patient name, contact, and department are required." });
    }

    const newId = `P${200 + patients.length + 1}`;
    const newPatient = {
      id: newId,
      name,
      age: parseInt(age) || 30,
      gender: gender || "Other",
      contact,
      email: email || "",
      department,
      doctor: doctor || "General Duty Physician",
      bloodGroup: bloodGroup || "O+",
      admissionStatus: admissionStatus || "Outpatient",
      diagnosis: diagnosis || "Consultation requested",
      lastVisit: new Date().toISOString().split("T")[0]
    };

    patients.unshift(newPatient);
    res.status(201).json({ success: true, patient: newPatient, message: "Patient registered successfully!" });
  });

  // Appointments endpoints
  app.get("/api/appointments", (req, res) => {
    res.json(appointments);
  });

  app.post("/api/appointments", (req, res) => {
    const { patientName, email, phone, department, doctorId, date, timeSlot, notes } = req.body;

    if (!patientName || !phone || !department || !date) {
      return res.status(400).json({ error: "Patient name, phone, department, and appointment date are required." });
    }

    // Find assigned doctor
    let assignedDoctor = null;
    if (doctorId) {
      assignedDoctor = doctors.find(d => d.id === doctorId);
    }
    if (!assignedDoctor) {
      assignedDoctor = doctors.find(d => d.department.toLowerCase() === department.toLowerCase()) || doctors[0];
    }

    const tokenNum = appointments.length + 1;
    const token = `TK-${tokenNum < 10 ? '0' + tokenNum : tokenNum}`;
    const newId = `APT-${1000 + tokenNum}`;

    const newAppointment = {
      id: newId,
      token,
      patientName,
      email: email || "",
      phone,
      department,
      doctorId: assignedDoctor ? assignedDoctor.id : "D101",
      doctorName: assignedDoctor ? assignedDoctor.name : "Dr. Sharma",
      date,
      timeSlot: timeSlot || "10:00 AM - 11:00 AM",
      status: "Confirmed",
      notes: notes || "General checkup",
      room: assignedDoctor ? assignedDoctor.room : "OPD 01",
      createdAt: new Date().toISOString()
    };

    appointments.unshift(newAppointment);

    res.status(201).json({
      success: true,
      appointment: newAppointment,
      message: `Appointment successfully confirmed for ${patientName}! Your Token is ${token}.`
    });
  });

  app.patch("/api/appointments/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const apt = appointments.find(a => a.id === id);
    if (!apt) {
      return res.status(404).json({ error: "Appointment not found." });
    }

    if (status) {
      apt.status = status;
    }

    res.json({ success: true, appointment: apt, message: `Appointment ${id} status updated to ${status}.` });
  });

  app.delete("/api/appointments/:id", (req, res) => {
    const { id } = req.params;
    const index = appointments.findIndex(a => a.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Appointment not found." });
    }

    const removed = appointments.splice(index, 1);
    res.json({ success: true, message: `Appointment ${id} has been cancelled.`, appointment: removed[0] });
  });

  // Contact endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, department, message } = req.body;
    if (!name || !message) {
      return res.status(400).json({ error: "Name and message are required." });
    }

    const recipient = "helpdesk.cityhospital67@gmail.com";
    const inquiry = {
      id: `MSG-${Date.now().toString().slice(-4)}`,
      name,
      email: email || "Not provided",
      phone: phone || "Not provided",
      department: department || "General Inquiry",
      message,
      recipient,
      submittedAt: new Date().toISOString()
    };

    contactMessages.push(inquiry);
    console.log(`[Helpdesk Inquiry Dispatched to ${recipient}] From: ${name} <${email}>, Phone: ${phone}, Dept: ${department}`);

    res.status(201).json({
      success: true,
      recipient,
      message: `Thank you, ${name}! Your inquiry has been dispatched to ${recipient} (Ref: ${inquiry.id}). Our hospital helpdesk will contact you shortly.`,
      inquiry
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Hospital Management System Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
