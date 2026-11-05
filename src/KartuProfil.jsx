
import React from 'react';

function KartuProfil({ nama, npm, kelas, status, fotoUrl }) {
  return (
    <div className="profile-card">
      <div className="profile-image-wrapper">
        <img
          src={fotoUrl}
          alt={`Foto profil ${nama}`}
          className="profile-image"
        />
      </div>

      <div className="profile-info">
        <span className="profile-status">{status}</span>

        <h3>{nama}</h3>

        <p>NPM: {npm}</p>

        <p>{kelas}</p>

        <p>Mahasiswa Teknik Informatika</p>
        <p>Universitas Pasundan</p>
      </div>
    </div>
  );
}

export default KartuProfil;
