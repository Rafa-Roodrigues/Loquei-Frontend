import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Registro } from '../pages/Registro';
import { MeusAnuncios } from '../pages/MeusAnuncios';
import { Buscar } from '../pages/Buscar';
import { Anunciar } from '../pages/Anunciar';
import { Perfil } from '../pages/Perfil';
import { Cadastrar } from '../pages/Cadastrar';
import { Login2 } from '../pages/Login2';
import { AdDetails } from '../pages/AdDetails';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/loginn" element={<Login2 />}/>
                <Route path="/registro" element={<Registro />}/>
                <Route path="/cadastrar" element={<Cadastrar/>}/>
                <Route path="/meus-anuncios" element={<MeusAnuncios />}/>
                <Route path="/buscar" element={<Buscar />}/>
                <Route path="/anunciar" element={<Anunciar />}/>
                <Route path="/perfil" element={<Perfil />}/>
                <Route path="/ad-details" element={<AdDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}