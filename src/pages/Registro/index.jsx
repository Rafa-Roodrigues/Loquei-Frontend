import { Link } from 'react-router-dom';
import { BoxContent, RegistroContainer } from "./styles";

import { Logo } from '../../components/Logo';

export function Registro() {
  return (
    <RegistroContainer>
      <BoxContent>
        <Logo marginBot={40} />

        <form>
          <div className="box_inputs">
            <input placeholder="Primeiro nome" required />
          </div>
          <div className="box_inputs">
            <input placeholder="Sobrenome" required />
          </div>
          <div className="box_inputs">
            <input placeholder="CPF" required />
          </div>
          <div className="box_inputs">
            <input placeholder="CEP" required />
            <input placeholder="Número" required />
          </div>
          <div className="box_inputs">
            <input placeholder="Seu endereço aqui..." disabled />
          </div>
          <div className="box_inputs">
            <input placeholder="E-mail" required />
          </div>
          <div className="box_inputs">
            <input placeholder="Senha" required />
          </div>
          <div className="box_inputs">
            <input placeholder="Confirme sua senha" required />
          </div>
          <div className='box_login'>
            <span>Já tem uma conta? <Link to="/login">Logar-se</Link></span>
          </div>
          <button>
            Registrar
          </button>
        </form>
      </BoxContent>
    </RegistroContainer>
  );
}