import { Container } from "./styles";

import { BiSearch } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';

export function PreviewFilter() {
  return (
    <Container>
      <button><MdOutlineLocationOn size={30} /></button>
      <form>
        <select>
          <option>Selecione uma categoria</option>
          <option>Garagem</option>
          <option>Box</option>
          <option>Salão de festa</option>
          <option>Comercial</option>
          <option>Pequenos espaço</option>
        </select>
        <input type="text" placeholder="Digite um endereço..." />
        <button type="button"><BiSearch size={24} /></button>
      </form>
    </Container>
  );
}