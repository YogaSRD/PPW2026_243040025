
import './App.css';

import Sapaan from './Sapaan';
import KartuProfil from './KartuProfil';
import BadgeSkill from './BadgeSkill';
import ItemMatkul from './ItemMatkul';
import KartuProyek from './KartuProyek';

function App() {

  const daftarMatkul = [
    {
      id: 1,
      nama: "Pemrograman Web",
      sks: 3,
      semester: 5
    },
    {
      id: 2,
      nama: "Basis Data",
      sks: 3,
      semester: 5
    },
    {
      id: 3,
      nama: "Rekayasa Perangkat Lunak",
      sks: 3,
      semester: 5
    },
    {
      id: 4,
      nama: "Interaksi Manusia dan Komputer",
      sks: 2,
      semester: 5
    }
  ];

  const daftarProyek = [
    {
      id: 1,
      judul: "Website Profil Pribadi",
      deskripsi: "Website sederhana untuk menampilkan informasi dan profil pribadi menggunakan HTML dan CSS.",
      teknologi: ["HTML", "CSS"],
      link: "https://github.com/YogaSRD/NAMA-REPOSITORY-1"
    },
    {
      id: 2,
      judul: "Sistem Informasi Database",
      deskripsi: "Perancangan database untuk menyimpan dan mengelola informasi secara terstruktur.",
      teknologi: ["SQL", "Database"],
      link: "https://github.com/YogaSRD/NAMA-REPOSITORY-2"
    },
    {
      id: 3,
      judul: "Aplikasi React",
      deskripsi: "Aplikasi frontend menggunakan React dengan komponen yang dapat digunakan kembali.",
      teknologi: ["React", "JavaScript"],
      link: "https://github.com/YogaSRD/NAMA-REPOSITORY-3"
    },
    {
      id: 4,
      judul: "Game Sederhana",
      deskripsi: "Permainan sederhana yang menggunakan JavaScript untuk mengatur interaksi pengguna.",
      teknologi: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/YogaSRD/NAMA-REPOSITORY-4"
    }
  ];

  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '0 24px',
      fontFamily: 'Arial, sans-serif'
    }}>

      <header style={{
        textAlign: 'center',
        marginBottom: '32px'
      }}>
        <h1>Praktikum Pemrograman Web</h1>
        <p>Portofolio Mahasiswa Informatika</p>
      </header>

      <section style={{ marginBottom: '32px' }}>
        <h2>Profil Mahasiswa Praktikan</h2>

        <KartuProfil
          nama="Yoga"
          npm="243040025"
          kelas="IF - Praktikum"
          status="Aktif"
        />
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2>Keahlian Mahasiswa</h2>

        <BadgeSkill
          namaSkill="JavaScript"
          level="Pemula"
        />

        <BadgeSkill
          namaSkill="React"
          level="Pemula"
        />

        <BadgeSkill
          namaSkill="HTML & CSS"
          level="Menengah"
        />
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2>Daftar Mata Kuliah</h2>

        {daftarMatkul.map((matkul) => (
          <ItemMatkul
            key={matkul.id}
            nama={matkul.nama}
            sks={matkul.sks}
            semester={matkul.semester}
          />
        ))}
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2>Showcase Portofolio Mini</h2>

        <p>
          Berikut adalah contoh proyek pengembangan
          aplikasi dalam bidang teknologi informasi.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '18px'
        }}>
          {daftarProyek.map((proyek) => (
            <KartuProyek
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              link={proyek.link}
            />
          ))}
        </div>
      </section>

      <div style={{
        textAlign: 'center',
        marginTop: '35px',
        marginBottom: '35px'
      }}>
        <Sapaan />
      </div>

    </div>
  );
}

export default App;
