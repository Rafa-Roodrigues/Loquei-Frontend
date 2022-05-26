import Modal from 'react-modal';

export function AlertModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h2>Confirme!</h2>
      <p>Você deseja mesmo excluir este post?</p>
      <div className="box_buttons">
        <button className="delete">Deletar</button>
        <button className="cancel" onClick={props.onRequestClose}>Cancelar</button>
      </div>
    </Modal>
  );
}