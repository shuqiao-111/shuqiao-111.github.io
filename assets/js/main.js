const copyButton = document.getElementById("copy-bibtex");
const bibtex = document.getElementById("bibtex");
const status = document.getElementById("copy-status");

if (copyButton && bibtex && status) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bibtex.innerText);
      status.textContent = "BibTeX copied.";
      setTimeout(() => (status.textContent = ""), 2200);
    } catch (error) {
      status.textContent = "Copy failed. Please copy manually.";
    }
  });
}
