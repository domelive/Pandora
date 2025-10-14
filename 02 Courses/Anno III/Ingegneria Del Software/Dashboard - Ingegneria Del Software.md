---
tags:
  - dashboard
course: Ingegneria Del Software
---
## 🧩 Overview
---
```dataviewjs
// This script counts how many lecture notes exist in this course’s "Lectures" subfolder.

const folder = dv.current().file.folder;  // e.g. "02 Courses/Anno III/Basi Di Dati"
const lecturesPath = folder + "/Lectures"; 
const pages = dv.pages('"' + lecturesPath + '"');  // <- quotes are critical
dv.paragraph("***Total lectures:*** " + pages.length);
dv.paragraph("***Last updated:*** " + (new Date()).toLocaleString());
```
## 🕓 Lectures to Review
---
```dataview
table file.link as "Lecture", date
from "02 Courses/Anno III/Ingegneria Del Software/Lectures"
where reviewed = false
sort date asc
```

## ✅ Reviewed Lectures
---
```dataview
table file.link as "Lecture", date
from "02 Courses/Anno III/Ingegneria Del Software/Lectures"
where reviewed = true
sort date asc
```

## 🗒️ Tasks
---
```dataview
task from "02 Courses/Anno III/Ingegneria Del Software/Lectures"
where !completed
sort due asc
```
