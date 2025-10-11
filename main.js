// Memastikan Typed.js dan Feather Icons berfungsi
feather.replace();

// Logika JavaScript untuk Hamburger Menu
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark"); // Mengubah ikon dari burger ke 'X'
    navbar.classList.toggle("active"); // Menampilkan/Menyembunyikan menu
};

// Menutup menu saat link di klik
document.querySelectorAll(".navbar a").forEach((link) => {
    link.onclick = () => {
        if (navbar.classList.contains("active")) {
            menuIcon.classList.remove("fa-xmark");
            navbar.classList.remove("active");
        }
    };
});

// Contoh inisialisasi Typed.js (Perlu script Typed.js di-load di <head>)
var typed = new Typed(".text", {
    strings: ["Web Developer", "UI/UX Designer", "DevOps Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// Contoh untuk memicu animasi progress bar saat scroll (Tambahkan class 'animate' di sini)
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".bar").forEach((bar) => {
                    bar.classList.add("animate");
                });
            }
        });
    }, {
        threshold: 0.1
    }
);

document.querySelectorAll(".Technical-Skills").forEach((section) => {
    observer.observe(section);
});