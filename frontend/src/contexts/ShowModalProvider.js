import { createContext, useState } from 'react';

const ShowModalContext = createContext({});

export function ShowModalProvider({ children }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [modalContactId, setModalContactId] = useState('');

  return (
    <ShowModalContext.Provider value={
      {
        showAddModal,
        setShowAddModal,
        showEditModal,
        setShowEditModal,
        modalContactId,
        setModalContactId
      }
    }>
      {children}
    </ShowModalContext.Provider>
  );
}

export default ShowModalContext;