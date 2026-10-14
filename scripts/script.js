document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#form-kontak");
    const statusForm = document.querySelector("#status-form");

    if (form && statusForm) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nama = document.querySelector("#nama").value.trim();
            const email = document.querySelector("#email").value.trim();
            const pesan = document.querySelector("#pesan").value.trim();

            if (!nama || !email || !pesan) {
                statusForm.textContent = "Semua kolom wajib diisi.";
                return;
            }

            const riwayat = JSON.parse(
                localStorage.getItem("pesan-kontak") || "[]"
            );

            riwayat.push({
                nama: nama,
                email: email,
                pesan: pesan,
                tanggal: new Date().toISOString()
            });

            localStorage.setItem("pesan-kontak", JSON.stringify(riwayat));

            statusForm.textContent =
                `Terima kasih, ${nama}! Pesan berhasil disimpan.`;

            form.reset();
        });
    }
});