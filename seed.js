function seedSQL(){
 const q=[];const E=s=>"'"+String(s).replace(/'/g,"''")+"'";
 const dep=[["Cardiology","Block A"],["Neurology","Block B"],["Orthopedics","Block C"],["Pediatrics","Block A"],["Gynecology","Block D"],["General Medicine","Block E"]];
 dep.forEach((d,i)=>q.push(`INSERT INTO department VALUES(${i+1},${E(d[0])},${E(d[1])});`));
 const doc=[["Dr. Ananya Rao","Cardiologist",800,1],["Dr. Imran Qureshi","Interventional Cardiologist",1000,1],["Dr. Meera Nair","Neurologist",900,2],["Dr. Suresh Reddy","Neurosurgeon",1200,2],["Dr. Farah Siddiqui","Orthopedic Surgeon",700,3],["Dr. Karthik Varma","Sports Medicine",600,3],["Dr. Lakshmi Devi","Pediatrician",500,4],["Dr. Nazia Begum","Gynecologist",650,5],["Dr. Rohit Sharma","Physician",400,6],["Dr. Priya Menon","Physician",450,6]];
 doc.forEach((d,i)=>q.push(`INSERT INTO doctor VALUES(${i+1},${E(d[0])},${E(d[1])},'98480${10000+i*37}',${d[2]},${d[3]});`));
 const fn=["Aisha","Rahul","Sana","Vikram","Fatima","Arjun","Neha","Zoya","Kiran","Pooja","Imran","Divya","Sameer","Anjali","Yusuf","Meghana","Rohan","Hina","Sai","Lavanya","Faizan","Swathi","Tanvir","Bhavana","Omar"];
 const ln=["Khan","Reddy","Sharma","Begum","Rao","Naidu","Ali","Verma","Patel","Syed"];
 const bg=["A+","B+","O+","AB+","O-","A-","B-"],ar=["Abids","Tolichowki","Gachibowli","Secunderabad","Banjara Hills","Mehdipatnam","Kukatpally"];
 for(let i=0;i<25;i++)q.push(`INSERT INTO patient VALUES(${i+1},${E(fn[i]+" "+ln[(i*3)%10])},'${i%2?"M":"F"}','${1960+(i*7)%50}-0${1+i%9}-${10+i%18}','90000${20000+i*131}','${bg[i%7]}',${E(ar[i%7]+", Hyderabad")});`);
 const rs=["Chest pain","Migraine","Knee pain","Fever","Prenatal checkup","Routine checkup","Back pain","Headache","Cough and cold","Blood pressure"];
 const st=["Completed","Completed","Scheduled","Completed","Cancelled"];
 for(let i=0;i<40;i++){const m=1+(i%11),d=1+(i*5)%27;q.push(`INSERT INTO appointment VALUES(${i+1},${1+(i*7)%25},${1+(i*3)%10},'2026-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}','${st[i%5]}',${E(rs[i%10])});`);}
 const med=[["Paracetamol 500mg",12],["Amoxicillin 250mg",45],["Atorvastatin 10mg",60],["Ibuprofen 400mg",20],["Metformin 500mg",25],["Cetirizine 10mg",10],["Amlodipine 5mg",30],["Pantoprazole 40mg",35]];
 med.forEach((m,i)=>q.push(`INSERT INTO medicine VALUES(${i+1},${E(m[0])},${m[1]});`));
 for(let i=0;i<15;i++)q.push(`INSERT INTO prescription VALUES(${i+1},${1+(i*2)%40},${1+i%8},'${1+i%3} tablet(s) daily',${3+i%5*2});`);
 [["General",1500],["General",1500],["Private",3500],["Private",3500],["ICU",8000],["ICU",8000]].forEach((r,i)=>q.push(`INSERT INTO room VALUES(${i+1},'${r[0]}',${r[1]});`));
 for(let i=0;i<6;i++)q.push(`INSERT INTO admission VALUES(${i+1},${1+i*4},${1+i%6},'2026-0${1+i}-1${i}',${i<4?`'2026-0${1+i}-1${i+3}'`:"NULL"});`);
 q.push("UPDATE bill SET paid=1 WHERE bill_id%2=0;");
 return q.join("\n");
}
