
import React from 'react';

function BadgeSkill({ namaSkill, level }) {

    // Menentukan warna berdasarkan tingkat kemampuan
    const warnaLevel = {
        Pemula: {
            backgroundColor: '#E1E4E8',
            color: '#444444'
        },
        Menengah: {
            backgroundColor: '#D1E9FF',
            color: '#084298'
        },
        Mahir: {
            backgroundColor: '#D4EDDA',
            color: '#155724'
        }
    };

    return (
        <span style={{
            ...warnaLevel[level],
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 'bold',
            display: 'inline-block',
            margin: '4px'
        }}>
            {namaSkill} - {level}
        </span>
    );
}

export default BadgeSkill;
