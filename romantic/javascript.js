// DATE
const months = ['January','February','March','April','May','June',
'July','August','September','October','November','December'];

const d = new Date();
document.getElementById('letter-date').textContent =
`${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;


// ✅ CUSTOM IMAGES
const photos = [
  { src: 'images/photo1.jpg', caption: 'Our first glance', r: '-2deg' },
  { src: 'images/photo2.jpg', caption: 'Where we walked', r: '2deg' },
  { src: 'images/photo3.jpg', caption: 'Your smile', r: '-3deg' },
  { src: 'images/photo4.jpg', caption: 'Together', r: '3deg' },
  { src: 'images/photo5.jpg', caption: 'Memories', r: '-1deg' },
  { src: 'images/photo6.jpg', caption: 'Late nights', r: '2.5deg' },
  { src: 'images/photo7.jpg', caption: 'Random laughs', r: '-2.5deg' },
  { src: 'images/photo8.jpg', caption: 'Us', r: '1.5deg' },
  { src: 'images/photo9.jpg', caption: 'Moments', r: '-1.5deg' },
  { src: 'images/photo10.jpg', caption: 'Forever', r: '3deg' }
];

const gallery = document.getElementById('gallery');

photos.forEach((p, i) => {
  const frame = document.createElement('div');
  frame.className = 'photo-frame';
  frame.style.transform = `rotate(${p.r})`;

  frame.innerHTML = `
  <img src="${p.src}" alt="${p.caption}" onclick="openLightbox('${p.src}')">
  <div class="photo-caption">${p.caption}</div>
`;

  gallery.appendChild(frame);
});


// MODAL
function openModal() {
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

function saveChanges() {
  const rec = document.getElementById('inp-recipient').value;
  const snd = document.getElementById('inp-sender').value;
  const msg = document.getElementById('inp-message').value;

  if (rec) document.getElementById('recipient-display').textContent = rec;
  if (snd) document.getElementById('sender-display').textContent = snd;
  if (msg) document.getElementById('para1').textContent = msg;

  closeModal();
}

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');

  img.src = src;
  lightbox.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

/* =========================================
   💜 FALLING PURPLE HEARTS
========================================= */

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let W, H, hearts = [];

function resizeCanvas() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// 💜 Heart particle
function Heart() {
  this.reset = function () {
    this.x = Math.random() * W;
    this.y = -10;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = 0.5 + Math.random() * 1;
    this.size = 8 + Math.random() * 8;
    this.alpha = 0.4 + Math.random() * 0.6;
    this.angle = Math.random() * Math.PI * 2;
    this.spin = (Math.random() - 0.5) * 0.05;
  };
  this.reset();
  this.y = Math.random() * H;
}

// 💜 Create hearts
for (let i = 0; i < 60; i++) {
  hearts.push(new Heart());
}

// 💜 Draw heart shape
function drawHeart(x, y, size, angle, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.globalAlpha = alpha;

  ctx.scale(size / 10, size / 10);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -3, -5, 0);
  ctx.bezierCurveTo(-5, 3, 0, 5, 0, 7);
  ctx.bezierCurveTo(0, 5, 5, 3, 5, 0);
  ctx.bezierCurveTo(5, -3, 0, -3, 0, 0);

  ctx.fillStyle = '#d8a7ff'; // 💜 light purple
  ctx.shadowColor = '#b57edc';
  ctx.shadowBlur = 12;

  ctx.fill();
  ctx.restore();
}

// 💜 Animation loop
function animateHearts() {
  ctx.clearRect(0, 0, W, H);

  hearts.forEach(h => {
    h.x += h.vx;
    h.y += h.vy;
    h.angle += h.spin;

    if (h.y > H + 10) h.reset();

    drawHeart(h.x, h.y, h.size, h.angle, h.alpha);
  });

  requestAnimationFrame(animateHearts);
}

animateHearts();
