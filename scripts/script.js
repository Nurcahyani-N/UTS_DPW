
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portofolio pribadi dan proyek saya">
    <title>Portofolio Saya</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header class="navbar">
        <a href="#beranda" class="logo">LOGO / Nama</a>

        <nav aria-label="Navigasi utama">
            <ul class="nav-menu">
                <li><a href="#beranda">Beranda</a></li>
                <li><a href="#tentang">Tentang</a></li>
                <li><a href="#proyek">Proyek</a></li>
                <li><a href="#kontak">Kontak</a></li>
                <li>
                    <button type="button" id="btn-tema" class="btn-tema">
                        Tema
                    </button>
                </li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero" id="beranda">
            <div class="foto-profil">
                <img src="assets/profil.jpg" alt="Foto profil saya">
            </div>

            <h1>Halo, Saya Nama Kamu</h1>
            <p class="subjudul">Mahasiswa dan Web Developer Pemula</p>

            <a href="#proyek" class="btn">Lihat Proyek</a>
        </section>

        <section class="section" id="tentang">
            <h2 class="section-title">Tentang Saya</h2>

            <div class="tentang-container">
                <div class="foto-tentang">
                    <img src="assets/tentang.jpg" alt="Foto tentang saya">
                </div>

                <div class="deskripsi">
                    <p>
                        Saya adalah mahasiswa yang tertarik pada teknologi,
                        desain, dan pengembangan website.
                    </p>

                    c

                    <button
                        type="button"
                        id="btn-selengkapnya"
                        class="btn"
                        aria-expanded="false"
                        aria-controls="detail-tentang"
                    >
                        Selengkapnya
                    </button>
                </div>
            </div>
        </section>

        <section class="section" id="proyek">
            <h2 class="section-title">Proyek / Keahlian</h2>

            <div class="proyek-container">
                <article class="proyek-card">
                    <img
                        src="assets/proyek1.jpg"
                        alt="Proyek website"
                        class="gambar-proyek"
                    >
                    <h3>Website Portofolio</h3>
                    <p>Website pribadi menggunakan HTML dan CSS.</p>
                </article>

                <article class="proyek-card">
                    <img
                        src="assets/proyek2.jpg"
                        alt="Proyek pemrograman"
                        class="gambar-proyek"
                    >
                    <h3>Aplikasi Pemrograman</h3>
                    <p>Proyek aplikasi untuk latihan pemrograman.</p>
                </article>

                <article class="proyek-card">
                    <img
                        src="assets/proyek3.jpg"
                        alt="Proyek desain"
                        class="gambar-proyek"
                    >
                    <h3>Desain Digital</h3>
                    <p>Desain visual untuk kebutuhan digital.</p>
                </article>
            </div>
        </section>

        <section class="section" id="kontak">
            <h2 class="section-title">Kontak</h2>

            <div class="kontak-container">
                <form id="form-kontak" class="form-kontak">
                    <label for="nama">Nama</label>
                    <input
                        type="text"
                        id="nama"
                        name="nama"
                        placeholder="Masukkan nama"
                        required
                    >

                    <label for="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Masukkan email"
                        required
                    >

                    <label for="pesan">Pesan</label>
                    <textarea
                        id="pesan"
                        name="pesan"
                        placeholder="Tulis pesan kamu"
                        required
                    ></textarea>

                    <button type="submit" class="btn">Kirim</button>
                    <p id="status-form" aria-live="polite"></p>
                </form>

                <aside class="info-kontak">
                    <h3>Informasi Kontak</h3>
                    <p>Email: emailkamu@example.com</p>
                    <p>Instagram: @username</p>
                    <p>GitHub: username</p>
                </aside>
            </div>
        </section>
    </main>

    <footer class="footer">
        <p>
            &copy; 2026 Nama Praktikan |
            <a href="https://github.com/">GitHub</a> |
            <a href="https://instagram.com/">Instagram</a>
        </p>
    </footer>
</body>
</html>
