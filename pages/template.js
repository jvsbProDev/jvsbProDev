// Tiny tag helpers: these preserve string interpolation without requiring Lit.
// Only put trusted, static markup into html templates (this is not an HTML sanitizer).
export const html = String.raw;
export const css = String.raw;

export function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}
