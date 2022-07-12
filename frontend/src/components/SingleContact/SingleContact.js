import { useState, useContext } from 'react';
import './SingleContact.scss';
import settingsIcon from './../../icons/Settings.svg';
import favouriteIcon from './../../icons/Favourite.svg';
import deleteIcon from './../../icons/Delete.svg';
import muteIcon from './../../icons/Mute.svg';
import moreIcon from './../../icons/More.svg';
import callIcon from './../../icons/Call.svg';
import Axios from 'axios';
import { BACKEND_CONTACT } from '../../constants/url';
import ContactsContext from '../../contexts/ContactProvider';
import ShowModalContext from '../../contexts/ShowModalProvider';

const SingleContact = ({ id, name, phoneNumber, imageUrl }) => {

  const { contacts, setContacts } = useContext(ContactsContext);
  const { setShowEditModal, setModalContactId } = useContext(ShowModalContext);

  const [showControls, setShowControls] = useState(false);
  const [showMoreSettings, setShowMoreSettings] = useState(false);

  const closeSettings = () => {
    setShowMoreSettings(false);
    setShowControls(false);
  };

  const handleMoreSettings = () => {
    setShowMoreSettings(true);
  };

  const handleEdit = () => {
    setModalContactId(id);
    setShowEditModal(true);
    closeSettings();
  };

  const handleRemove = async () => {
    const response = await Axios.delete(BACKEND_CONTACT + `/${id}`);
    if (response.status === 200) {
      closeSettings();
      const newContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(newContacts);
    }
  };

  return (
    <>
      {showMoreSettings && <div className="overlay-invisible" onClick={closeSettings}></div>}
      <div
        className="contact"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => !showMoreSettings && setShowControls(false)}
      >
        <div className="contact-info">
          <div className="image-container">
            <img src={imageUrl} alt="profile" />
          </div>
          <div className="text-container">
            <h3>{name}</h3>
            <span className="message secondary">{phoneNumber}</span>
          </div>
        </div>
        {showControls && (
          <div className="contact-controls">
            <button className="main-btn bg-g100">
              <img src={muteIcon} alt="mute" className="icon-lg" />
            </button>
            <button className="main-btn bg-g100">
              <img src={callIcon} alt="call" className="icon-lg" />
            </button>
            <button
              className="main-btn bg-g100"
              onClick={handleMoreSettings}
            >
              <img src={moreIcon} alt="more-settings" className="icon-lg" />
            </button>
          </div>
        )}
        {showMoreSettings && (
          <div className="more-settings">
            <button className="main-btn body" onClick={handleEdit}>
              <img src={settingsIcon} alt="settings" />
              Edit
            </button>
            <button className="main-btn body">
              <img src={favouriteIcon} alt="set-favourite" />
              Favourite
            </button>
            <button className="main-btn body" onClick={handleRemove}>
              <img src={deleteIcon} alt="remove" />
              Remove
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleContact;