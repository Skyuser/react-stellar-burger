import { useEffect } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from 'prop-types';
import styles from "../modal/modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
const modalParse = document.getElementById('react-modals');

const Modal = ({ close, children, title }) => {

  useEffect(() => {
    const closeEscape = (evt) => {
      if (evt.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", closeEscape);
    return () => {
      document.removeEventListener("keydown", closeEscape);
    };
  }, [close]);

  return ReactDOM.createPortal(
    <>
    <ModalOverlay closeOverlay={close} />
      <div className={styles.modal}>
        <div className={styles.container}>
          {title && <h2 className={`${styles.title} text text_type_main-large`}>{title}</h2>}
          <div className={styles.close_button} onClick={close} >
            <CloseIcon />
          </div>
        </div>
        {children}
      </div>
    </>,
    modalParse
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string
}

export default Modal;