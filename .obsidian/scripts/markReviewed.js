module.exports = async (tp) => {
  const today = tp.date.now("YYYY-MM-DD");
  const next = tp.date.now("YYYY-MM-DD", "+7d");

  await tp.file.replaceSection(0, 1, `---
date: ${tp.frontmatter.date}
course: ${tp.frontmatter.course}
tags: ${tp.frontmatter.tags}
reviewed: true
last_reviewed: ${today}
next_review: ${next}
---
`);
  new Notice("✅ Lecture marked as reviewed! Next review on " + next);
};

