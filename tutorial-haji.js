let currentIndex = 0;
// Mengambil elemen slider dan semua titik (dots)
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

// Fungsi untuk memperbarui posisi slide dan warna dot
function updateSlider() {
    // Rumus dinamis agar lebar slide menyesuaikan jumlah foto
    const translateValue = currentIndex * (100 / totalSlides);
    slider.style.transform = `translateX(-${translateValue}%)`;
    
    // Mengatur class 'active' hanya pada dot yang terpilih
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Fungsi agar dot bisa diklik
function currentSlide(index) {
    currentIndex = index;
    updateSlider();
}

// Menjalankan slide otomatis ke kiri setiap 5 detik
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}, 5000);

/* --- Fungsi Popup Tutorial Daftar --- */
function toggleTutorialPopup(event) {
    event.preventDefault();
    const popup = document.getElementById('tutorial-popup');
    
    if (popup.classList.contains('active')) {
        closeTutorialPopup();
    } else {
        popup.style.display = 'block';
        // Delay sedikit agar browser sempat mendeteksi display:block sebelum animasi
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
    }
}

function closeTutorialPopup() {
    const popup = document.getElementById('tutorial-popup');
    popup.classList.remove('active');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Harus sama dengan durasi transition di CSS
}

// Menutup popup secara otomatis jika klik di luar area popup
window.addEventListener('click', function(e) {
    const popup = document.getElementById('tutorial-popup');
    const trigger = document.querySelector('[onclick="toggleTutorialPopup(event)"]');
    
    if (popup && !popup.contains(e.target) && e.target !== trigger) {
        closeTutorialPopup();
    }
});

/* --- Fungsi Popup Layanan Kami --- */
function toggleLayananPopup(event) {
    event.preventDefault();
    const popup = document.getElementById('layanan-popup'); // Mengambil ID layanan
    
    if (popup.classList.contains('active')) {
        closeLayananPopup();
    } else {
        // Tutup popup lain dulu agar tidak tumpang tindih (opsional)
        closeTutorialPopup(); 
        
        popup.style.display = 'block';
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
    }
}




