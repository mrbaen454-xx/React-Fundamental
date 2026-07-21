import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header-utama">
      <div className="wadah isi-header">
        <div className="grup-logo">
          <img src={logo} alt="CareerHub Logo" width="36" height="36" />
          <h1 className="teks-logo">
            <span style={{ color: '#cbd5e1' }}>Career</span>
            <span style={{ color: '#1e3a8a' }}>Hub</span>
          </h1>
        </div>
        <p className="slogan">Temukan Karir Impianmu Bersama Kami</p>
      </div>
    </header>
  );
};

export default Header;
