
## Fix db:migrate error

I made a mistake while creating the model for Comment. So I destory the model using
```bash
$ rails destroy model comment
```

and re-created the Comment model. 

When I try to migrate the database, I got the following error

```
$ rails db:migrate
== 20201111115213 CreateComments: migrating ===================================
-- create_table(:comments)
rails aborted!
StandardError: An error has occurred, this and all later migrations canceled:

Caused by:
SQLite3::SQLException: table "comments" already exists
```

### Fix

open the db used in rails
```bash
$ rails db
```

use `.tables` command to list all tables.
```sql
sqlite> .tables
```

drop the tables you're having a confict with
```sql
sqlite> drop table [NAME OF THE TABLE];
```

and re run the migration command
```bash
$ rails db:migrate
```
