function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(angka);
}

function ItemTransaksi({ transaksi, onHapus }) {
  const isPemasukan = transaksi.jenis === 'pemasukan';

  return (
    <li className="item-transaksi">
      <div className="info-transaksi">
        <strong>{transaksi.keterangan}</strong>
        <span>{isPemasukan ? 'Pemasukan' : 'Pengeluaran'}</span>
      </div>

      <div className="aksi-transaksi">
        <strong className={isPemasukan ? 'nominal-masuk' : 'nominal-keluar'}>
          {isPemasukan ? '+' : '-'} {formatRupiah(transaksi.nominal)}
        </strong>

        <button
          type="button"
          className="tombol-hapus"
          onClick={() => onHapus(transaksi.id)}
        >
          Hapus
        </button>
      </div>
    </li>
  );
}

export default ItemTransaksi;