import { Container } from "./styles";

import { BiSearch } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export function PreviewFilter() {
  return (
    <Container>
      <form>
        <select>
          <option>Selecione uma categoria</option>
          <option>Comercial</option>
          <option>Box</option>
          <option>Garagem</option>
          <option>Espaço eventual</option>
          <option>Outros espaço</option>
        </select>
        <input type="text" title="Faça uma busca" placeholder="Digite um endereço..." />
        <button type="submit" title="Buscar">
          <BiSearch size={24} />
        </button>
        <div className="button_localizar">
          <button type="button"><HiOutlineLocationMarker size="25 " /></button>
          <span>Localização atual</span>
        </div>
      </form>
    </Container>
  );
}