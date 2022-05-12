import { Link } from 'react-router-dom';

import Helmet from 'react-helmet';

import { FiUser, FiLock } from 'react-icons/fi';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { ContentLeft, ContentRight, Content } from './styles';

import { Logo } from '../../components/Logo';

export function Login() {
    return (
        <Content>
            <Helmet>
                <title>Loquei | Login</title>
            </Helmet>
            <ContentLeft>
                <div>
                    <h1>Locação é <span>aqui.</span></h1>
                    <p>Facilidade para locação de espaços, venha já publicar o seu.</p>
                    <span>Não é registrado? <Link to="/registro">Registrar-se</Link></span>
                </div>
                <Link className="button_back_to_home" to="/"><BsArrowLeft size={24} color="#FFF" /></Link>
            </ContentLeft>
            <ContentRight>
                <form>
                    <Logo marginBot={40} />
                    <div className='box_input'>
                        <input placeholder='E-mail' required />
                        <FiUser className="icons" size={23} />
                    </div>
                    <div className='box_input'>
                        <input placeholder='Senha' required />
                        <FiLock className="icons" size={23} />
                    </div>
                    <span>Esqueceu a senha?</span>
                    <button className="button">
                        Entrar
                        <BsArrowRight/>
                    </button>
                </form>
                <div className='box_register'>
                    <span>Não é registrado? <Link to="/registro">Registrar-se</Link></span>
                </div>
            </ContentRight>
        </Content>
    )
}