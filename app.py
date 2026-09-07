#!/usr/bin/env python3
"""
Hospital Management System - Standalone Python Backend
Uses Python 3 Standard Library (no external pip packages required).
Can be run simply with:
    python app.py
"""

import http.server
import json
import os
import sys
import urllib.parse
from datetime import datetime

PORT = int(os.environ.get("PORT", 3000))

# In-memory storage with initial data
doctors = [
    {
        "id": "D101",
        "name": "Dr. Sharma",
        "department": "Cardiology",
        "contact": "9876543210",
        "email": "sharma@cityhospital.com",
        "qualification": "MD, DM (Cardiology)",
        "experience": "14 yrs",
        "room": "OPD 12",
        "availableDays": ["Monday", "Wednesday", "Friday"],
        "availableTime": "09:00 AM - 01:00 PM",
        "rating": 4.9,
        "patientsCount": 1420
    },
    {
        "id": "D102",
        "name": "Dr. Roy",
        "department": "Neurology",
        "contact": "9876543211",
        "email": "roy@cityhospital.com",
        "qualification": "MBBS, MCh (Neurology)",
        "experience": "11 yrs",
        "room": "OPD 05",
        "availableDays": ["Tuesday", "Thursday", "Saturday"],
        "availableTime": "10:00 AM - 02:00 PM",
        "rating": 4.8,
        "patientsCount": 980
    },
    {
        "id": "D103",
        "name": "Dr. Das",
        "department": "Orthopedics",
        "contact": "9876543212",
        "email": "das@cityhospital.com",
        "qualification": "MS (Ortho), Joint Specialist",
        "experience": "9 yrs",
        "room": "OPD 08",
        "availableDays": ["Monday", "Tuesday", "Friday"],
        "availableTime": "11:00 AM - 03:00 PM",
        "rating": 4.7,
        "patientsCount": 860
    },
    {
        "id": "D104",
        "name": "Dr. Ananya Sen",
        "department": "Pediatrics",
        "contact": "9876543213",
        "email": "ananya.sen@cityhospital.com",
        "qualification": "MD (Pediatrics), DCH",
        "experience": "8 yrs",
        "room": "OPD 03",
        "availableDays": ["Monday", "Wednesday", "Saturday"],
        "availableTime": "09:30 AM - 01:30 PM",
        "rating": 4.9,
        "patientsCount": 1150
    },
    {
        "id": "D105",
        "name": "Dr. Rajesh Verma",
        "department": "Cardiology",
        "contact": "9876543214",
        "email": "verma@cityhospital.com",
        "qualification": "MD, FACC Interventional",
        "experience": "16 yrs",
        "room": "OPD 14",
        "availableDays": ["Tuesday", "Thursday"],
        "availableTime": "02:00 PM - 06:00 PM",
        "rating": 4.9,
        "patientsCount": 2100
    },
    {
        "id": "D106",
        "name": "Dr. Priya Nair",
        "department": "General Medicine",
        "contact": "9876543215",
        "email": "priya.nair@cityhospital.com",
        "qualification": "MBBS, MD (Medicine)",
        "experience": "10 yrs",
        "room": "OPD 01",
        "availableDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "availableTime": "08:30 AM - 02:00 PM",
        "rating": 4.8,
        "patientsCount": 1890
    }
]

patients = [
    {
        "id": "P201",
        "name": "Rahul Mukherjee",
        "age": 42,
        "gender": "Male",
        "contact": "9812345670",
        "email": "rahul.m@example.com",
        "department": "Cardiology",
        "doctor": "Dr. Sharma",
        "bloodGroup": "O+",
        "admissionStatus": "Outpatient",
        "diagnosis": "Hypertension / Mild Arrhythmia",
        "lastVisit": "2026-09-02"
    },
    {
        "id": "P202",
        "name": "Sunita Devi",
        "age": 58,
        "gender": "Female",
        "contact": "9823456781",
        "email": "sunita.d@example.com",
        "department": "Neurology",
        "doctor": "Dr. Roy",
        "bloodGroup": "B+",
        "admissionStatus": "Admitted",
        "diagnosis": "Migraine & Cervical Spondylosis",
        "lastVisit": "2026-09-05"
    },
    {
        "id": "P203",
        "name": "Aarav Banerjee",
        "age": 11,
        "gender": "Male",
        "contact": "9834567892",
        "email": "banerjee.parent@example.com",
        "department": "Pediatrics",
        "doctor": "Dr. Ananya Sen",
        "bloodGroup": "A+",
        "admissionStatus": "Discharged",
        "diagnosis": "Acute Bronchitis Recovery",
        "lastVisit": "2026-08-28"
    },
    {
        "id": "P204",
        "name": "Meera Joshi",
        "age": 34,
        "gender": "Female",
        "contact": "9845678903",
        "email": "meera.j@example.com",
        "department": "Orthopedics",
        "doctor": "Dr. Das",
        "bloodGroup": "AB+",
        "admissionStatus": "Outpatient",
        "diagnosis": "Ligament Tear Rehab",
        "lastVisit": "2026-09-04"
    }
]

