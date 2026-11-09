import { useEffect, useState } from 'react';
import './App.css';

import FormTransaksi from './FormTransaksi';
import RingkasanSaldo from './RingkasanSaldo';
import DaftarTransaksi from './DaftarTransaksi';

function App() {
  // Mengambil data transaksi dari localStorage saat aplikasi pertama dibuka
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem('catatan-keuangan');

    if (dataTersimpan) {
      try {
        return JSON.parse(dataTersimpan);
      } catch {
        return [];
      }
    }

    return [];
  });

  // Menyimpan data transaksi setiap kali state berubah
  useEffect(() => {
    localStorage.setItem(
      'catatan-keuangan',
      JSON.stringify(daftarTransaksi)
    );
  }, [daftarTransaksi]);

  // Menambahkan transaksi baru
  const tambahTransaksi = (transaksiBaru) => {
    setDaftarTransaksi([...daftarTransaksi, transaksiBaru]);
  };

  // Menghapus transaksi berdasarkan ID
  const hapusTransaksi = (id) => {
    setDaftarTransaksi(
      daftarTransaksi.filter((transaksi) => transaksi.id !== id)
    );
  };

  // Menghitung total pemasukan
  const totalPemasukan = daftarTransaksi
    .filter((transaksi) => transaksi.jenis === 'pemasukan')
    .reduce((total, transaksi) => total + Number(transaksi.nominal), 0);

  // Menghitung total pengeluaran
  const totalPengeluaran = daftarTransaksi
    .filter((transaksi) => transaksi.jenis === 'pengeluaran')
    .reduce((total, transaksi) => total + Number(transaksi.nominal), 0);

  // Menghitung saldo akhir
  const saldo = totalPemasukan - totalPengeluaran;

  return (
    <main className="wadah">
      <header className="header">
        <p className="label-aplikasi">PERSONAL FINANCE</p>
        <h1>Catatan Keuangan</h1>
        <p className="subjudul">
          Kelola pemasukan dan pengeluaranmu dengan mudah.
        </p>
      </header>

      <RingkasanSaldo
        saldo={saldo}
        totalPemasukan={totalPemasukan}
        totalPengeluaran={totalPengeluaran}
      />

      <FormTransaksi onTambah={tambahTransaksi} />

      <DaftarTransaksi
        daftarTransaksi={daftarTransaksi}
        onHapus={hapusTransaksi}
      />
    </main>
  );
}

export default App;