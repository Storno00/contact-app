import backArrow from './../../icons/Back-arrow.svg';
import settings from './../../icons/Settings.svg';
import profile from './../../icons/Profile pic.png';
import add from './../../icons/Add.svg';
import lightMode from './../../icons/Light-mode.svg';
import './Header.scss';

const Header = ({ setShowModal }) => {
  return (
    <header>
      <div className="header-left">
        <span><img src={backArrow} alt="back" className="icon-lg" /></span>
      </div>
      <div className="header-middle">
        <h1>Contacts</h1>
        <nav>
          <span><img src={settings} alt="settings" className="icon-lg" /></span>
          <span><img src={profile} alt="settings" className="icon-lg" /></span>
          <button className="main-btn rounded body" onClick={() => setShowModal(true)}>
            <img src={add} alt="settings" className="icon-lg" />
            Add new
          </button>
        </nav>
      </div>
      <div className="header-right">
        <span><img src={lightMode} alt="settings" className="icon-lg" /></span>
      </div>
    </header>
  );
}

export default Header;