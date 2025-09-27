const totalImages = 10;
const formats = ["png", "jpg"];

// Recuperar la última imagen de localStorage
let lastImage = localStorage.getItem("lastImage") || null;

function getRandomImage() {
  let src;
  do {
    const number = Math.floor(Math.random() * totalImages) + 1;
    const format = formats[Math.floor(Math.random() * formats.length)];
    src = `/assets/image-${number}.${format}`;
  } while (src === lastImage); // Evita repetir la última imagen
  return src;
}

function setRandomImage() {
  const src = getRandomImage();
  const img = new Image();
  img.src = src;

  img.onload = () => {
    lastImage = src;
    localStorage.setItem("lastImage", src); // Guardar para la próxima recarga
    document.querySelectorAll(".profile-image").forEach((i) => (i.src = src));
    document.documentElement.style.setProperty("--bg-image", `url("${src}")`);
  };

  img.onerror = () => {
    setRandomImage(); // Intentar otra si falla
  };
}

// Ejecutar al cargar
setRandomImage();
