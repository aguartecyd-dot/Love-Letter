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