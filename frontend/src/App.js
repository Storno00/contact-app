import {useContext} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import EditContactModal from './components/AddContactModal/EditContactModal';
import Contacts from './components/Contacts/Contacts';
import ShowModalContext from './contexts/ShowModalProvider';

const App = () => {
  const {
    showAddModal,
    setShowAddModal,
    showEditModal,
    setShowEditModal,
    modalContactId
  } = useContext(ShowModalContext);

  return (
    <div className="app">
      <Header/>
      <Modal showModal={showAddModal} setShowModal={setShowAddModal}>
        <EditContactModal
          addOrEdit="add"
          setShowModal={setShowAddModal}
        />
      </Modal>
      <Modal showModal={showEditModal} setShowModal={setShowEditModal}>
        <EditContactModal
          addOrEdit="edit"
          setShowModal={setShowEditModal}
          id={modalContactId}
        />
      </Modal>
      <Contacts/>
    </div>
  );
};

export default App;
