import { useContext } from 'react';
import './Contacts.scss';
import SingleContact from '../SingleContact/SingleContact';
import ContactsContext from '../../contexts/ContactProvider';

const Contacts = () => {

  const { contacts } = useContext(ContactsContext);

  return (
    <div className="contacts">
      {contacts.map(({ id, name, phoneNumber, imageUrl, isFavourite }) => (
        <SingleContact
          key={id}
          id={id}
          name={name}
          phoneNumber={phoneNumber}
          imageUrl={imageUrl}
          isFavourite={isFavourite}
        />
      ))}
    </div>
  );
};

export default Contacts;