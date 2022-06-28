import { Container } from './styles'

import { useTheme } from "../../../../hooks/useTheme";
import { useEffect } from 'react';
import { mascaraCelular } from '../../../../utils/mascaraCelular';

export function BoxInputMask({ type = 'text', disabled, name, label, register, error, setValue, watch = null, ...rest }) {
  const { themeIsActive } = useTheme();

  useEffect(() => {

    const value = watch(name);

    if(value) {
      const valueFormated = mascaraCelular(value)
      setValue(name, valueFormated)
    }
    
  }, [watch(name)]);

  return (
    <Container error={error}>
      <span>{label}</span>
      <input 
        type={type} 
        disabled={disabled}
        className={themeIsActive && "dark_input"}
        {...register(name)}
        {...rest}
      />
      {error && <p>{error.message}</p>}
  </Container>
  );
}