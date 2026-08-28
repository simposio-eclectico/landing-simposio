/**
 * Extract first N words from text, removing markdown syntax
 */
export function getExcerpt(text: string, wordCount: number = 25): string {
  // Remove markdown headings, links, images, bold, italic, code
  let cleaned = text
    .replace(/^#+\s+/gm, '') // Remove headings
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links but keep text
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic
    .replace(/__([^_]+)__/g, '$1') // Remove bold underscore
    .replace(/_([^_]+)_/g, '$1') // Remove italic underscore
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .replace(/^> /gm, '') // Remove blockquote markers
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  // Split into words and take first N
  const words = cleaned.split(/\s+/).slice(0, wordCount);
  const excerpt = words.join(' ');

  // Add ellipsis if text was truncated
  if (words.length < cleaned.split(/\s+/).length) {
    return excerpt + '...';
  }

  return excerpt;
}
