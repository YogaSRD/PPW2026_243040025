import { useState } from 'react';

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('pemasukan');
  const [galat, setGalat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const angkaNominal = Number(nominal);

    if (!keterangan.trim()) {
      setGalat('Keterangan transaksi harus diisi.');
      return;
    }

    if (!nominal || !Number.isFinite(angkaNominal) || angkaNominal <= 0) {
      setGalat('Nominal harus berupa angka lebih dari 0.');
      return;
    }

    onTambah({
      id: Date.now(),
      keterangan: keterangan.trim(),
      nominal: angkaNominal,
      jenis: jenis,
    });

    setKeterangan('');
    setNominal('');
    setJenis('pemasukan');
    setGalat('');
  };

  return (
    <section className="panel">
      <h2>Tambah Transaksi</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="keterangan">Keterangan</label>
          <input
            id="keterangan"
            type="text"
            placeholder="Contoh: Uang makan"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="nominal">Nominal (Rp)</label>
          <input
            id="nominal"
            type="number"
            min="1"
            placeholder="Contoh: 50000"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="jenis">Jenis Transaksi</label>
          <select
            id="jenis"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
          >
            <option value="pemasukan">Pemasukan</option>
            <option value="pengeluaran">Pengeluaran</option>
          </select>
        </div>

        {galat && <p className="galat">{galat}</p>}

        <button type="submit" className="tombol-tambah">
          + Tambah Transaksi
        </button>
      </form>
    </section>
  );
}

export default FormTransaksi;