const SEED_DOCTORS = [
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

const SEED_PATIENTS = [
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

const SEED_APPOINTMENTS = [
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
    room: "OPD 12",
    createdAt: "2026-09-06T10:00:00Z"
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
    room: "OPD 05",
    createdAt: "2026-09-06T12:00:00Z"
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
    room: "OPD 08",
    createdAt: "2026-09-06T15:00:00Z"
  }
];

// Local Storage Helpers
function getLocalItem(key, defaultData) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(defaultData));
      return defaultData;
    }
    return JSON.parse(raw);
  } catch (e) {
    return defaultData;
  }
}

function setLocalItem(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn("Storage write error:", e);
  }
}

// Global state
let currentDoctors = [];
let currentPatients = [];
let currentAppointments = [];
let isOfflineMode = (window.location.protocol === "file:");
let lastBookedAptId = null;

document.addEventListener("DOMContentLoaded", () => {
  init3DTiltEffects();
  initNavigation();
  initDateConstraints();
  initEventListeners();

  // Initial data load
  loadStats();
  loadDoctors();
  loadPatients();
  loadAppointments();
});

/* ==========================================================================
   1. 3D Card Hover & Tilt Effects
   ========================================================================== */
function init3DTiltEffects() {
  const tiltCards = document.querySelectorAll("[data-tilt]");

  tiltCards.forEach(cardWrap => {
    const glare = cardWrap.querySelector(".card-glare");

    cardWrap.addEventListener("mousemove", (e) => {
      const rect = cardWrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation angles (-10 to +10 degrees)
      const rotateX = -((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;

      cardWrap.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px)`;

      // Dynamic specular reflection following cursor
      if (glare) {
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 80%)`;
      }
    });

    cardWrap.addEventListener("mouseleave", () => {
      cardWrap.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      if (glare) {
        glare.style.background = "transparent";
      }
    });
  });
}

/* ==========================================================================
   2. Responsive Navigation & Smooth Scrolling
   ========================================================================== */
function initNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked on mobile
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // Active Link Spy on Scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* Set min date for appointment booking to today */
function initDateConstraints() {
  const dateInput = document.getElementById("apt-date");
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${yyyy}-${mm}-${dd}`;
    if (!dateInput.value) {
      dateInput.value = `${yyyy}-${mm}-${dd}`;
    }
  }
}

/* ==========================================================================
   3. Backend API Data Fetchers & Renderers (With Offline Fallback)
   ========================================================================== */

// Stats
async function loadStats() {
  let stats = null;
  if (!isOfflineMode) {
    try {
      const res = await fetch("/api/stats");
      if (res.ok) {
        stats = await res.json();
      }
    } catch (err) {
      isOfflineMode = true;
    }
  }

  if (!stats) {
    const docs = getLocalItem("hms_doctors", SEED_DOCTORS);
    const pats = getLocalItem("hms_patients", SEED_PATIENTS);
    const apts = getLocalItem("hms_appointments", SEED_APPOINTMENTS);
    stats = {
      totalDoctors: docs.length,
      totalPatients: pats.length,
      totalAppointments: apts.length,
      availableBeds: 42
    };
  }

  document.getElementById("stat-doctor-count").textContent = stats.totalDoctors || 0;
  document.getElementById("stat-patient-count").textContent = stats.totalPatients || 0;
  document.getElementById("stat-apt-count").textContent = stats.totalAppointments || 0;
  document.getElementById("stat-bed-count").textContent = stats.availableBeds || 42;
}

// Doctors
async function loadDoctors(department = "All", search = "") {
  let docs = null;
  if (!isOfflineMode) {
    try {
      let url = "/api/doctors";
      const params = new URLSearchParams();
      if (department && department !== "All") params.append("department", department);
      if (search) params.append("search", search);
      if (params.toString()) url += `?${params.toString()}`;

      const res = await fetch(url);
      if (res.ok) {
        docs = await res.json();
        setLocalItem("hms_doctors", docs);
      }
    } catch (err) {
      isOfflineMode = true;
    }
  }

  if (!docs) {
    const allDocs = getLocalItem("hms_doctors", SEED_DOCTORS);
    docs = allDocs.filter(d => {
      const matchDept = (!department || department === "All" || d.department.toLowerCase() === department.toLowerCase());
      const matchSearch = (!search || 
        d.name.toLowerCase().includes(search.toLowerCase()) || 
        d.department.toLowerCase().includes(search.toLowerCase()) || 
        d.contact.includes(search) || 
        d.id.toLowerCase().includes(search.toLowerCase())
      );
      return matchDept && matchSearch;
    });
  }

  currentDoctors = docs;
  renderDoctorsTable(currentDoctors);
  populateDoctorDropdown(currentDoctors);
}

function renderDoctorsTable(doctors) {
  const tbody = document.getElementById("doctors-tbody");
  if (!tbody) return;

  if (!doctors || doctors.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding: 30px; color: var(--text-muted);">
          No matching doctors found. Try adjusting your search or filter.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = doctors.map(doc => `
    <tr id="doc-row-${doc.id}">
      <td><strong>${doc.id}</strong></td>
      <td>
        <strong style="color: var(--dark-blue); font-size: 15px;">${doc.name}</strong>
        <div style="font-size: 12px; color: var(--text-muted);">${doc.qualification || "Specialist"}</div>
      </td>
      <td>
        <span class="badge badge-dept">${doc.department}</span>
      </td>
      <td><strong>${doc.room || "OPD 01"}</strong></td>
      <td>
        <a href="tel:${doc.contact}" style="color: var(--text-main); text-decoration: none; font-weight: 500;">
          📞 ${doc.contact}
        </a>
      </td>
      <td>
        <span style="font-size: 12px; color: var(--text-muted); font-weight: 500;">
          ${(doc.availableDays || ["Mon", "Wed", "Fri"]).join(", ")}
        </span>
      </td>
      <td>
        <button class="table-btn table-btn-primary" onclick="quickBookDoctor('${doc.id}', '${doc.department}')">
          Book Visit
        </button>
      </td>
    </tr>
  `).join("");
}

// Populate appointment booking doctor dropdown
function populateDoctorDropdown(doctorsList) {
  const select = document.getElementById("apt-doctor");
  if (!select) return;

  const currentVal = select.value;
  select.innerHTML = `<option value="">-- Any Available Specialist --</option>` +
    doctorsList.map(d => `<option value="${d.id}">${d.name} (${d.department} - ${d.room || "OPD"})</option>`).join("");

  if (currentVal && doctorsList.some(d => d.id === currentVal)) {
    select.value = currentVal;
  }
}

// Quick book action from doctor table
window.quickBookDoctor = function(doctorId, department) {
  const deptSelect = document.getElementById("apt-department");
  const docSelect = document.getElementById("apt-doctor");
  const appointmentSection = document.getElementById("appointments");

  if (deptSelect) deptSelect.value = department;
  filterDoctorSelectByDept(department);

  if (docSelect) docSelect.value = doctorId;

  if (appointmentSection) {
    appointmentSection.scrollIntoView({ behavior: "smooth" });
    appointmentSection.style.boxShadow = "0 0 0 3px rgba(0, 119, 204, 0.5)";
    setTimeout(() => {
      appointmentSection.style.boxShadow = "";
    }, 1200);
  }

  showToast(`Selected Dr. ${doctorId} (${department}) for appointment booking.`, "success");
};

function filterDoctorSelectByDept(department) {
  const select = document.getElementById("apt-doctor");
  if (!select) return;

  let filtered = currentDoctors;
  if (department) {
    filtered = currentDoctors.filter(d => d.department.toLowerCase() === department.toLowerCase());
  }

  select.innerHTML = `<option value="">-- Any Available Specialist --</option>` +
    filtered.map(d => `<option value="${d.id}">${d.name} (${d.room || "OPD"})</option>`).join("");
}

// Patients
async function loadPatients(status = "All", search = "") {
  let pats = null;
  if (!isOfflineMode) {
    try {
      let url = "/api/patients";
      const params = new URLSearchParams();
      if (status && status !== "All") params.append("status", status);
      if (search) params.append("search", search);
      if (params.toString()) url += `?${params.toString()}`;

      const res = await fetch(url);
      if (res.ok) {
        pats = await res.json();
        setLocalItem("hms_patients", pats);
      }
    } catch (err) {
      isOfflineMode = true;
    }
  }

  if (!pats) {
    const allPats = getLocalItem("hms_patients", SEED_PATIENTS);
    pats = allPats.filter(p => {
      const matchStatus = (!status || status === "All" || p.admissionStatus.toLowerCase() === status.toLowerCase());
      const matchSearch = (!search || 
        p.name.toLowerCase().includes(search.toLowerCase()) || 
        p.id.toLowerCase().includes(search.toLowerCase()) || 
        p.department.toLowerCase().includes(search.toLowerCase()) || 
        p.contact.includes(search)
      );
      return matchStatus && matchSearch;
    });
  }

  currentPatients = pats;
  renderPatientsTable(currentPatients);
}

function renderPatientsTable(patients) {
  const tbody = document.getElementById("patients-tbody");
  if (!tbody) return;

  if (!patients || patients.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding: 30px; color: var(--text-muted);">
          No patient records found.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = patients.map(p => {
    let badgeClass = "badge-success";
    if (p.admissionStatus === "Admitted") badgeClass = "badge-danger";
    if (p.admissionStatus === "Outpatient") badgeClass = "badge-dept";

    return `
      <tr id="pat-row-${p.id}">
        <td><strong>${p.id}</strong></td>
        <td>
          <strong style="color: var(--dark-blue);">${p.name}</strong>
          <div style="font-size: 12px; color: var(--text-muted);">Blood Group: ${p.bloodGroup || "N/A"}</div>
        </td>
        <td>${p.age} yrs / ${p.gender}</td>
        <td><span class="badge badge-dept">${p.department}</span></td>
        <td>${p.doctor}</td>
        <td><span class="badge ${badgeClass}">${p.admissionStatus}</span></td>
        <td style="color: var(--text-muted); font-size: 13px;">${p.lastVisit || "Recent"}</td>
      </tr>
    `;
  }).join("");
}

// Appointments
async function loadAppointments() {
  let apts = null;
  if (!isOfflineMode) {
    try {
      const res = await fetch("/api/appointments");
      if (res.ok) {
        apts = await res.json();
        setLocalItem("hms_appointments", apts);
      }
    } catch (err) {
      isOfflineMode = true;
    }
  }

  if (!apts) {
    apts = getLocalItem("hms_appointments", SEED_APPOINTMENTS);
  }

  currentAppointments = apts;
  renderAppointmentsQueue(currentAppointments);
}

function renderAppointmentsQueue(appointmentsList) {
  const container = document.getElementById("appointment-queue-container");
  if (!container) return;

  if (!appointmentsList || appointmentsList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 30px; background: white; border-radius: 8px; border: 1px solid var(--border-color);">
        <p style="color: var(--text-muted);">No appointments currently in the queue. Book your appointment above!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = appointmentsList.map(apt => {
    let statusClass = "status-confirmed";
    if (apt.status === "Pending") statusClass = "status-pending";
    const isNew = (apt.id === lastBookedAptId);

    return `
      <div class="queue-card ${statusClass} ${isNew ? 'highlight-recent-booked' : ''}" id="apt-card-${apt.id}">
        <div class="queue-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="queue-token">${apt.token}</span>
            ${isNew ? `<span class="badge" style="background: #0284c7; color: white; font-weight: 700;">✨ New Booking</span>` : ''}
          </div>
          <span class="badge ${apt.status === "Confirmed" ? "badge-success" : "badge-warning"}">
            ${apt.status}
          </span>
        </div>
        <div class="queue-body">
          <h4>${apt.patientName}</h4>
          <div class="queue-meta">
            <span>🩺 <strong>${apt.department}</strong> - ${apt.doctorName}</span>
            <span>📍 ${apt.room || "OPD"} | 🕒 ${apt.timeSlot}</span>
            <span>📅 Date: <strong>${apt.date}</strong></span>
            <span>📞 ${apt.phone}</span>
          </div>
        </div>
        <div class="queue-actions">
          ${apt.status !== "Completed" ? `
            <button class="table-btn table-btn-primary" onclick="markAppointmentStatus('${apt.id}', 'Completed')">
              ✓ Completed
            </button>
          ` : ""}
          <button class="table-btn table-btn-danger" onclick="cancelAppointment('${apt.id}')">
            Cancel
          </button>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   4. Event Listeners & Forms Submission
   ========================================================================== */
function initEventListeners() {
  // Department filter buttons for Doctors
  const docFilters = document.getElementById("doctor-dept-filters");
  if (docFilters) {
    docFilters.querySelectorAll(".filter-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        docFilters.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const dept = btn.getAttribute("data-dept");
        const search = document.getElementById("doctor-search-input").value.trim();
        loadDoctors(dept, search);
      });
    });
  }

  // Doctor search input with debounce
  const docSearchInput = document.getElementById("doctor-search-input");
  if (docSearchInput) {
    let timeout;
    docSearchInput.addEventListener("input", () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const activePill = document.querySelector("#doctor-dept-filters .filter-pill.active");
        const dept = activePill ? activePill.getAttribute("data-dept") : "All";
        loadDoctors(dept, docSearchInput.value.trim());
      }, 250);
    });
  }

  // Patient status filter buttons
  const patFilters = document.getElementById("patient-status-filters");
  if (patFilters) {
    patFilters.querySelectorAll(".filter-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        patFilters.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const status = btn.getAttribute("data-status");
        const search = document.getElementById("patient-search-input").value.trim();
        loadPatients(status, search);
      });
    });
  }

  // Patient search input
  const patSearchInput = document.getElementById("patient-search-input");
  if (patSearchInput) {
    let timeout;
    patSearchInput.addEventListener("input", () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const activePill = document.querySelector("#patient-status-filters .filter-pill.active");
        const status = activePill ? activePill.getAttribute("data-status") : "All";
        loadPatients(status, patSearchInput.value.trim());
      }, 250);
    });
  }

  // Department change in Appointment Form dynamically filters doctors
  const aptDept = document.getElementById("apt-department");
  if (aptDept) {
    aptDept.addEventListener("change", (e) => {
      filterDoctorSelectByDept(e.target.value);
    });
  }

  // Appointment Form Submit
  const aptForm = document.getElementById("appointment-form") || document.getElementById("appointment-booking-form");
  if (aptForm) {
    aptForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById("btn-submit-appointment") || 
                        document.getElementById("btn-submit-apt") || 
                        aptForm.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>⏳</span> Confirming...`;
      }

      const patientName = (document.getElementById("apt-patient-name")?.value || "").trim();
      const phone = (document.getElementById("apt-phone")?.value || "").trim();
      const email = (document.getElementById("apt-email")?.value || "").trim();
      const department = document.getElementById("apt-department")?.value || "";
      const doctorId = document.getElementById("apt-doctor")?.value || "";
      const date = document.getElementById("apt-date")?.value || "";
      const timeSlot = document.getElementById("apt-timeslot")?.value || "10:00 AM - 11:00 AM";
      const notes = (document.getElementById("apt-notes")?.value || "").trim();

      if (!patientName || !phone || !department || !date) {
        showToast("Please fill all required fields (Name, Phone, Department, Date).", "danger");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>📅</span> Confirm & Book Appointment`;
        }
        return;
      }

      const payload = {
        patientName,
        phone,
        email,
        department,
        doctorId,
        date,
        timeSlot,
        notes
      };

      let confirmedApt = null;
      let successMessage = "";

      if (!isOfflineMode) {
        try {
          const res = await fetch("/api/appointments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          if (res.ok) {
            confirmedApt = data.appointment;
            successMessage = data.message;
          } else {
            console.warn("API response error:", data.error);
          }
        } catch (err) {
          console.warn("Falling back to local mode:", err);
          isOfflineMode = true;
        }
      }

      // Offline / Client-Side Fallback Generation
      if (!confirmedApt) {
        const allDocs = getLocalItem("hms_doctors", SEED_DOCTORS);
        let assignedDoc = allDocs.find(d => d.id === doctorId) || 
                          allDocs.find(d => d.department.toLowerCase() === department.toLowerCase()) || 
                          allDocs[0];
        const allApts = getLocalItem("hms_appointments", SEED_APPOINTMENTS);
        const tokenNum = allApts.length + 1;
        const token = `TK-${tokenNum < 10 ? "0" + tokenNum : tokenNum}`;
        const newId = `APT-${1000 + tokenNum}`;

        confirmedApt = {
          id: newId,
          token: token,
          patientName: patientName,
          email: email || "",
          phone: phone,
          department: department,
          doctorId: assignedDoc ? assignedDoc.id : "D101",
          doctorName: assignedDoc ? assignedDoc.name : "Dr. Sharma",
          date: date,
          timeSlot: timeSlot || "10:00 AM - 11:00 AM",
          status: "Confirmed",
          notes: notes || "Routine Consultation",
          room: assignedDoc ? assignedDoc.room : "OPD 01",
          createdAt: new Date().toISOString()
        };

        allApts.unshift(confirmedApt);
        setLocalItem("hms_appointments", allApts);
        successMessage = `Appointment confirmed for ${patientName}! Your Token is ${token}.`;
      }

      // Track newest booking to highlight in Recent Bookings queue
      lastBookedAptId = confirmedApt.id;

      aptForm.reset();
      initDateConstraints();
      await loadAppointments();
      await loadStats();
      showToast(successMessage, "success");
      showAppointmentConfirmation(confirmedApt);

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>📅</span> Confirm & Book Appointment`;
      }
    });
  }

  // Register Doctor Modal Open
  const btnAddDoc = document.getElementById("btn-add-doctor-modal");
  if (btnAddDoc) {
    btnAddDoc.addEventListener("click", () => {
      openModal("add-doctor-modal");
    });
  }

  // Doctor Form Submit
  const newDocForm = document.getElementById("new-doctor-form");
  if (newDocForm) {
    newDocForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const payload = {
        name: document.getElementById("doc-name").value.trim(),
        department: document.getElementById("doc-dept").value,
        contact: document.getElementById("doc-contact").value.trim(),
        qualification: document.getElementById("doc-qualification").value.trim(),
        room: document.getElementById("doc-room").value.trim()
      };

      let success = false;
      if (!isOfflineMode) {
        try {
          const res = await fetch("/api/doctors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
          if (res.ok) {
            success = true;
          }
        } catch (err) {
          isOfflineMode = true;
        }
      }

      if (!success) {
        const allDocs = getLocalItem("hms_doctors", SEED_DOCTORS);
        const newId = `D${100 + allDocs.length + 1}`;
        const newDoc = {
          id: newId,
          name: payload.name.startsWith("Dr.") ? payload.name : `Dr. ${payload.name}`,
          department: payload.department,
          contact: payload.contact,
          email: `${newId.toLowerCase()}@cityhospital.com`,
          qualification: payload.qualification || "MBBS, Specialist",
          experience: "5+ yrs",
          room: payload.room || `OPD ${allDocs.length + 1}`,
          availableDays: ["Monday", "Wednesday", "Friday"],
          availableTime: "10:00 AM - 02:00 PM",
          rating: 4.8,
          patientsCount: 10
        };
        allDocs.push(newDoc);
        setLocalItem("hms_doctors", allDocs);
      }

      closeModal("add-doctor-modal");
      newDocForm.reset();
      loadDoctors();
      loadStats();
      showToast("Doctor registered successfully!", "success");
    });
  }

  // Register Patient Modal Open
  const btnAddPat = document.getElementById("btn-add-patient-modal");
  if (btnAddPat) {
    btnAddPat.addEventListener("click", () => {
      openModal("add-patient-modal");
    });
  }

  // Patient Form Submit
  const newPatForm = document.getElementById("new-patient-form");
  if (newPatForm) {
    newPatForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const payload = {
        name: document.getElementById("pat-name").value.trim(),
        age: document.getElementById("pat-age").value,
        gender: document.getElementById("pat-gender").value,
        contact: document.getElementById("pat-contact").value.trim(),
        department: document.getElementById("pat-dept").value,
        bloodGroup: document.getElementById("pat-blood").value,
        admissionStatus: document.getElementById("pat-status").value,
        diagnosis: document.getElementById("pat-diagnosis").value.trim()
      };

      let success = false;
      if (!isOfflineMode) {
        try {
          const res = await fetch("/api/patients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
          if (res.ok) {
            success = true;
          }
        } catch (err) {
          isOfflineMode = true;
        }
      }

      if (!success) {
        const allPats = getLocalItem("hms_patients", SEED_PATIENTS);
        const newId = `P${200 + allPats.length + 1}`;
        const newPatient = {
          id: newId,
          name: payload.name,
          age: parseInt(payload.age, 10) || 30,
          gender: payload.gender || "Other",
          contact: payload.contact,
          email: "",
          department: payload.department,
          doctor: "General Duty Physician",
          bloodGroup: payload.bloodGroup || "O+",
          admissionStatus: payload.admissionStatus || "Outpatient",
          diagnosis: payload.diagnosis || "Consultation requested",
          lastVisit: new Date().toISOString().split("T")[0]
        };
        allPats.unshift(newPatient);
        setLocalItem("hms_patients", allPats);
      }

      closeModal("add-patient-modal");
      newPatForm.reset();
      loadPatients();
      loadStats();
      showToast("Patient registered successfully!", "success");
    });
  }

  // Contact Form Submit
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById("btn-submit-contact") || contactForm.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>⏳</span> Dispatching to Email...`;
      }

      const name = (document.getElementById("contact-name")?.value || "").trim();
      const email = (document.getElementById("contact-email")?.value || "").trim();
      const phone = (document.getElementById("contact-phone")?.value || "").trim();
      const department = document.getElementById("contact-dept")?.value || "General Inquiry";
      const message = (document.getElementById("contact-msg")?.value || "").trim();

      const recipientEmail = "helpdesk.cityhospital67@gmail.com";
      const subject = `[City Hospital Inquiry] ${department} - ${name}`;
      const emailBody = `Dear Hospital Helpdesk Team,

A new inquiry has been submitted through the City Hospital portal:

• Patient / Sender Name: ${name}
• Email Address: ${email || "Not provided"}
• Contact Phone: ${phone || "Not provided"}
• Department: ${department}
• Date & Time: ${new Date().toLocaleString()}

--------------------------------------------------
MESSAGE CONTENT:
${message}
--------------------------------------------------

Campus Address: PFCV+GCR, Banamalipur, Kolkata, West Bengal 700124
Google Maps Link: https://maps.app.goo.gl/e2f3cA1T92PnEbwC6
Emergency Phone: 8910899945 | Helpdesk Desk: 8092814095
Recipient: ${recipientEmail}`;

      const payload = {
        name,
        email,
        phone,
        department,
        message,
        recipient: recipientEmail
      };

      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        const savedMsgs = getLocalItem("hms_contact_messages", []);
        savedMsgs.unshift({ ...payload, id: `MSG-${Date.now().toString().slice(-4)}`, date: new Date().toISOString() });
        setLocalItem("hms_contact_messages", savedMsgs);
      }

      const mailtoUrl = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

      // Attempt immediate mailto trigger
      try {
        const mailtoLink = document.createElement("a");
        mailtoLink.href = mailtoUrl;
        mailtoLink.target = "_blank";
        mailtoLink.rel = "noopener noreferrer";
        document.body.appendChild(mailtoLink);
        mailtoLink.click();
        document.body.removeChild(mailtoLink);
      } catch (err) {
        console.warn("Mailto link trigger fallback:", err);
      }

      showContactSuccessModal(name, recipientEmail, subject, emailBody, mailtoUrl, gmailUrl);
      contactForm.reset();
      showToast(`Inquiry prepared and dispatched to ${recipientEmail}!`, "success");

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>✉️</span> Send Message to Helpdesk`;
      }
    });
  }
}

/* ==========================================================================
   5. Appointment Status Actions (Cancel, Complete)
   ========================================================================== */
window.markAppointmentStatus = async function(id, newStatus) {
  let success = false;
  if (!isOfflineMode) {
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) success = true;
    } catch (err) {
      isOfflineMode = true;
    }
  }

  if (!success) {
    const allApts = getLocalItem("hms_appointments", SEED_APPOINTMENTS);
    const target = allApts.find(a => a.id === id);
    if (target) {
      target.status = newStatus;
      setLocalItem("hms_appointments", allApts);
    }
  }

  loadAppointments();
  loadStats();
  showToast(`Appointment marked as ${newStatus}.`, "success");
};

window.cancelAppointment = async function(id) {
  if (!confirm(`Are you sure you want to cancel appointment ${id}?`)) return;

  let success = false;
  if (!isOfflineMode) {
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: "DELETE"
      });
      if (res.ok) success = true;
    } catch (err) {
      isOfflineMode = true;
    }
  }

  if (!success) {
    const allApts = getLocalItem("hms_appointments", SEED_APPOINTMENTS);
    const index = allApts.findIndex(a => a.id === id);
    if (index !== -1) {
      allApts.splice(index, 1);
      setLocalItem("hms_appointments", allApts);
    }
  }

  loadAppointments();
  loadStats();
  showToast(`Appointment ${id} has been cancelled.`, "success");
};

/* ==========================================================================
   6. Modals & Digital Pass Display
   ========================================================================== */
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("active");
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
  if (modalId === "appointment-ticket-modal" && lastBookedAptId) {
    setTimeout(() => {
      const card = document.getElementById(`apt-card-${lastBookedAptId}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);
  }
};

