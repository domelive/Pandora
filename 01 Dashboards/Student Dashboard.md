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
## 📊  Lectures Da Revisionare Presto
---
```dataview
table file.link as "Note", type, next_review, reviewed
from "02 Courses"
where next_review and date(next_review) <= date(today) + dur(7 days)
sort next_review asc
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
