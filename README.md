# MediCare Hospital Database (DBMS Case Study)

Case Study 1: Hospital Database | Database Management Systems, III Semester, Stanley College of Engineering & Technology for Women

**Team:** Arshiya Afreen, Maliha, Samreen Fatima | **Guide:** Dr. P. R. Anisha

A browser-based hospital database application. SQLite (sql.js) runs fully in the browser, so no server or installation is needed.

## Features
- 9 tables (department, doctor, patient, appointment, medicine, prescription, bill, room, admission) with PK, FK, UNIQUE and CHECK constraints
- 1 view, 2 indexes, 2 triggers (automatic bill generation)
- Pages: Dashboard, Patients, Doctors, Appointments, Billing, SQL Console (with COMMIT / ROLLBACK), Schema

## Run
Open `index.html` in any browser, or use the live link (GitHub Pages):
`https://<your-username>.github.io/hospital-database-dbms/`

## Files
| File | Purpose |
|---|---|
| `index.html` | Complete working application (schema + data + UI + SQLite engine) |
| `schema.sql` | CREATE TABLE, index, view and trigger statements |
| `seed.js` | Sample (fictitious) data generator |
| `queries.sql` | Sample SQL queries |
| `app_template.html`, `build.py` | Readable UI source and build script |
| `er_diagram.png`, `flow_chart.png`, `screenshot_*.png` | ER diagram, flow chart, screenshots |

All data is synthetic; no real patient information is used.
