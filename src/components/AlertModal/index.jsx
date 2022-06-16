import Modal from 'react-modal';

import { AiOutlineAlert } from 'react-icons/ai';

export function AlertModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h2><AiOutlineAlert /> Confirme</h2>
      <p>{props.text}</p>
      <div className="box_buttons">
        <button className="action">{props.nameAction}</button>
        <button className="cancel" onClick={props.onRequestClose}>Cancelar</button>
      </div>
    </Modal>
  );
}