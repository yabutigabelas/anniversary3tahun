// Tambahkan lebih banyak hati animasi
const heartAnimation = document.querySelector('.heart-animation');

function createHeart() {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.className = 'floating-heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);
