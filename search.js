document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");

  // Focus automático
  searchInput.focus();

  // Buscar al presionar Enter
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const query = this.value.trim();
      if (query) {
        window.open(
          `https://www.google.com/search?q=${encodeURIComponent(query)}`,
          "_self"
        );
      }
    }
  });
});
