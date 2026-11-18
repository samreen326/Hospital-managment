-- Sample queries for the Hospital Database (run in the SQL Console or any SQLite client)

-- Join: appointments with doctor and patient
SELECT p.name AS patient, d.name AS doctor, a.appt_date, a.status
FROM appointment a JOIN patient p ON a.patient_id=p.patient_id
JOIN doctor d ON a.doctor_id=d.doctor_id
ORDER BY a.appt_date LIMIT 15;

-- Aggregate: revenue per department
SELECT dep.name, COUNT(b.bill_id) bills, SUM(b.amount) revenue
FROM bill b JOIN appointment a USING(appt_id) JOIN doctor d USING(doctor_id) JOIN department dep USING(dept_id)
GROUP BY dep.name ORDER BY revenue DESC;

-- HAVING: doctors with 4+ appointments
SELECT d.name, COUNT(*) total FROM doctor d JOIN appointment a USING(doctor_id)
GROUP BY d.doctor_id HAVING COUNT(*)>=4;

-- Subquery: patients never admitted
SELECT name FROM patient WHERE patient_id NOT IN (SELECT patient_id FROM admission);

-- Subquery: fee above average
SELECT name, fee FROM doctor WHERE fee > (SELECT AVG(fee) FROM doctor);

-- Left join: patients with no appointment
SELECT p.name FROM patient p LEFT JOIN appointment a USING(patient_id) WHERE a.appt_id IS NULL;

-- Currently admitted patients
SELECT p.name, r.room_type, r.daily_rate, ad.admit_date FROM admission ad JOIN patient p USING(patient_id) JOIN room r USING(room_id) WHERE ad.discharge_date IS NULL;

-- Unpaid bills
SELECT * FROM bill WHERE paid=0;

-- Trigger demo: complete an appointment
UPDATE appointment SET status='Completed' WHERE status='Scheduled' AND appt_id=(SELECT MIN(appt_id) FROM appointment WHERE status='Scheduled');
SELECT * FROM bill ORDER BY bill_id DESC LIMIT 3;

-- Explain query plan (index usage)
EXPLAIN QUERY PLAN SELECT * FROM appointment WHERE doctor_id=3;

-- Constraint demo (fails: invalid gender)
INSERT INTO patient(name,gender,phone) VALUES('Test','X','1111111111');

