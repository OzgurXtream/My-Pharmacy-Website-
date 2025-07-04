document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  showSlide(current);

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4000);
});
function updateClock() {
  const now = new Date();

  // Saat
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

  // Tarih
  let day = now.getDate().toString().padStart(2, '0');
  let month = (now.getMonth() + 1).toString().padStart(2, '0'); // 0-index
  let year = now.getFullYear();
  document.getElementById('date').textContent = `${day}/${month}/${year}`;
}

// İlk çağrı + her saniyede bir güncelle
setInterval(updateClock, 1000);
updateClock();