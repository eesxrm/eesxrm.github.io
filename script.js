document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('thank-you-modal');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Show modal
      modal.style.display = 'flex';
  
      // Reset form
      form.reset();
  
      // Confetti burst
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    });
  });
  
  function closeModal() {
    const modal = document.getElementById('thank-you-modal');
    modal.style.display = 'none';
  }
  
