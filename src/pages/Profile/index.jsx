import { Container, Content, Form, InformationsProfile, ContainerTextProfile, Divisions, ContainerPhoto } from "./styles";

import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";

import { Header } from '../../components/Header';
import { BoxInputs } from "./components/BoxInputs";

import { BiEdit, BiSave } from "react-icons/bi";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import womanImg from "../../assets/img/woman.jpg";
import { AlertModal } from "../../components/AlertModal";

import { api } from '../../services/axios';
import { useAuthentication } from "../../hooks/useAutenticacao";

import { BoxInputMask } from "./components/BoxInputMask";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const { authentication, getAuthentication, createAuthentication, destroyAuthentication } = useAuthentication();
  const [fullName, setFullName] = useState('');
  const [image, setImage] = useState({});
  const [imagePreview, setImagePreview] = useState({});
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const [enableEditing, setEnableEditing] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const buttonRef = useRef();
  const inputRef = useRef();

  const schema = yup.object({
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    lastname: yup.string().required('Campo obrigatório'),
    whatsapp: yup.string().required('Campo obrigatório')
  });

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    resolver: yupResolver(schema),
  });

  function handleEnableEditMode() {
    const stateInitilal = enableEditing;
    setEnableEditing(!stateInitilal);
  }

  function updateUser() {
    buttonRef.current.click();
  }

  function cancelUpdate() {
    setEnableEditing(false);
  }

  function handlePhoto() {
    inputRef.current.click();
  }

  function handleImage(e){
    if (!e.target.files){
      return;
    }

    setImage(e.target.files[0]);

    const imagePreview = URL.createObjectURL(e.target.files[0]);

    setImagePreview(imagePreview);
  }

  function updateDataAuthentication(data) {
    const newDataAuthentication = {
      ...getAuthentication(),
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      image: data.image
    }

    createAuthentication(newDataAuthentication);
  } 

  function setValuesInForm(data) {
    setValue('name', data.name)
    setValue('lastname', data.lastname)
    setValue('whatsapp', data.whatsapp)
    setValue('email', data.email)
    setValue('phone', data.telefone_fixo)

    const nameFull = data.name + ' ' + data.lastname;
    setFullName(nameFull);
  }

  function handleForm(data) {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('lastname', data.lastname);
    formData.append('whatsapp', data.whatsapp);
    formData.append('telefone_fixo', data.phone);
    formData.append('email', data.email);
    
    if(image.name) {
      formData.append('image', image);
    }

    api.patch('/users', formData, {
      headers: { Authorization: `Bearer ${authentication.token}` }
    })
    .then((response) => {
      toast.success('Perfil atualizado com sucesso!');
      setUser(response.data);
      setValuesInForm(response.data);
      updateDataAuthentication(response.data);
      setEnableEditing(false);
    })

    .catch(err => {
      if(err.response.status === 500) toast.error('Não foi possível publicar o anúncio!');

      if(err.response.status === 401) {
        destroyAuthentication();
        navigate('/login');
        return;
      }

      toast.error(err.response.data.message);
    });
  }

  useEffect(() => {
    api.get('/users', {
      headers: {
        Authorization: `Bearer ${authentication.token}`,
      }
    })
    .then(response => {
      setValuesInForm(response.data);
      setUser(response.data);
    });

  }, []);

  return (
    <Container>
      <Helmet>
        <title>Loquei | Perfil</title>
      </Helmet>
      <Header />
      <Content>
        <Form onSubmit={handleSubmit(handleForm)}> 
          <InformationsProfile>
            <button ref={buttonRef} type="submit" id="hidden">
            </button>
            {enableEditing ? (
              <button type="button" onClick={() => setModalIsOpen(true)}>
                <BiSave size={28} />
              </button>
            ) : (
              <button type="button" onClick={handleEnableEditMode}>
                <BiEdit size={28} />
              </button>
            )}

            <ContainerPhoto>
              <div id="image_exists">
                {(imagePreview.length > 0) && <img src={imagePreview ? imagePreview : womanImg} alt="Foto de perfil" />}
                {(user.image?.url && !imagePreview.length)  && <img src={user.image.url} alt="Foto de perfil" />}
                
                {(!user.image && !imagePreview.length) && (
                  <div id="not_image">{user?.name?.substring(0,1)}{user?.lastname?.substring(0,1)}</div>
                )}

                {enableEditing && (
                  <button type="button" onClick={handlePhoto}>
                    {!user.image ? 'Adicionar foto' : 'Mudar foto'}
                  </button>
                )} 

                <input ref={inputRef} onChange={handleImage} type="file" id="hidden_input"/>
              </div>
            </ContainerPhoto>

            <ContainerTextProfile>
              <h1>{fullName}</h1>
            </ContainerTextProfile>

          </InformationsProfile>

          <div id="box_divisions">
            <Divisions>
              <h4>Informações pessoais</h4>
              <BoxInputs register={register} error={errors.name} name="name" label="Nome:" disabled={enableEditing ? false : true} />
              <BoxInputs register={register} error={errors.lastname} name="lastname" label="Sobrenome:"  disabled={enableEditing ? false : true} />
            </Divisions>

            <Divisions>
              <h4>Contatos</h4>
              <BoxInputMask register={register} error={errors.whatsapp} setValue={setValue} watch={watch} name="whatsapp" label="Whatsapp:" disabled={enableEditing ? false : true}/>
              <BoxInputs register={register} error={errors.email} name="email" label="Email:" disabled={enableEditing ? false : true}/>
              <BoxInputMask register={register} error={errors.phone} setValue={setValue} watch={watch} name="phone" label="Telefone fixo:" disabled={enableEditing ? false : true}/>
            </Divisions>
          </div>

        </Form>
      </Content>
      <AlertModal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        text="Deseja mesmo salvar as alterações que foram feitas?"
        nameAction="Salvar"
        save={updateUser}
        cancel={cancelUpdate}
      />
    </Container>
  );
}