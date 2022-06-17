import { ContentLeft, ContentRight, Container, BoxInputs, Footer, Error, Input, BoxError } from './style';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import toast from 'react-hot-toast';

import { api } from '../../services/axios';
import { mascaraCPF } from '../../utils/mascaraCpf';
import { mascaraCelular } from '../../utils/mascaraCelular';

import { Logo } from '../../components/Logo';

export function Cadastrar() {
    const [error, setError] = useState('');
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

    async function handleForm(data){
        try {
            await api.post('/users', {
                name: data.nome,
                lastname: data.sobrenome,
                cpf: data.cpf,
                whatsapp: data.whatsapp,
                email: data.email,
                password: data.senha
            });

            toast.success('Cadastro realizado com sucesso!');
            navigate('/loginn');

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
                        <Input error={errors.nome} id="box_nome">
                            <span>Nome:</span>
                            <input {...register('nome')} name="nome" placeholder='Digite seu nome'/>
                            {errors.nome && <Error>{errors.nome.message}</Error>}
                        </Input>
                        <Input error={errors.sobrenome} id="box_sobrenome">
                            <span>Sobrenome:</span>
                            <input {...register('sobrenome')} name="sobrenome" placeholder='Digite seu sobrenome'/>
                            {errors.sobrenome && <Error>{errors.sobrenome.message}</Error>}

                        </Input>
                        <Input error={errors.cpf} id="box_cpf">
                            <span>CPF:</span>
                            <input {...register('cpf')} name="cpf" placeholder='Digite seu cpf'/>
                            {errors.cpf && <Error>{errors.cpf.message}</Error>}

                        </Input>
                        <Input error={errors.whatsapp} id="box_whatsapp">
                            <span>Whatsapp:</span>
                            <input {...register('whatsapp')} name="whatsapp" placeholder='Digite seu whatsapp'/>
                            {errors.whatsapp && <Error>{errors.whatsapp.message}</Error>}

                        </Input>
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
                        <Input error={errors.confirmar_senha} id="box_confirmar">
                            <span>Confirmar senha:</span>
                            <input 
                                {...register('confirmar_senha')}
                                type="password"
                                name="confirmar_senha" 
                                placeholder='Confirme sua senha'
                            />
                            {errors.confirmar_senha && <Error>{errors.confirmar_senha.message}</Error>}

                        </Input>
                    </BoxInputs>
                    <button type='submit'>Cadastrar</button>
                    <p>Você já tem uma conta? <Link to="/loginn">Fazer login</Link></p>
                </form>

                <Footer>
                    <p>Você já tem uma conta? <Link to="/loginn">Fazer login</Link></p>
                </Footer>
            </ContentRight>
        </Container>
    )
}