appointments = [
    {
        "id": "APT-1001",
        "token": "TK-01",
        "patientName": "Amitabh Sen",
        "email": "amitabh@example.com",
        "phone": "9871112233",
        "department": "Cardiology",
        "doctorId": "D101",
        "doctorName": "Dr. Sharma",
        "date": "2026-09-08",
        "timeSlot": "10:30 AM",
        "status": "Confirmed",
        "notes": "Routine ECG follow-up",
        "room": "OPD 12",
        "createdAt": "2026-09-06T10:00:00Z"
    },
    {
        "id": "APT-1002",
        "token": "TK-02",
        "patientName": "Kavita Rao",
        "email": "kavita@example.com",
        "phone": "9872223344",
        "department": "Neurology",
        "doctorId": "D102",
        "doctorName": "Dr. Roy",
        "date": "2026-09-09",
        "timeSlot": "11:15 AM",
        "status": "Pending",
        "notes": "Persistent headaches",
        "room": "OPD 05",
        "createdAt": "2026-09-06T12:00:00Z"
    },
    {
        "id": "APT-1003",
        "token": "TK-03",
        "patientName": "Deepak Chawla",
        "email": "deepak@example.com",
        "phone": "9873334455",
        "department": "Orthopedics",
        "doctorId": "D103",
        "doctorName": "Dr. Das",
        "date": "2026-09-07",
        "timeSlot": "02:00 PM",
        "status": "Confirmed",
        "notes": "Knee arthroscopy checkup",
        "room": "OPD 08",
        "createdAt": "2026-09-06T15:00:00Z"
    }
]

contact_messages = []


