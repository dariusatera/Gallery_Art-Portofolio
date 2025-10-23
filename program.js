document.addEventListener("DOMContentLoaded", function () {
  //Ambil SEMUA elemen yang butuh rotasi fluid ---
  const teksNama = document.getElementById("teks-nama-fluid");
  const teksArt = document.getElementById("teks-art-fluid");
  const teksBiasa = document.getElementById("teks-biasa-fluid");
  const teksBiasa2 = document.getElementById("teks-biasa2-fluid");
  const teksBiasa3 = document.getElementById("teks-biasa3-fluid");

  // Buat SATU fungsi untuk mengurus SEMUA rotasi ---
  function updateFluidRotations() {
    const maxWidth = 1200; // Lebar maks
    const minWidth = 360; // Lebar min

    // Dapatkan lebar layar saat ini
    const screenWidth = window.innerWidth;

    // Hitung persentase progres (0.0 sampai 1.0)
    let percent = (screenWidth - minWidth) / (maxWidth - minWidth);
    percent = Math.max(0, Math.min(1, percent));

    // --- Logika untuk .teks-nama ---
    if (teksNama) {
      const maxWidthNama = 800; // Rotasi akan mulai miring di 800px
      const minWidthNama = 360; // Rotasi akan mentok miring di 360px

      // Hitung persentase BARU khusus untuk elemen ini
      let percentNama =
        (screenWidth - minWidthNama) / (maxWidthNama - minWidthNama);
      percentNama = Math.max(0, Math.min(1, percentNama));

      const maxRotNama = -17; // Kemiringan di 800px (landai)
      const minRotNama = -21; // Kemiringan di 360px (curam)

      const rotationNama = minRotNama + (maxRotNama - minRotNama) * percentNama;
      teksNama.style.transform = `rotate(${rotationNama}deg)`;
    }

    if (teksArt) {
      const maxRotArt = -66; // Kemiringan di layar LEBAR (1200px)
      const minRotArt = -67; // Kemiringan di layar KECIL (360px) (lebih miring)

      const rotationArt = minRotArt + (maxRotArt - minRotArt) * percent;
      teksArt.style.transform = `rotate(${rotationArt}deg)`;
    }

    if (teksBiasa) {
      const maxWidthBiasa = 800; // Rotasi akan mulai miring di 800px
      const minWidthBiasa = 360; // Rotasi akan mentok miring di 360px

      let percentBiasa =
        (screenWidth - minWidthBiasa) / (maxWidthBiasa - minWidthBiasa);
      percentBiasa = Math.max(0, Math.min(1, percentBiasa));

      const maxRotBiasa = -17; // Kemiringan di 800px (landai)
      const minRotBiasa = -21; // Kemiringan di 360px (curam)

      const rotationBiasa =
        minRotBiasa + (maxRotBiasa - minRotBiasa) * percentBiasa;
      teksBiasa.style.transform = `rotate(${rotationBiasa}deg)`;
    }

    if (teksBiasa2) {
      const maxWidthBiasa2 = 800;
      const minWidthBiasa2 = 360;

      let percentBiasa2 =
        (screenWidth - minWidthBiasa2) / (maxWidthBiasa2 - minWidthBiasa2);
      percentBiasa2 = Math.max(0, Math.min(1, percentBiasa2));

      const maxRotBiasa2 = -17; // Kemiringan di 800px (landai)
      const minRotBiasa2 = -20; // Kemiringan di 360px (curam)

      const rotationBiasa2 =
        minRotBiasa2 + (maxRotBiasa2 - minRotBiasa2) * percentBiasa2;
      teksBiasa2.style.transform = `rotate(${rotationBiasa2}deg)`;
    }

    if (teksBiasa3) {
      const maxWidthBiasa3 = 800;
      const minWidthBiasa3 = 360;
      let percentBiasa3 =
        (screenWidth - minWidthBiasa3) / (maxWidthBiasa3 - minWidthBiasa3);
      percentBiasa3 = Math.max(0, Math.min(1, percentBiasa3));

      // Atur kemiringan min/max untuk elemen ini
      const maxRotBiasa3 = -17; // Kemiringan di 800px (landai)
      const minRotBiasa3 = -24; // Kemiringan di 360px (curam)

      const rotationBiasa3 =
        minRotBiasa3 + (maxRotBiasa3 - minRotBiasa3) * percentBiasa3;
      teksBiasa3.style.transform = `rotate(${rotationBiasa3}deg)`;
    }
  }

  // Jalankan fungsi saat pertama kali halaman dimuat ---
  updateFluidRotations();

  // Jalankan fungsi SETIAP KALI jendela di-resize ---
  window.addEventListener("resize", updateFluidRotations);
});
