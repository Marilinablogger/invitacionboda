// Contador regresivo
document.addEventListener("DOMContentLoaded", () => {
  const countdownElement = document.getElementById("countdown");
  const eventDate = new Date("2025-06-15T18:00:00"); // Fecha y hora del evento

  function updateCountdown() {
    const now = new Date();
    const timeDifference = eventDate - now;

    if (timeDifference <= 0) {
      countdownElement.textContent = "¡El evento ya comenzó!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Llama a la función inmediatamente para evitar el retraso inicial
});

// Galería de imágenes interactiva
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".galeria .imagenes img");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const src = image.getAttribute("src");
      const alt = image.getAttribute("alt");

      // Crear el modal
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${src}" alt="${alt}">
        </div>
      `;
      document.body.appendChild(modal);

      // Cerrar el modal
      modal.querySelector(".close").addEventListener("click", () => {
        modal.remove();
      });

      // Cerrar al hacer clic fuera del contenido
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.remove();
        }
      });
    });
  });
});

// Validación de formularios
document.addEventListener("DOMContentLoaded", () => {
  const rsvpForm = document.querySelector(".rsvp form");
  const messageForm = document.querySelector(".mensajes form");

  rsvpForm.addEventListener("submit", (e) => {
    const name = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      e.preventDefault();
      alert("Por favor, completa todos los campos para confirmar tu asistencia.");
    }
  });

  messageForm.addEventListener("submit", (e) => {
    const message = document.getElementById("mensaje").value.trim();

    if (!message) {
      e.preventDefault();
      alert("Por favor, escribe un mensaje antes de enviarlo.");
    }
  });
});
