---
type: dashboard
tags: [dashboard, projects]
---
## 🟢 Progetti Attivi
---
```dataview
table status, language, due-date, repo
from "03 Projects"
where type = "project" and status != "completed"
sort due-date asc
```

## 🟡 Idee Di Progetti
---
```dataview
table status, language, start-date, due-date
from "02 Projects"
where type = "project" and (status = "planned" or status = "idea")
sort start-date asc
```

## 🔵 Progetti Completati
---
```dataview
table language, start-date, due-date
from "02 Projects"
where type = "project" and status = "completed"
sort due-date desc
```

## 🧠 Lavorato Di Recente
---
```dataview
table status, language, due-date
from "Projects"
where type = "project"
sort file.mtime desc
limit 5
```
