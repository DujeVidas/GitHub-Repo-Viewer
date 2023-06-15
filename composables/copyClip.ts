export function copyToClipboard(ssh: string) {
  const tempInput = document.createElement("input");
  tempInput.value = ssh;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