function closeLayananPopup() {
    const popup = document.getElementById('layanan-popup');
    if(popup) {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
}

/* --- Update Event Listener Klik Luar --- */
// Ubah bagian penutup otomatis agar mengenali kedua popup
window.addEventListener('click', function(e) {
    const tutPopup = document.getElementById('tutorial-popup');
    const layPopup = document.getElementById('layanan-popup');
    
    // Jika klik di luar Tutorial
    if (tutPopup && !tutPopup.contains(e.target) && !e.target.innerText.includes("Tutorial")) {
        closeTutorialPopup();
    }
    // Jika klik di luar Layanan
    if (layPopup && !layPopup.contains(e.target) && !e.target.innerText.includes("Layanan")) {
        closeLayananPopup();
    }
});



/* --- Fungsi Popup Produk Kami --- */
function toggleProdukPopup(event) {
    event.preventDefault();
    const popup = document.getElementById('produk-popup');
    
    if (popup.classList.contains('active')) {
        closeProdukPopup();
    } else {
        // Tutup popup lain agar tidak tumpuk
        closeTutorialPopup();
        closeLayananPopup();
        
        popup.style.display = 'block';
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
    }
}

function closeProdukPopup() {
    const popup = document.getElementById('produk-popup');
    if(popup) {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
}

/* --- Update Event Listener Klik Luar (Versi Lengkap) --- */
window.addEventListener('click', function(e) {
    const tutPopup = document.getElementById('tutorial-popup');
    const layPopup = document.getElementById('layanan-popup');
    const proPopup = document.getElementById('produk-popup');
    
    // Tutup Tutorial jika klik di luar
    if (tutPopup && !tutPopup.contains(e.target) && !e.target.innerText.includes("Tutorial")) {
        closeTutorialPopup();
    }
    // Tutup Layanan jika klik di luar
    if (layPopup && !layPopup.contains(e.target) && !e.target.innerText.includes("Layanan")) {
        closeLayananPopup();
    }
    // Tutup Produk jika klik di luar
    if (proPopup && !proPopup.contains(e.target) && !e.target.innerText.includes("Produk")) {
        closeProdukPopup();
    }
});




/* --- Fungsi Popup Kerja Sama --- */
function toggleKerjasamaPopup(event) {
    event.preventDefault();
    const popup = document.getElementById('kerjasama-popup');
    
    if (popup.classList.contains('active')) {
        closeKerjasamaPopup();
    } else {
        // Tutup semua popup lain agar tidak tumpuk
        closeTutorialPopup();
        closeLayananPopup();
        closeProdukPopup();
        
        popup.style.display = 'block';
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
    }
}

function closeKerjasamaPopup() {
    const popup = document.getElementById('kerjasama-popup');
    if(popup) {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
}

/* --- Update Event Listener Klik Luar (Versi Final untuk 4 Menu) --- */
window.addEventListener('click', function(e) {
    const tutPopup = document.getElementById('tutorial-popup');
    const layPopup = document.getElementById('layanan-popup');
    const proPopup = document.getElementById('produk-popup');
    const kerPopup = document.getElementById('kerjasama-popup');
    
    // Tutup Tutorial
    if (tutPopup && !tutPopup.contains(e.target) && !e.target.innerText.includes("Tutorial")) {
        closeTutorialPopup();
    }
    // Tutup Layanan
    if (layPopup && !layPopup.contains(e.target) && !e.target.innerText.includes("Layanan")) {
        closeLayananPopup();
    }
    // Tutup Produk
    if (proPopup && !proPopup.contains(e.target) && !e.target.innerText.includes("Produk")) {
        closeProdukPopup();
    }
    // Tutup Kerja Sama
    if (kerPopup && !kerPopup.contains(e.target) && !e.target.innerText.includes("Kerja Sama")) {
        closeKerjasamaPopup();
    }
});

/* --- Fungsi Popup Support or Sponsor --- */
function toggleSupportPopup(event) {
    event.preventDefault();
    const popup = document.getElementById('support-popup');
    
    if (popup.classList.contains('active')) {
        closeSupportPopup();
    } else {
        // Menutup semua popup lain yang mungkin sedang terbuka
        closeTutorialPopup();
        closeLayananPopup();
        closeProdukPopup();
        closeKerjasamaPopup();
        
        popup.style.display = 'block';
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
    }
}

function closeSupportPopup() {
    const popup = document.getElementById('support-popup');
    if(popup) {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
}



/* --- Update Event Listener Klik Luar (Versi Final 5 Menu) --- */
window.addEventListener('click', function(e) {
    const tutPopup = document.getElementById('tutorial-popup');
    const layPopup = document.getElementById('layanan-popup');
    const proPopup = document.getElementById('produk-popup');
    const kerPopup = document.getElementById('kerjasama-popup');
    const supPopup = document.getElementById('support-popup');
    
    const popups = [
        { el: tutPopup, close: closeTutorialPopup, text: "Tutorial" },
        { el: layPopup, close: closeLayananPopup, text: "Layanan" },
        { el: proPopup, close: closeProdukPopup, text: "Produk" },
        { el: kerPopup, close: closeKerjasamaPopup, text: "Kerja Sama" },
        { el: supPopup, close: closeSupportPopup, text: "Support" }
    ];

    popups.forEach(item => {
        if (item.el && !item.el.contains(e.target) && !e.target.innerText.includes(item.text)) {
            item.close();
        }
    });
});


function toggleContactPopup(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const popup = document.getElementById('contact-popup');
    
    if (popup.classList.contains('active')) {
        popup.classList.remove('active');
        setTimeout(() => { 
            popup.style.display = 'none'; 
        }, 300);
    } else {
        // Sembunyikan popup lain jika ada yang terbuka
        popup.style.display = 'block';
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
    }
}

// Menutup popup jika klik di mana saja selain di dalam popup
window.addEventListener('click', function(e) {
    const popup = document.getElementById('contact-popup');
    const btn = document.querySelector('.floating-contact');
    
    if (popup && popup.classList.contains('active')) {
        if (!popup.contains(e.target) && !btn.contains(e.target)) {
            popup.classList.remove('active');
            setTimeout(() => { popup.style.display = 'none'; }, 300);
        }
    }
});