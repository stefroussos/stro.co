export function capitalize(string: string) {
  return string.replace(/\b\w/g, l => l.toUpperCase())
}