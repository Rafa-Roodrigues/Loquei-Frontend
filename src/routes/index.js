import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Registro } from '../pages/Registro';
import { MeusAnuncios } from '../pages/MeusAnuncios';
import { Buscar } from '../pages/Buscar';
import { Anunciar } from '../pages/Anunciar';
import { Perfil } from '../pages/Perfil';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/registro" element={<Registro />}/>
                <Route path="/meus-anuncios" element={<MeusAnuncios />}/>
                <Route path="/buscar" element={<Buscar />}/>
                <Route path="/anunciar" element={<Anunciar />}/>
                <Route path="/perfil" element={<Perfil />}/>
            </Routes>
        </BrowserRouter>
    )
}