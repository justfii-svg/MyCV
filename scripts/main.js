// Pilih elemen yang kita butuhkan dari HTML
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Tambahkan "event listener" untuk 'click' pada tombol hamburger
hamburgerMenu.addEventListener('click', () => {
    // Toggle (tambah/hapus) class 'active' pada nav-links
    navLinks.classList.toggle('active');
});
// --- Kode untuk Efek Jejak Kursor (Cursor Trail) ---

const numTrails = 20;
const trails = [];
const delay = 15;

for (let i = 0; i < numTrails; i++) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
    trails.push(trail);
}

let mouseX = -100;
let mouseY = -100;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTrails() {
    let targetX = mouseX;
    let targetY = mouseY;

    trails.forEach((trail, index) => {
        trail.style.transform = `translate(${targetX - (trail.offsetWidth / 2)}px, ${targetY - (trail.offsetHeight / 2)}px)`;
        trail.classList.add('active');

        const currentPos = trail.getBoundingClientRect();
        targetX = currentPos.left + currentPos.width / 2;
        targetY = currentPos.top + currentPos.height / 2;
    });

    requestAnimationFrame(animateTrails);
}

animateTrails();