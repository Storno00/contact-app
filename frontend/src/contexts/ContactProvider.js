import { createContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { BACKEND_CONTACT } from '../constants/url';

const ContactsContext = createContext({});

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getAllContacts = async () => {
      const response = await Axios.get(BACKEND_CONTACT);
      setContacts(response.data);
    }
    getAllContacts();
  }, []);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsContext;