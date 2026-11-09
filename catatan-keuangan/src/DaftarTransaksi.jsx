import ItemTransaksi from './ItemTransaksi';

function DaftarTransaksi({ daftarTransaksi, onHapus }) {
  return (
    <section className="panel">
      <h2>Riwayat Transaksi</h2>

      {daftarTransaksi.length === 0 ? (
        <p className="pesan-kosong">
          Belum ada transaksi. Silakan tambahkan transaksi pertama kamu.
        </p>
      ) : (
        <ul className="daftar-transaksi">
          {daftarTransaksi.map((transaksi) => (
            <ItemTransaksi
              key={transaksi.id}
              transaksi={transaksi}
              onHapus={onHapus}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default DaftarTransaksi;