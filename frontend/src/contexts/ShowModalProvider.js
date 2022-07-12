import { createContext, useState } from 'react';

const ShowModalContext = createContext({});

export function ShowModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <ShowModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ShowModalContext.Provider>
  );
}

export default ShowModalContext;