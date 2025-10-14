---
tags:
  - dashboard
course: Basi Di Dati
---
## 🧩 Overview
---
```dataviewjs
// This script counts how many lecture notes exist in this course’s "Lectures" subfolder.

const folder = dv.current().file.folder;  // e.g. "02 Courses/Anno III/Basi Di Dati"
const lecturesPath = folder + "/Lectures"; 
const pages = dv.pages('"' + lecturesPath + '"');  // <- quotes are critical
dv.paragraph("**Total lectures:** " + pages.length);
dv.paragraph("**Last updated:** " + (new Date()).toLocaleString());
```
## 🕓 Lectures Da Revisionare
---
```dataview
table file.link as "Lecture", date
from "02 Courses/Anno III/Basi Di Dati/Lectures"
where reviewed = false
sort date asc
```

## ✅ Lectures Revisionate
---
```dataview
table file.link as "Lecture", date
from "02 Courses/Anno III/Basi Di Dati/Lectures"
where reviewed = true
sort date asc
```

## 🗒️ Tasks Da Fare
---
```dataview
task from "02 Courses/Anno III/Basi Di Dati/Lectures"
where !completed
sort due asc
```
