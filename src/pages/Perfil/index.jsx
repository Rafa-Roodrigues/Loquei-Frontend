import { Container, Content, ConfigurationPanel, InformationsProfile, ContainerTextProfile, Divisions } from "./styles";

import { useState } from "react";
import { Helmet } from "react-helmet";

import { Header } from '../../components/Header';
import { BoxInputs } from "./components/BoxInputs";

import { BiEdit, BiSave } from "react-icons/bi";

import womanImg from "../../assets/img/woman.jpg";
import { AlertModal } from "../../components/AlertModal";

export function Perfil() {
  const [enableEditing, setEnableEditing] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleEnableEditMode() {
    const stateInitilal = enableEditing;
    setEnableEditing(!stateInitilal);
  }

  function haddleChangeStateModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <Container>
      <Helmet>
        <title>Loquei | Perfil</title>
      </Helmet>
      <Header />
      <Content>
        <ConfigurationPanel> 
          <InformationsProfile>
            {enableEditing ? (
              <button type="button" onClick={haddleChangeStateModal}>
                <BiSave size={28} />
              </button>
            ) : (
              <button type="button" onClick={handleEnableEditMode}>
                <BiEdit size={28} />
              </button>
            )}
            <img src={womanImg} alt="Foto de perfil" />
            <ContainerTextProfile>
              <h1>Gustavo Alves</h1>
            </ContainerTextProfile>
          </InformationsProfile>
          <form>
            <Divisions>
              <h4>Informações pessoais</h4>
              {enableEditing ? (
                <>
                  <BoxInputs label="Nome:" type="text" />
                  <BoxInputs label="Sobrenome:" type="text" />
                  <BoxInputs label="CPF:" type="text" value="555.888.228-82" disabled={true}/>
                </>
              ) : (
                <>
                  <BoxInputs label="Nome:" type="text" value="Gustavo" disabled={true} />
                  <BoxInputs label="Sobrenome:" type="text" value="Alves" disabled={true} />
                  <BoxInputs label="CPF:" type="text" value="5**.***.**8-82" disabled={true} />
                </>
              )}
            </Divisions>
            <Divisions>
              <h4>Contatos</h4>
              {enableEditing ? (
                <>
                  <BoxInputs label="Whatsapp:" type="text" value="(11) 98676-3137" />
                  <BoxInputs label="Email:" type="text" value="user@exemple.com" />
                </>
              ) : (
                <>
                  <BoxInputs label="Whatsapp:" type="text" value="(11) 98676-3137" disabled={true} />
                  <BoxInputs label="Email:" type="text" value="user@exemple.com" disabled={true} />
                </>
              )}
            </Divisions>
            <Divisions>
              <h4>Endereço</h4>
              {enableEditing ? (
                <>
                  <BoxInputs label="CEP:" type="text" value="02878-180" />
                </>
              ) : (
                <>
                  <BoxInputs label="CEP:" type="text" value="02878-180" disabled={true} />
                </>
              )}
            </Divisions>
          </form>
        </ConfigurationPanel>
      </Content>
      <AlertModal 
        isOpen={modalIsOpen} 
        onRequestClose={haddleChangeStateModal} 
        text="Deseja mesmo salvar as alterações que foram feitas?"
        nameAction="Salvar"
      />
    </Container>
  );
}