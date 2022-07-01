import { useState } from 'react';

import Helmet from "react-helmet";

import { Header } from '../../components/Header';
import { CardHorizontal, CardVertical } from './components/Cards';
import { useTheme } from '../../hooks/useTheme';

import { BiGridAlt, BiListUl } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ContainerAnunciar, BoxInput, BoxInputHidden } from "./styles";

import iconImageUpload from '../../assets/img/image-upload.svg';
import bannerWeAMe from '../../assets/banner/weame.jpeg';
import { api } from '../../services/axios';
import { useAuthentication } from '../../hooks/useAutenticacao';

import { useForm } from "react-hook-form";
import { ListCategories } from './components/ListCategories';
import axios from 'axios';
import toast from 'react-hot-toast';

export function Anunciar() {
  const { authentication } = useAuthentication();
  const [stateMenu, setStateMenu] = useState(false);
  const [stateCard, setStateCard] = useState(false);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const { themeIsActive } = useTheme();
  const [loading, setLoading] = useState(false);

  const [fullAddress, setFullAddress] = useState('');

  const schema = yup.object({
    cep: yup.string().required('Campo obrigatório'),
    title: yup.string().required('Campo obrigatório'),
    number: yup.string().required('Campo obrigatório'),
    meters: yup.string().required('Campo obrigatório'),
    categories: yup.string().required('Campo obrigatório'),
    description: yup.string().required('Campo obrigatório'),
  });

  const { register, handleSubmit, formState: { errors }, watch, getValues, setValue, reset } = useForm({
    resolver: yupResolver(schema),
  });

  function handleChangeStateMenu(e) {
    e.preventDefault();

    setStateMenu(!stateMenu);
  }

  function handleSelectImages(e) {
    if (!e.target.files) {
      return;
    }

    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function getAdress() {
    const cep = getValues('cep').trim();

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    setValue('address', response.data.logradouro);
    setValue('city', response.data.localidade);
    setValue('state', response.data.uf);
    setValue('district', response.data.bairro);

    const addressFull = (response.data.logradouro && response.data.logradouro + ', ')
      + (response.data.bairro && response.data.bairro + ', \n')
      + (response.data.localidade && response.data.localidade + ', ')
      + (response.data.uf && response.data.uf);

    setFullAddress(addressFull);
  }

  function resetForm() {
    reset({
      title: '',
      cep: '',
      city: '',
      adress: '',
      district: '',
      number: '',
      state: '',
      cep: '',
      complement: '',
      description: '',
      meters: '',
      categories: '',
    });

    setFullAddress('');
    setPreviewImages([]);
    setImages([]);
  }

  function handleForm(data) {
    setLoading(true);
    const formData = new FormData();

    formData.append('adress', data.address);
    formData.append('city', data.city);
    formData.append('district', data.district);
    formData.append('number', data.number);
    formData.append('state', data.state);
    formData.append('zip_code', data.cep);
    formData.append('complement', data.complement);
    formData.append('description', 'Casa muito foda.');
    formData.append('meter', data.meters);
    formData.append('title', data.title);
    formData.append('id_category', data.categories);

    if (images.length > 0) {
      images.forEach(image => {
        formData.append('image', image);
      });
    }

    api.post('/users/announcements', formData, {
      headers: {
        Authorization: `Bearer ${authentication.token}`,
      }
    })
      .then(() => {
        resetForm();
        toast.success('Anúncio cadastrado com sucesso!');
      })
      .catch((err) => {
        if (err.status === 500) {
          toast.error('Não foi possível publicar o anúncio!');
        }

        toast.error(err.response.data.message);
      })
      .finally(() => setLoading(false));
  }

  function withdrawImage(index) {
    const newImages = images.filter((image, i) => {
      if (i != index) {
        return image;
      }
    });

    setImages(newImages);

    const newPreview = previewImages.filter((image, i) => {
      if (i != index) {
        return image;
      }
    });

    setPreviewImages(newPreview);
  }

  return (
    <ContainerAnunciar>
      <Helmet>
        <title>Loquei | Anunciar</title>
      </Helmet>
      <Header />

      <form onSubmit={handleSubmit(handleForm)} className="box_grid">

        <aside className="box_filtro" style={stateMenu ? { bottom: "80%" } : { bottom: "0" }}>
          <div id="content_left" onSubmit={handleSubmit(handleForm)}>
            <ListCategories register={register} error={errors} />
            <BoxInput error={errors.title}>
              <h3>Título *</h3>
              <input
                {...register('title')}
                className={themeIsActive && "dark_input"}
                placeholder="Digite o título do anúncio"
              />
              {errors.title && <span>{errors.title.message}</span>}

            </BoxInput>

            <BoxInput error={errors.cep}>
              <h3>CEP *</h3>
              <input
                {...register('cep')}
                className={themeIsActive && "dark_input"}
                placeholder="Digite o cep do local"
                onBlur={getAdress}
              />

              {errors.cep && <span>{errors.cep.message}</span>}
            </BoxInput>

            <BoxInput>
              <h3>Endereço</h3>
              <textarea className={themeIsActive && "dark_input"} id="box_address" value={fullAddress} disabled />
            </BoxInput>

            <BoxInput>
              <h3>Número *</h3>
              <input
                {...register('number')}
                className={themeIsActive && "dark_input"}
                placeholder="Digite o numero do local"
              />
            </BoxInput>

            <BoxInput>
              <h3>Complemento</h3>
              <input
                {...register('complement')}
                className={themeIsActive && "dark_input"}
                placeholder="Digite o complemento do local"
              />
            </BoxInput>

            <BoxInput error={errors.meters}>
              <h3>Metragem do espaço - m² *</h3>
              <input
                {...register('meters')}
                className={themeIsActive && "dark_input"}
                placeholder="Digite metragem do espaço em m²"
              />
              {errors.meters && <span>{errors.meters.message}</span>}
            </BoxInput>

            <BoxInput error={errors.description}>
              <h3>Descrição *</h3>
              <textarea
                {...register('description')}
                id="box_description"
                className={themeIsActive && "dark_input"}
                placeholder="Descrição do anúncio"
              />
              {errors.description && <span>{errors.description.message}</span>}
            </BoxInput>

            <BoxInputHidden>
              <input
                {...register('address')}
              />
            </BoxInputHidden>

            <BoxInputHidden>
              <input
                {...register('city')}
              />
            </BoxInputHidden>

            <BoxInputHidden>
              <input
                {...register('state')}
              />
            </BoxInputHidden>

            <BoxInputHidden>
              <input
                {...register('district')}
              />
            </BoxInputHidden>

          </div>
        </aside>

        <section className="box_content">

          {previewImages.length == 0 && (
            <div className="box_preview_image_content">
              <div className="preview_container_content"></div>
              <div className="preview_container_content"></div>
              <div className="preview_container_content"></div>
              <div className="preview_container_content"></div>
            </div>
          )}


          {previewImages.length > 0 && (
            <div className="box_preview_image">
              {previewImages.map((image, index) => (
                <div className="preview_container">
                  <img src={image} />
                  <button type="button" onClick={() => withdrawImage(index)}><MdClose /></button>
                </div>
              ))}
            </div>
          )}

          <div className="box_card">
            <div className="alternative">
              <BiGridAlt className="icons" size="22" />
              <label>
                <input type="checkbox" onInputCapture={() => setStateCard(!stateCard)} />
                <span></span>
              </label>
              <BiListUl className="icons" size="22" />
            </div>

            <div className="card">
              <label className={stateCard ? "upload horizontal" : "upload"}>
                <input multiple onChange={handleSelectImages} type="file" />
                <i><img src={iconImageUpload} /></i>
              </label>

              {stateCard ? (
                <CardHorizontal
                  getValue={watch}
                  creation
                />
              ) : (
                <CardVertical
                  getValue={watch}
                  creation
                />
              )}
            </div>
          </div>

          <button type="submit" className="button_publicar" disabled={loading ? true : false}>
            {loading ? 'Publicando...' : 'Publicar'}
          </button>
        </section>

        <button
          className="box_mobile"
          onClick={handleChangeStateMenu}
          style={stateMenu ? { bottom: "80%" } : { bottom: "0" }}
        >
          <div></div>
          Inserir as informações do anúncio
        </button>

        <section className="box_anuncios">
          <img src={bannerWeAMe} alt="banner do nosso parceiro we a me" />
        </section>
      </form>
    </ContainerAnunciar>
  );
}