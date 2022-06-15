import { Container, Content, ConfigurationPanel, InformationsProfile, ContainerTextProfile } from "./styles";

import { Helmet } from "react-helmet";

import { Header } from '../../components/Header';
import { BoxInputs } from "./components/BoxInputs";

import womanImg from "../../assets/img/woman.jpg";
import { BiEdit } from "react-icons/bi";

export function Perfil() {
  return (
    <Container>
      <Helmet>
        <title>Loquei | Perfil</title>
      </Helmet>
      <Header />
      <Content>
        <ConfigurationPanel> 
          <InformationsProfile>
            <button type="button">
              <BiEdit size={28} />
            </button>
            <img src={womanImg} alt="Foto de perfil" />
            <ContainerTextProfile>
              <h1>Gustavo Alves</h1>
            </ContainerTextProfile>
          </InformationsProfile>
          <form>
            <BoxInputs label="Nome:" type="text" value="Gustavo" disabled="true" />
            <BoxInputs label="Sobrenome:" type="text" value="Alves" disabled="true" />
            <BoxInputs label="CPF:" type="text" value="5**.***.**8-82" disabled="true" />
            <BoxInputs label="Whatsapp:" type="text" value="(11) 98676-3137" disabled="true" />
            <BoxInputs label="Email:" type="text" value="user@exemple.com" disabled="true" />
          </form>
        </ConfigurationPanel>
      </Content>
    </Container>
  );
}