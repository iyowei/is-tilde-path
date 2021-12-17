export default function isVirtualRoot(path) {
  return path.startsWith("~/");
}
