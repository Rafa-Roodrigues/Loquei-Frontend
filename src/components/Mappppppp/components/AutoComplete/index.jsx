import { Modal } from "react-modal";

export function AutoCompleteModal(props) {

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
    {responseAddress.map((res, index) => (
      <button key={index} type="button">
        <h4>{res.logradouro}, {res.bairro}</h4>
        <p>CEP: {res.cep}</p>
        <p>{res.localidade} - {res.uf}</p>
      </button>
    ))}
    </Modal>
  );  
}