import Modal from 'react-modal';

import { AiOutlineAlert } from 'react-icons/ai';

Modal.setAppElement('#root');

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
        <button className="action" onClick={() => {
            props.onRequestClose()
            props.save()
          }}
        >
          {props.nameAction}
        </button>

        <button className="cancel" onClick={() => {
            props.onRequestClose()
            props.cancel()
          }}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  );
}