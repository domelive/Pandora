(async () => {
  try {
    const file = app.workspace.getActiveFile();
    if (!file) return new Notice("❌ No active file open.");

    const content = await app.vault.read(file);
    const cache = app.metadataCache.getFileCache(file);
    const fm = cache?.frontmatter || {};

    // Use today for last_reviewed and next_review calculation
    const today = new Date();
    const formatDate = (d) => d.toISOString().slice(0, 10);
    const lastReviewed = formatDate(today);
    const nextReview = formatDate(new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000));

    // Build YAML (fill missing fields if empty)
    const newYaml = [
      '---',
      `date: ${fm.date || lastReviewed}`,
      `course: ${fm.course || ""}`,
      `tags: ${Array.isArray(fm.tags) ? JSON.stringify(fm.tags).replace(/^\[|\]$/g, "") : fm.tags || "[lecture]"}`,
      `reviewed: true`,
      `last_reviewed: ${lastReviewed}`,
      `next_review: ${nextReview}`,
      '---',
      ''
    ].join("\n");

    // Replace YAML in note
    const hasYaml = /^---[\s\S]*?---/.test(content);
    let newContent = hasYaml ? content.replace(/^---[\s\S]*?---/, newYaml) : (newYaml + content);

    // Check the review task if present
    const fileName = file.basename;
    const reviewTaskPattern = new RegExp(`\\[ \\] Review \\[\\[${fileName}\\]\\]`);
    newContent = newContent.replace(reviewTaskPattern, `[x] Review [[${fileName}]]`);

    await app.vault.modify(file, newContent);

    new Notice(`✅ Marked reviewed. Next review: ${nextReview}`);
  } catch (err) {
    console.error(err);
    new Notice("❌ Error marking reviewed: " + (err.message || err));
  }
})();




