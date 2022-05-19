import { Link } from 'react-router-dom';
import { LogoContainer } from './styles';
import logoLight from '../../assets/img/logo.svg';
import logoDark from '../../assets/img/logo-dark.svg';
import { useTheme } from '../../hooks/useTheme';

export function Logo(props) {
  const { themeIsActive } = useTheme();

  return (
    <LogoContainer style={{marginBottom: props.marginBot ? props.marginBot : 0}}>
      <Link to="/">
        <img src={themeIsActive ? logoDark : logoLight}  alt="Imagem de localização da cor laranja." width={props.size ? props.size : 100} />
      </Link>
    </LogoContainer>
  );
}