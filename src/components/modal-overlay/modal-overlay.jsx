import modalOverlay from "./modal-overlay.module.css";
import PropTypes from 'prop-types';


const ModalOverlay = ({closeOverlay}) => {
  return (
      <div className={modalOverlay.overlay} onClick={closeOverlay}></div>
  );
};

ModalOverlay.propTypes = {
  closeOverlay: PropTypes.func.isRequired,
}

export default ModalOverlay;