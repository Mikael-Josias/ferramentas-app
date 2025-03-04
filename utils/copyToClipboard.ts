export default function copyToClipboard(text: string): void {
  if (!navigator.clipboard) {
    console.error("Clipboard API not supported");
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => console.log("Text copied to clipboard!"))
    .catch((err) => console.error("Failed to copy text: ", err));
}