window.viewInRecentBookings = function(aptId) {
  closeModal("appointment-ticket-modal");
  const targetId = aptId || lastBookedAptId;
  setTimeout(() => {
    const card = targetId ? document.getElementById(`apt-card-${targetId}`) : null;
    const feed = document.querySelector(".appointments-feed") || document.getElementById("appointment-queue-container");
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("highlight-recent-booked");
    } else if (feed) {
      feed.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 200);
};

function showAppointmentConfirmation(apt) {
  document.getElementById("pass-token").textContent = apt.token;
  document.getElementById("pass-patient").textContent = apt.patientName;
  document.getElementById("pass-id").textContent = apt.id;
  document.getElementById("pass-dept").textContent = apt.department;
  document.getElementById("pass-doctor").textContent = apt.doctorName;
  document.getElementById("pass-room").textContent = apt.room || "OPD 01";
  document.getElementById("pass-date").textContent = `${apt.date} (${apt.timeSlot})`;

  openModal("appointment-ticket-modal");
}

let currentContactEmailBody = "";

function showContactSuccessModal(name, recipient, subject, body, mailtoUrl, gmailUrl) {
  currentContactEmailBody = body;
  const subjEl = document.getElementById("contact-modal-subject");
  const bodyEl = document.getElementById("contact-modal-body");
  const gmailBtn = document.getElementById("btn-open-gmail-web");
  const mailBtn = document.getElementById("btn-open-default-mail");

  if (subjEl) subjEl.textContent = subject;
  if (bodyEl) bodyEl.textContent = body;
  if (gmailBtn) gmailBtn.href = gmailUrl;
  if (mailBtn) mailBtn.href = mailtoUrl;

  openModal("contact-success-modal");
}

window.copyContactMessageText = async function() {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(currentContactEmailBody);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = currentContactEmailBody;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    showToast("Message text copied to clipboard!", "success");
  } catch (err) {
    showToast("Please copy text directly from the message box.", "danger");
  }
};

/* Close modals on overlay click */
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
});

/* ==========================================================================
   7. Toast Notification System
   ========================================================================== */
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === "success" ? "✓" : "⚠️"}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger entering animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Auto remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 350);
  }, 4000);
}
