import { Container } from './styles'

import { useTheme } from "../../../../hooks/useTheme";

export function BoxInputs(props) {
  const { themeIsActive } = useTheme();

  return (
    <Container>
      <input 
        type={props.type} 
        disabled={props.disabled}
        value={props.value} 
        className={themeIsActive && "dark_input"} 
      />
      <span>{props.label}</span>
  </Container>
  );
}