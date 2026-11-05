
import React from 'react';

function ItemMatkul({ nama, sks, semester }) {
  return (
    <div className="subject-card">
      <h3>{nama}</h3>
      <p>SKS: {sks}</p>
      <p>Semester: {semester}</p>
    </div>
  );
}

export default ItemMatkul;
