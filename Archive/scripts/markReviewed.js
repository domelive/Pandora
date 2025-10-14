module.exports = async (tp) => {
  const today = tp.date.now("YYYY-MM-DD");
  const next = tp.date.now("YYYY-MM-DD", "+7d");

  const fm = tp.frontmatter;

  let yamlBlock = `---\n`;
  yamlBlock += `date: ${fm.date || ""}\n`;
  yamlBlock += `course: ${fm.course || ""}\n`;
  yamlBlock += `tags: ${fm.tags || "[lecture]"}\n`;
  yamlBlock += `reviewed: true\n`;
  yamlBlock += `last_reviewed: ${today}\n`;
  yamlBlock += `next_review: ${next}\n`;
  yamlBlock += `---\n`;

  await tp.file.replaceSection(0, 1, yamlBlock);
  new Notice(`✅ Lecture marked as reviewed! Next review on ${next}`);
};
