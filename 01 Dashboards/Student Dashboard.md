## 🧩 Corsi Attivi
---
```dataview
list from "02 Courses"
where contains(file.name, "Dashboard")
```
## 📚 Lectures Recenti
---
```dataview
table course, file.link as "Lecture Note", date
from "02 Courses"
where contains(tags, "lecture")
sort date desc
limit 10
```
## 📊  Lectures Da Revisionare
---
```dataview
table course, file.link as "Lecture", date
from "02 Courses"
where reviewed = false
sort date asc
```

## 📅 Tasks Da Fare
---
```dataview
task
from "02 Courses"
where !completed
sort due asc
limit 10
```
