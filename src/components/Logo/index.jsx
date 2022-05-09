import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { LogoContainer } from './styles';

export function Logo(props) {
  return (
    <LogoContainer style={{marginBottom: props.marginBot ? props.marginBot : 0}}>
      <Link to="/">
        <img src={logo}  alt="Imagem de localização da cor laranja." height={props.imageHeight ? props.imageHeight : 60} width={props.imageWidth ? props.imageWidth : 60} />
        <h2 style={{fontSize: props.textSize ? props.textSize : 54}} >Loquei</h2>
      </Link>
    </LogoContainer>
  );
}