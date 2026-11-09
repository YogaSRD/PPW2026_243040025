function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(angka);
}

function RingkasanSaldo({ saldo, totalPemasukan, totalPengeluaran }) {
  return (
    <section className="ringkasan">
      <div className="kartu-saldo">
        <p>Total Saldo</p>
        <h2>{formatRupiah(saldo)}</h2>
      </div>

      <div className="kartu-ringkasan pemasukan">
        <p>Total Pemasukan</p>
        <h3>{formatRupiah(totalPemasukan)}</h3>
      </div>

      <div className="kartu-ringkasan pengeluaran">
        <p>Total Pengeluaran</p>
        <h3>{formatRupiah(totalPengeluaran)}</h3>
      </div>
    </section>
  );
}

export default RingkasanSaldo;