import json
t=open('tpl.html').read()
sq=open('../node_modules/sql.js/dist/sql-asm.js').read().replace('</script','<\\/script')
t=t.replace('/*SQLJS*/',sq).replace('/*SCHEMA*/',json.dumps(open('schema.sql').read())).replace('/*SEED*/',open('seed.js').read())
import os;os.makedirs('/mnt/user-data/outputs',exist_ok=True)
open('/mnt/user-data/outputs/hospital_db.html','w').write(t)
print(len(t))
