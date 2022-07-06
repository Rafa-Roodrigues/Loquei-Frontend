import { BoxInput, Container, Content } from "./styels";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "../../components/Logo";

import { BiSearch } from 'react-icons/bi';

import toast from 'react-hot-toast';

export function EasterEgg() {
  const keyword = 'PROA';

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [hashIncrement, setHashIncrement] = useState(1);

  function handleOnSubmit(event) {
    event.preventDefault();

    const treatment = inputValue.toUpperCase().replace(' ', '');

    const hash = (Math.floor(Math.random() * 99) + 10) + '000' + hashIncrement;

    if (treatment.length <= 0) return;

    if (treatment.length > 0 && treatment != inputValue) {
      if (treatment === keyword) {
        toast.success(`Acertou, salve seu codigo: ${hash}`, {
          duration: (1000 * 60) * 1,
          closeOnClick: true,
          hideProgressBar: true
        });
        setHashIncrement(hashIncrement++);
        return setInputValue('');
      }

      toast.error('Resposta incorreta, tente novamente');
      return setInputValue('');
    }
  }

  return (
    <Container>
      <Logo size={250} />
      <Content>
        <BoxInput onSubmit={handleOnSubmit}>
          <h2>
            Parabens!<br />
            <span>Descubra a charada para continuar.</span>
          </h2>
          <div>
            <p>Em sua navegação, sou como um nariz e te ajudo a direcionar.</p>
            <input
              type="text"
              placeholder="O que eu sou?"
              onChange={(event) => setInputValue(event.target.value)}
              value={inputValue}
            />
            <button type="submit"><BiSearch size={24} /></button>
          </div>
        </BoxInput>
      </Content>
    </Container>
  );
}