import { ContentLeft, ContentRight, Container, BoxInputs, Footer, Error, Input, BoxError } from './style';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import toast from 'react-hot-toast';

import { api } from '../../services/axios';
import { useAuthentication } from '../../hooks/useAutenticacao';

import { Logo } from '../../components/Logo';

export function Login2() {
    const {createAuthentication} = useAuthentication();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const schema = yup.object({
        email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
        senha: yup.string().required('Campo obrigatório'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });    

    async function handleForm(data){
        try {
            const response = await api.post('/authenticate', {
                email: data.email,
                password: data.senha
            });

            createAuthentication(response.data);
            navigate('/');

        } catch(err) {
            if(err.status === 500){
                toast.error('Não foi possível realizar seu cadastro!');
            }

            setError(err.response.data.message);
        }
    }

    return (
        <Container>
            <Helmet>
                <title>Loquei | Login</title>
            </Helmet>
            <ContentLeft>
                <form onSubmit={handleSubmit(handleForm)}>
                    <Logo marginBot={40} size={200} />
                    {error && <BoxError>{error}</BoxError>}
                    <BoxInputs>
                        <Input error={errors.email} id="box_email">
                            <span>E-mail:</span>
                            <input {...register('email')} name="email" placeholder='Digite seu e-mail'/>
                            {errors.email && <Error>{errors.email.message}</Error>}
                        </Input>
                        
                        <Input error={errors.senha} id="box_senha">
                            <span>Senha:</span>
                            <input {...register('senha')} type="password" name="senha" placeholder='Digite sua senha'/>
                            {errors.senha && <Error>{errors.senha.message}</Error>}

                        </Input>
                    </BoxInputs>
                    <button type='submit'>Entrar</button>
                    <p>Não tem uma conta? <Link to="/cadastrar">Cadastre-se</Link></p>
                </form>

                <Footer>
                    <p>Não tem uma conta? <Link to="/cadastrar">Cadastre-se</Link></p>
                </Footer>
            </ContentLeft>

            <ContentRight>
                <div>
                    <h1>Entre com a sua conta</h1>
                    <p>Aqui você encontrará os melhores espaços para abrir seu negócio. </p>
                </div>
            </ContentRight>
        </Container>
    )
}