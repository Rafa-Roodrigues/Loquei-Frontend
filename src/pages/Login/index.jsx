import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';

import { api } from '../../services/axios';
import { useAuthentication } from '../../hooks/useAutenticacao';

import { Logo } from '../../components/Logo';
import { ButtonSubmit } from '../../components/ButtonSubmit';
import { Input } from '../../components/Input';

import { ContentLeft, ContentRight, Container, BoxInputs, Footer, BoxError, Button } from './style';

export function Login() {
    const { createAuthentication } = useAuthentication();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const schema = yup.object({
        email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
        senha: yup.string().required('Campo obrigatório'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    
    function handleForm(data){
        setLoading(true);
        api.post('/authenticate', {
            email: data.email,
            password: data.senha
        })
        .then((response) => {
            console.log("FOI", response)
            createAuthentication(response.data);

            if(location?.state) {
                navigate(location.state.from.pathname);
                return;
            }

            navigate('/');
        })
        .catch((err) => {
            console.log("ERRO", err)
            if(err.response.status === 500){
                toast.error('Não foi possível realizar seu cadastro!');
            }

            setError(err.response.data.message);
        })
        .finally(() => setLoading(false))
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
                    {location?.state && <BoxError>{location.state.message}</BoxError>}
                    <BoxInputs>
                        <Input 
                            register={register} 
                            name="email" 
                            label="email" 
                            placeholder="Digite seu e-mail" 
                            error={errors.email} 
                        />
                        
                        <Input 
                            error={errors.senha} 
                            register={register} 
                            type="password" 
                            name="senha" 
                            label="senha" 
                            placeholder='Digite sua senha' 
                        />
                    </BoxInputs>
                    <Button title="Entrar" disabled={loading}>
                        {loading ? 'Entrando...' : 'Entrar'}
                    </Button>
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