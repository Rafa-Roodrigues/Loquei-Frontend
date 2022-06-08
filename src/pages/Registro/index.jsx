import { Link } from 'react-router-dom';

import Helmet from 'react-helmet';

import { Container, BoxContent } from "./styles";

import { Logo } from '../../components/Logo';

export function Registro() {
  return (
    <Container>
      <Helmet>
        <title>Loquei | Registro</title>
      </Helmet>
      <BoxContent>
        <Logo marginBot={40} size={200} />

        <form>
          <div className="box_inputs">
            <input placeholder="Nome completo" required />
          </div>
          <div className="box_inputs">
            <input placeholder="CPF" required />
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
    </Container>
  );
}