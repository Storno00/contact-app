import './Modal.scss';
import ReactDOM from 'react-dom';
import { useTransition, animated } from 'react-spring';

const Modal = ({showModal, setShowModal, children}) => {

  const transition = useTransition(showModal, {
    config: {duration: 200},
    from: {opacity: 0, scale: 0},
    enter: {opacity: 1, scale: 1},
    leave: {opacity: 0, scale: 0},
  });

  return ReactDOM.createPortal(
    <>
      {transition((style, item) => (
        item && (
          <>
            <animated.div style={{opacity: style.opacity}}>
              <div className="overlay" onClick={() => setShowModal(false)}/>
            </animated.div>
            <div className="modal">
              <animated.div style={style}>
                {children}
              </animated.div>
            </div>
          </>
        )
      ))}
    </>,
    document.getElementById('portal')
  );
};

export default Modal;