import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';

import { api } from '../../services/axios';
import { mascaraCPF } from '../../utils/mascaraCpf';
import { mascaraCelular } from '../../utils/mascaraCelular';

import { Logo } from '../../components/Logo';
import { ButtonSubmit } from '../../components/ButtonSubmit';
import { Input } from '../../components/Input';

import { ContentLeft, ContentRight, Container, BoxInputs, Footer, BoxError, Button } from './style';

export function RegisterUser() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const schema = yup.object({
        nome: yup.string().trim().required('Campo obrigatório'),
        sobrenome: yup.string().trim().required('Campo obrigatório'),
        cpf: yup.string().min(14, 'CPF inválido'),
        whatsapp: yup.string().min(15, 'Numero inválido').max(15, 'Numero inválido'),
        email: yup.string().email('E-mail inválido').trim().required('Campo obrigatório'),
        senha: yup.string().min(6, 'Minímo de 6 caracteres').max(30, 'Maximo de 30 caracteres'),
        confirmar_senha: yup.string().oneOf([
            null, yup.ref("senha")
        ], "As senhas precisam ser iguais.")
    });

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });    

    useEffect(() => {
        const cpf = watch('cpf');
        const whatsapp = watch('whatsapp');

        const cpfFormatado = mascaraCPF(cpf);
        const whatsappFormatado = mascaraCelular(whatsapp)

        setValue('cpf', cpfFormatado);
        setValue('whatsapp', whatsappFormatado)
        
    }, [watch('cpf'), watch('whatsapp')]);

    function handleForm(data){
        setLoading(true);
        const userData = {
            name: data.nome,
            lastname: data.sobrenome,
            cpf: data.cpf,
            whatsapp: data.whatsapp,
            email: data.email,
            password: data.senha
        }

        api.post('/users', userData)
        .then(() => {
            toast.success('Cadastro realizado com sucesso!');
            navigate('/login');
        })
        .catch(err => {
            if(err.status === 500){
                toast.error('Não foi possível realizar seu cadastro!');
            }
            setError(err.response.data.message);
        })
        .finally(() => setLoading(false));
    }

    return (
        <Container>
            <Helmet>
                <title>Loquei | Cadastrar</title>
            </Helmet>
            <ContentLeft>
                <div>
                    <h1>Cadastre-se</h1>
                    <p>
                        Aqui você encontrará os melhores espaços para abrir seu negócio. Faça já seu cadastro!
                    </p>
                </div>
            </ContentLeft>
            <ContentRight>
                <form onSubmit={handleSubmit(handleForm)}>
                    <Logo marginBot={40} size={200} />
                    {error && <BoxError>{error}</BoxError>}
                    <BoxInputs>
                        <Input 
                            error={errors.nome} 
                            register={register} 
                            name="nome" 
                            placeholder="Digite seu nome"
                            label="Nome"
                            id="box_nome"
                        />
                        <Input 
                            error={errors.sobrenome} 
                            register={register} 
                            name="sobrenome" 
                            label="sobrenome" 
                            placeholder="Digite seu sobrenome" 
                            id="box_sobrenome"
                        />
                        <Input 
                            error={errors.cpf} 
                            register={register} 
                            name="cpf" 
                            label="cpf" 
                            placeholder="Digite seu cpf" 
                            id="box_cpf"
                        />
                        <Input 
                            error={errors.whatsapp} 
                            register={register} 
                            name="whatsapp" 
                            label="whatsapp" 
                            placeholder="Digite seu whatsapp" 
                            id="box_whatsapp"
                        />
                        <Input 
                            error={errors.email} 
                            register={register} 
                            name="email" 
                            label="email" 
                            placeholder="Digite seu email" 
                            id="box_email"
                        />
                        <Input 
                            error={errors.senha} 
                            register={register} 
                            name="senha" 
                            label="senha" 
                            type="password" 
                            placeholder="Digite seu senha" 
                            id="box_senha"
                        />
                        <Input 
                            error={errors.confirmar_senha} 
                            register={register} 
                            name="confirmar_senha" 
                            label="confirmar senha" 
                            type="password" 
                            placeholder="Confirme sua senha" 
                            id="box_confirmar"
                        />
                    </BoxInputs>

                    <Button disabled={loading} title="Cadastrar">
                        {loading ? 'Cadastrando...' : 'Cadastrar-se'}
                    </Button>

                    <p>Você já tem uma conta? <Link to="/login">Fazer login</Link></p>
                </form>

                <Footer>
                    <p>Você já tem uma conta? <Link to="/login">Fazer login</Link></p>
                </Footer>
            </ContentRight>
        </Container>
    )
}