
import React from 'react';

function Sapaan() {
  const notifikasiSapaan = () => {
    alert('Halo Yoga! Selamat datang di portofolio saya.');
  };

  return (
    <button
      className="primary-button"
      onClick={notifikasiSapaan}
    >
      Klik untuk menyapa
    </button>
  );
}

export default Sapaan;
