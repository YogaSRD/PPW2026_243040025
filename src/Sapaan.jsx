
const Sapaan = () => {

    const notifikasiSapaan = () => {
        alert("Selamat datang di website saya");
    };

    return (
        <div>
            <button onClick={notifikasiSapaan}>
                Klik Aku Sekarang
            </button>
        </div>
    );
};

export default Sapaan;
