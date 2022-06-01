import { Container } from "./styles";

import { BiSearch } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';

export function PreviewFilter() {
  return (
    <Container>
      <form>
        <select>
          <option>Selecione uma categoria</option>
          <option>Garagem</option>
          <option>Box</option>
          <option>Salão de festa</option>
          <option>Comercial</option>
          <option>Pequenos espaço</option>
        </select>
        <input type="text" title="Faça uma busca" placeholder="Digite um endereço..." />
        <button type="button" title="Buscar">
          <BiSearch size={24} />
        </button>
      </form>
      <div className="button_localizar">
        <button type="button"><MdOutlineLocationOn size={28} /></button>
        <span>Localização atual</span>
      </div>
    </Container>
  );
}