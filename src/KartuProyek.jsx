
function KartuProyek({ judul, deskripsi, teknologi, link }) {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      color: '#333333',
      padding: '20px',
      borderRadius: '10px',
      border: '1px solid #DDDDDD',
      boxShadow: '0 3px 8px rgba(0,0,0,0.08)'
    }}>
      <h3 style={{ color: '#1B365D', marginTop: 0 }}>
        {judul}
      </h3>

      <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
        {deskripsi}
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginBottom: '18px'
      }}>
        {teknologi.map((tech, index) => (
          <span key={index} style={{
            backgroundColor: '#E1EFFF',
            color: '#084298',
            padding: '5px 9px',
            borderRadius: '15px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            #{tech}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#1B365D',
          color: '#FFFFFF',
          padding: '9px 14px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '13px',
          fontWeight: 'bold'
        }}
      >
        Lihat Repository GitHub
      </a>
    </div>
  );
}

export default KartuProyek;
