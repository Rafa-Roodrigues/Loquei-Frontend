import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Registro } from '../pages/Registro';
import { MeusAnuncios } from '../pages/MeusAnuncios';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/meus-anuncios" element={<MeusAnuncios/>}/>
            </Routes>
        </BrowserRouter>
    )
}