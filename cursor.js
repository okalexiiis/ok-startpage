const searchInput = document.getElementById("searchInput");
const cursor = document.getElementById("blockCursor");
updateCursor();
searchInput.addEventListener("input", updateCursor);
searchInput.addEventListener("click", updateCursor);
searchInput.addEventListener("keyup", updateCursor);

function updateCursor() {
  // texto hasta la posición actual del caret
  const caretPos = searchInput.selectionStart;
  const text = searchInput.value.substring(0, caretPos);

  const span = document.createElement("span");
  span.style.visibility = "hidden";
  span.style.position = "absolute";
  span.style.whiteSpace = "pre";
  span.style.font = getComputedStyle(searchInput).font;
  span.textContent = text.replace(/ /g, "\u00A0"); // respeta espacios

  searchInput.parentNode.appendChild(span);
  const textWidth = span.getBoundingClientRect().width;
  span.remove();

  cursor.style.left = `${1 + textWidth}px`; // offset según tu padding
}
