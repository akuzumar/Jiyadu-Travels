/* =========================================
   POPUP DINAMIS – 1 PAKET = 4 HALAMAN
========================================= */

function openActionSheet(links) {
    const overlay = document.getElementById('overlay');
    const sheet = document.getElementById('actionSheet');

    overlay.style.display = 'block';
    sheet.style.display = 'block';

    requestAnimationFrame(() => {
        overlay.classList.add('active');
        sheet.classList.add('active');
    });

    document.getElementById('btn-detail').onclick = () => {
        window.location.href = links.detail;
    };

    document.getElementById('btn-benefit').onclick = () => {
        window.location.href = links.benefit;
    };

    document.getElementById('btn-daftar').onclick = () => {
        window.location.href = links.daftar;
    };

    // PERUBAHAN DI SINI:
    // Menggunakan window.open agar WhatsApp terbuka di tab baru (_blank)
    // sehingga halaman utama & popup tidak hilang/tertutup.
    document.getElementById('btn-konsultasi').onclick = () => {
    window.open(links.konsultasi, '_blank');
};
}