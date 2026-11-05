import React from 'react';

function BadgeSkill({ namaSkill, level }) {
  const warnaLevel = {
    Pemula: {
      backgroundColor: '#33283e',
      color: '#d6a0ff'
    },
    Menengah: {
      backgroundColor: '#48202e',
      color: '#ff8ba2'
    },
    Mahir: {
      backgroundColor: '#204438',
      color: '#91e0bd'
    }
  };

  return (
    <span
      className="skill-badge"
      style={warnaLevel[level] || warnaLevel.Pemula}
    >
      {namaSkill} - {level}
    </span>
  );
}

export default BadgeSkill;
