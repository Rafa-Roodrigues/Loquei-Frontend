import { ContentLeft, ContentRight, Container, BoxInputs, Footer, Error, Input, BoxError } from './style';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { mascaraCPF } from '../../utils/mascaraCpf';
import { mascaraCelular } from '../../utils/mascaraCelular';
import { api } from '../../services/axios';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

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
            <ContentLeft>
                <div>
                    <h1>Cadastre-se para ter uma<br></br> melhor experiência</h1>
                    <p>Aqui você encontrará os melhores espaços para abrir seu negócio.</p>
                </div>
            </ContentLeft>
            <ContentRight>
                <form onSubmit={handleSubmit(handleForm)}>
                    <h2>Cadastre-se</h2>
                    {error && <BoxError>{error}</BoxError>}
                    <BoxInputs>
                        <Input error={errors.nome} id="box_nome">
                            Nome:
                            <input {...register('nome')} name="nome" placeholder='Digite seu nome'/>
                            {errors.nome && <Error>{errors.nome.message}</Error>}
                        </Input>
                        <Input error={errors.sobrenome} id="box_sobrenome">
                            Sobrenome:
                            <input {...register('sobrenome')} name="sobrenome" placeholder='Digite seu sobrenome'/>
                            {errors.sobrenome && <Error>{errors.sobrenome.message}</Error>}

                        </Input>
                        <Input error={errors.cpf} id="box_cpf">
                            CPF:
                            <input {...register('cpf')} name="cpf" placeholder='Digite seu cpf'/>
                            {errors.cpf && <Error>{errors.cpf.message}</Error>}

                        </Input>
                        <Input error={errors.whatsapp} id="box_whatsapp">
                            Whatsapp:
                            <input {...register('whatsapp')} name="whatsapp" placeholder='Digite seu whatsapp'/>
                            {errors.whatsapp && <Error>{errors.whatsapp.message}</Error>}

                        </Input>
                        <Input error={errors.email} id="box_email">
                            E-mail:
                            <input {...register('email')} name="email" placeholder='Digite seu e-mail'/>
                            {errors.email && <Error>{errors.email.message}</Error>}

                        </Input>
                        
                        <Input error={errors.senha} id="box_senha">
                            Senha:
                            <input {...register('senha')} type="password" name="senha" placeholder='Digite sua senha'/>
                            {errors.senha && <Error>{errors.senha.message}</Error>}

                        </Input>
                        <Input error={errors.confirmar_senha} id="box_confirmar">
                            Confirmar senha:
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