import React from 'react';
import './App.css';

import BadgeSkill from './BadgeSkill';
import KartuProfil from './KartuProfil';
import ItemMatkul from './ItemMatkul';
import KartuProyek from './KartuProyek';
import Sapaan from './Sapaan';

import fotoProfil from './assets/psyduck-avatar.jpg';

function App() {

  const daftarSkill = [
    { id: 1, nama: 'HTML & CSS', level: 'Menengah' },
    { id: 2, nama: 'JavaScript', level: 'Pemula' },
    { id: 3, nama: 'React JS', level: 'Pemula' },
    { id: 4, nama: 'Java', level: 'Pemula' },
    { id: 5, nama: 'SQL', level: 'Pemula' },
    { id: 6, nama: 'Git & GitHub', level: 'Pemula' }
  ];

  const daftarMatkul = [
    {
      id: 1,
      nama: 'Praktikum Pemrograman II',
      sks: 2,
      semester: 5
    },
    {
      id: 2,
      nama: 'Praktikum Sistem Berorientasi Objek',
      sks: 1,
      semester: 5
    },
    {
      id: 3,
      nama: 'Praktikum Web',
      sks: 2,
      semester: 5
    },
    {
      id: 4,
      nama: 'Praktikum Basis Data',
      sks: 1,
      semester: 5
    }
  ];

  const daftarProyek = [
    {
      id: 1,
      judul: 'Website Profil Mahasiswa',
      deskripsi:
        'Website portofolio pribadi untuk menampilkan identitas, keahlian, mata kuliah, dan proyek menggunakan React JS.',
      teknologi: ['React JS', 'JavaScript', 'CSS'],
      link: ''
    },
    {
      id: 2,
      judul: 'Sistem Informasi Pembayaran DPP',
      deskripsi:
        'Perancangan sistem informasi untuk membantu pengelolaan data dan proses pembayaran DPP mahasiswa.',
      teknologi: ['Analisis Sistem', 'Database', 'SQL'],
      link: ''
    },
    {
      id: 3,
      judul: 'Program Simulasi ATM',
      deskripsi:
        'Program simulasi mesin ATM menggunakan Java dengan penerapan konsep pemrograman berorientasi objek.',
      teknologi: ['Java', 'OOP'],
      link: ''
    },
    {
      id: 4,
      judul: 'Perancangan Database',
      deskripsi:
        'Perancangan basis data menggunakan tabel, relasi, constraint, dan perintah SQL untuk pengelolaan informasi.',
      teknologi: ['SQL Server', 'SQL', 'Database'],
      link: ''
    }
  ];

  return (
    <div className="app-container">

      <section className="section">
        <h2 className="section-title">
          Profil <span>Mahasiswa</span>
        </h2>

        <KartuProfil
          nama="Yoga"
          npm="243040025"
          kelas="Praktikum Web Kelas A"
          status="Aktif"
          fotoUrl={fotoProfil}
        />
      </section>

      <section className="section">
        <h2 className="section-title">
          Keahlian <span>Mahasiswa</span>
        </h2>

        <div className="skill-list">
          {daftarSkill.map((skill) => (
            <BadgeSkill
              key={skill.id}
              namaSkill={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">
          Mata Kuliah <span>Praktikum</span>
        </h2>

        <div className="subject-list">
          {daftarMatkul.map((matkul) => (
            <ItemMatkul
              key={matkul.id}
              nama={matkul.nama}
              sks={matkul.sks}
              semester={matkul.semester}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">
          Showcase <span>Portofolio Mini</span>
        </h2>

        <p
          style={{
            color: 'var(--text-muted)',
            marginBottom: '25px',
            lineHeight: '1.7'
          }}
        >
          Beberapa proyek dan hasil pembelajaran
          dalam bidang teknologi informasi.
        </p>

        <div className="project-list">
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

      <section
        className="section"
        style={{ textAlign: 'center' }}
      >
        <Sapaan />
      </section>

      <footer className="footer">
        <p>
          © 2026 Yoga | Praktikum Pemrograman Web
        </p>
      </footer>

    </div>
  );
}

export default App;