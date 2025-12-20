<script>
    function openActionSheet(urlDetail, urlBenefit) {
        const overlay = document.getElementById('overlay');
        const sheet = document.getElementById('actionSheet');

        // Tampilkan elemen dulu
        overlay.style.display = 'block';
        sheet.style.display = 'block';

        // Berikan jeda 10ms agar transisi CSS terbaca
        setTimeout(() => {
            overlay.classList.add('active');
            sheet.classList.add('active');
        }, 10);

        // Atur link tombol
        document.getElementById('btn-detail').onclick = () => window.location.href = urlDetail;
        document.getElementById('btn-benefit').onclick = () => window.location.href = urlBenefit;
    }

    function closeActionSheet() {
        const overlay = document.getElementById('overlay');
        const sheet = document.getElementById('actionSheet');

        overlay.classList.remove('active');
        sheet.classList.remove('active');

        // Sembunyikan elemen setelah animasi selesai (300ms)
        setTimeout(() => {
            overlay.style.display = 'none';
            sheet.style.display = 'none';
        }, 300);
    }
</script>