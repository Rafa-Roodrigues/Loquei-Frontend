import { Link } from 'react-router-dom';
import { LogoContainer } from './styles';
import logoLight from '../../assets/img/logo-light.svg';

export function Logo(props) {
  return (
    <LogoContainer style={{marginBottom: props.marginBot ? props.marginBot : 0}}>
      <Link to="/">

        <img src={logoLight}  alt="Imagem de localização da cor laranja." width={props.size ? props.size : 100} />
      </Link>
    </LogoContainer>
  );
}