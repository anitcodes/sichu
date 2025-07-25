// Sticky note pop-in animation on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.note').forEach((note, i) => {
    note.style.opacity = 0;
    note.style.transform = 'scale(0.7) rotate(-8deg)';
    setTimeout(() => {
      note.style.transition = 'opacity 0.5s, transform 0.5s';
      note.style.opacity = 1;
      note.style.transform = 'scale(1) rotate(' + (Math.random() * 6 - 3) + 'deg)';
    }, 200 + i * 180);
  });
});

// Confetti animation
function createConfetti() {
  const colors = ['#FFF9B0', '#C9E8F2', '#F6C2F3', '#fff', '#111'];
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  for (let i = 0; i < 32; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.animationDelay = (Math.random() * 2) + 's';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.top = (Math.random() * 10) + 'vh';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.appendChild(piece);
  }
  document.body.appendChild(confetti);
}

// Contact form validation
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();
    let valid = true;
    if (!name) valid = false;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) valid = false;
    if (!message) valid = false;
    if (!valid) {
      e.preventDefault();
      alert('Please fill out all fields with a valid email.');
    }
  });
}

// Project card pop/tilt
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;
    card.style.transform = `scale(1.06) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = '0 16px 48px #F6C2F3cc, 0 2px 8px #FFF9B0';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});

// Hand-drawn border for contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.style.border = '3px solid #C9E8F2';
  contactForm.style.borderRadius = '18px';
  contactForm.style.boxShadow = '0 4px 24px #F6C2F355, 0 1.5px 0 #fff inset';
  contactForm.style.position = 'relative';
  contactForm.style.background = 'rgba(255,255,255,0.95)';
} 