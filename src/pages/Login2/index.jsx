import { ContentLeft, ContentRight, Container, BoxInputs, Footer, Error, Input } from './style';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export function Login2() {
    const schema = yup.object({
        email: yup.string().email('E-mail inválido').trim().required('Campo obrigatório'),
        senha: yup.string().min(6, 'Minímo de 6 caracteres').max(30, 'Maximo de 30 caracteres'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });    

    function handleForm(data){
        console.log("DADOS", data)
    }

    return (
        <Container>
            <ContentLeft>
                <form onSubmit={handleSubmit(handleForm)}>
                    <h2>Efetuar o login</h2>
                    <BoxInputs>
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
                    </BoxInputs>
                    <button type='submit'>Cadastrar</button>
                    <p>Não tem uma conta? <a href='#'>Cadastre-se</a></p>
                </form>

                <Footer>
                    <p>Não tem uma conta? <a href='#'>Cadastre-se</a></p>
                </Footer>
            </ContentLeft>

            <ContentRight>
                <div>
                    <h1>Cadastre-se para ter uma<br></br> melhor experiência</h1>
                    <p>Aqui você encontrará os melhores espaços para abrir seu negócio.</p>
                </div>
            </ContentRight>
        </Container>
    )
}