class HospitalRequestHandler(http.server.SimpleHTTPRequestHandler):
    def send_json(self, data, status_code=200):
        body = json.dumps(data).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)

        if path == "/api/health":
            self.send_json({"status": "ok", "timestamp": datetime.utcnow().isoformat() + "Z"})
            return

        if path == "/api/stats":
            self.send_json({
                "totalDoctors": len(doctors),
                "totalPatients": len(patients),
                "totalAppointments": len(appointments),
                "confirmedAppointments": sum(1 for a in appointments if a["status"] == "Confirmed"),
                "availableBeds": 42,
                "emergencyStatus": "Active (24/7)"
            })
            return

        if path == "/api/doctors":
            dept = query.get("department", ["All"])[0]
            search = query.get("search", [""])[0].lower()
            filtered = doctors
            if dept and dept != "All":
                filtered = [d for d in filtered if d["department"].lower() == dept.lower()]
            if search:
                filtered = [
                    d for d in filtered if
                    search in d["name"].lower() or
                    search in d["department"].lower() or
                    search in d["contact"] or
                    search in d["id"].lower()
                ]
            self.send_json(filtered)
            return

        if path == "/api/patients":
            status = query.get("status", ["All"])[0]
            search = query.get("search", [""])[0].lower()
            filtered = patients
            if status and status != "All":
                filtered = [p for p in filtered if p["admissionStatus"].lower() == status.lower()]
            if search:
                filtered = [
                    p for p in filtered if
                    search in p["name"].lower() or
                    search in p["id"].lower() or
                    search in p["department"].lower() or
                    search in p["contact"]
                ]
            self.send_json(filtered)
            return

        if path == "/api/appointments":
            self.send_json(appointments)
            return

        # Static files fallback
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        content_length = int(self.headers.get("Content-Length", 0))
        post_data = self.rfile.read(content_length).decode("utf-8") if content_length > 0 else "{}"
        try:
            payload = json.loads(post_data)
        except Exception:
            payload = {}

        if path == "/api/appointments":
            name = payload.get("patientName")
            phone = payload.get("phone")
            dept = payload.get("department")
            date = payload.get("date")

            if not name or not phone or not dept or not date:
                self.send_json({"error": "Patient name, phone, department, and date are required."}, 400)
                return

            doc_id = payload.get("doctorId")
            assigned = None
            if doc_id:
                for d in doctors:
                    if d["id"] == doc_id:
                        assigned = d
                        break
            if not assigned:
                for d in doctors:
                    if d["department"].lower() == dept.lower():
                        assigned = d
                        break
            if not assigned and doctors:
                assigned = doctors[0]

            token_num = len(appointments) + 1
            token = f"TK-{token_num:02d}"
            new_id = f"APT-{1000 + token_num}"

            new_apt = {
                "id": new_id,
                "token": token,
                "patientName": name,
                "email": payload.get("email", ""),
                "phone": phone,
                "department": dept,
                "doctorId": assigned["id"] if assigned else "D101",
                "doctorName": assigned["name"] if assigned else "Dr. Sharma",
                "date": date,
                "timeSlot": payload.get("timeSlot", "10:00 AM - 11:00 AM"),
                "status": "Confirmed",
                "notes": payload.get("notes", "General checkup"),
                "room": assigned.get("room", "OPD 01") if assigned else "OPD 01",
                "createdAt": datetime.utcnow().isoformat() + "Z"
            }
            appointments.insert(0, new_apt)
            self.send_json({
                "success": True,
                "appointment": new_apt,
                "message": f"Appointment successfully confirmed for {name}! Your Token is {token}."
            }, 201)
            return

        if path == "/api/doctors":
            name = payload.get("name")
            dept = payload.get("department")
            contact = payload.get("contact")
            if not name or not dept or not contact:
                self.send_json({"error": "Name, department, and contact are required."}, 400)
                return

            new_id = f"D{100 + len(doctors) + 1}"
            new_doc = {
                "id": new_id,
                "name": name if name.startswith("Dr.") else f"Dr. {name}",
                "department": dept,
                "contact": contact,
                "email": payload.get("email", f"{new_id.lower()}@cityhospital.com"),
                "qualification": payload.get("qualification", "MBBS, Specialist"),
                "experience": payload.get("experience", "5+ yrs"),
                "room": payload.get("room", f"OPD {len(doctors) + 1}"),
                "availableDays": ["Monday", "Wednesday", "Friday"],
                "availableTime": "10:00 AM - 02:00 PM",
                "rating": 4.8,
                "patientsCount": 50
            }
            doctors.append(new_doc)
            self.send_json({"success": True, "doctor": new_doc, "message": "Doctor registered successfully!"}, 201)
            return

        if path == "/api/patients":
            name = payload.get("name")
            contact = payload.get("contact")
            dept = payload.get("department")
            if not name or not contact or not dept:
                self.send_json({"error": "Patient name, contact, and department are required."}, 400)
                return

            new_id = f"P{200 + len(patients) + 1}"
            new_patient = {
                "id": new_id,
                "name": name,
                "age": int(payload.get("age", 30)),
                "gender": payload.get("gender", "Other"),
                "contact": contact,
                "email": payload.get("email", ""),
                "department": dept,
                "doctor": payload.get("doctor", "General Duty Physician"),
                "bloodGroup": payload.get("bloodGroup", "O+"),
                "admissionStatus": payload.get("admissionStatus", "Outpatient"),
                "diagnosis": payload.get("diagnosis", "Consultation requested"),
                "lastVisit": datetime.utcnow().strftime("%Y-%m-%d")
            }
            patients.insert(0, new_patient)
            self.send_json({"success": True, "patient": new_patient, "message": "Patient registered successfully!"}, 201)
            return

        if path == "/api/contact":
            name = payload.get("name")
            msg = payload.get("message")
            if not name or not msg:
                self.send_json({"error": "Name and message are required."}, 400)
                return
            msg_id = f"MSG-{int(datetime.utcnow().timestamp())}"
            contact_messages.append({"id": msg_id, "name": name, "message": msg})
            self.send_json({
                "success": True,
                "message": f"Thank you, {name}! Your inquiry has been received (Ref: {msg_id})."
            }, 201)
            return

        self.send_json({"error": "Not Found"}, 404)

    def do_PATCH(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        if path.startswith("/api/appointments/"):
            apt_id = path.split("/")[-1]
            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length).decode("utf-8") if content_length > 0 else "{}"
            payload = json.loads(post_data)
            status = payload.get("status")

            for a in appointments:
                if a["id"] == apt_id:
                    if status:
                        a["status"] = status
                    self.send_json({"success": True, "appointment": a, "message": f"Appointment {apt_id} status updated."})
                    return
            self.send_json({"error": "Appointment not found"}, 404)
            return
        self.send_json({"error": "Not Found"}, 404)

    def do_DELETE(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        if path.startswith("/api/appointments/"):
            apt_id = path.split("/")[-1]
            for i, a in enumerate(appointments):
                if a["id"] == apt_id:
                    removed = appointments.pop(i)
                    self.send_json({"success": True, "message": f"Appointment {apt_id} cancelled.", "appointment": removed})
                    return
            self.send_json({"error": "Appointment not found"}, 404)
            return
        self.send_json({"error": "Not Found"}, 404)


if __name__ == "__main__":
    server_address = ("0.0.0.0", PORT)
    httpd = http.server.ThreadingHTTPServer(server_address, HospitalRequestHandler)
    print(f"Hospital Management Python Backend running at http://0.0.0.0:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        httpd.server_close()
