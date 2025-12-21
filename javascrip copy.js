function openPopup() {
  document.getElementById("iosPopup").classList.add("active");
}

function closePopup() {
  document.getElementById("iosPopup").classList.remove("active");
}
function openPopup() {
  document.getElementById("iosPopup").classList.add("active");
}

function closePopup() {
  document.getElementById("iosPopup").classList.remove("active");
}

// Aksi tombol
function goDetail() {
  window.location.href = "detail-layanan.html";
}

function goBenefit() {
  window.location.href = "benefit.html";
}

function goDaftar() {
  window.location.href = "daftar.html";
}

function chatWA() {
  const nomor = "6285161808524";
  const pesan = encodeURIComponent(
    "Assalamu’alaikum, saya masih bingung terkait paket umrah. Mohon dibantu 🙏"
  );
  window.open(`https://wa.me/${nomor}?text=${pesan}`, "_blank");
}
