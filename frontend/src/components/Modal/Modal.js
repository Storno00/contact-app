import './Modal.scss';
import ReactDOM from "react-dom";

const Modal = ({ showModal, setShowModal, children }) => {
  if (!showModal) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={() => setShowModal(false)}></div>
      <div className="modal">
        {children}
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;