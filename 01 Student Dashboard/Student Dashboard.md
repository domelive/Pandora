# 🧩 Active Courses
---
```dataview
list from "02 Courses"
where contains(file.name, "Dashboard")
```
## 🕓 Lectures Needing Review Soon
---
```dataview
table course, file.link as "Lecture", next_review as "Next Review"
from "02 Courses"
where reviewed = true and next_review <= date(today)
sort next_review asc
```

## 📚 Recent Lectures
---
```dataview
table course, file.link as "Lecture Note", date
from "02 Courses"
where contains(tags, "lecture")
sort date desc
limit 10
```

## 📅 Upcoming Tasks
---

```dataview
task
from "02 Courses"
where !completed
sort due asc
limit 10
```
