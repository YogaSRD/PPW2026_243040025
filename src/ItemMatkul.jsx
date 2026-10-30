
function ItemMatkul({ nama, sks, semester }) {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      color: '#333333',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px',
      border: '1px solid #DDDDDD',
      textAlign: 'left'
    }}>
      <h3>{nama}</h3>
      <p>SKS: {sks}</p>
      <p>Semester: {semester}</p>
    </div>
  );
}

export default ItemMatkul;
