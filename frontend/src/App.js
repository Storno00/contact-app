import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import AddContactModal from './components/AddContactModal/AddContactModal';
import Contacts from './components/Contacts/Contacts';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <Header setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddContactModal setShowModal={setShowModal} />
      </Modal>
      <Contacts />
    </div>
  );
};

export default App;
