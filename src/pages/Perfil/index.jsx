import { Container, Content, ConfigurationPanel, BoxInputs, InformationsProfile, PreviewProfile } from "./styles";

import { Helmet } from "react-helmet";

import { Header } from '../../components/Header';

import { useTheme } from "../../hooks/useTheme";

export function Perfil() {
  const { themeIsActive } = useTheme();

  return (
    <Container>
      <Helmet>
        <title>Loquei | Perfil</title>
      </Helmet>
      <Header />
      <Content>
        <ConfigurationPanel> 
          <form>
            <BoxInputs>
              <input 
                type="text" 
                disabled 
                value="Lindojonsom" 
                className={themeIsActive && "dark_input"} 
              />
              <span>Nome</span>
            </BoxInputs>
            <BoxInputs>
              <input 
                type="text" 
                disabled 
                value="Silva" 
                className={themeIsActive && "dark_input"} 
              />
              <span>Sobrenome</span>
            </BoxInputs>
            <BoxInputs>
              <input 
                type="text" 
                disabled 
                value="5**.***.**8-80" 
                className={themeIsActive && "dark_input"} 
              />
              <span>CPF</span>
            </BoxInputs>
            <BoxInputs>
              <input 
                type="text" 
                disabled 
                value="(11) 98676-3137" 
                className={themeIsActive && "dark_input"} 
              />
              <span>Whatsapp</span>
            </BoxInputs>
            <BoxInputs>
              <input 
                type="text" 
                disabled 
                value="user@exemple.com" 
                className={themeIsActive && "dark_input"} 
              />
              <span>E-mail</span>
            </BoxInputs>
          </form>
        </ConfigurationPanel>
        <InformationsProfile>
          <PreviewProfile>
            <img src="" alt="" />
            <h1>Gustavo Silva</h1>
          </PreviewProfile>
        </InformationsProfile>
      </Content>
    </Container>
  );
}