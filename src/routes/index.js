import { BrowserRouter, Outlet, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MeusAnuncios } from '../pages/MeusAnuncios';
import { Buscar } from '../pages/Buscar';
import { Anunciar } from '../pages/Anunciar';
import { Perfil } from '../pages/Perfil';
import { RegisterUser } from '../pages/RegisterUser';
import { Login } from '../pages/Login';
import { AdDetails } from '../pages/AdDetails';
import { useAuthentication } from '../hooks/useAutenticacao';

function RoutePrivate() {
    const { authentication } = useAuthentication();
    const location = useLocation();

    if(!authentication?.token) {
        return <Navigate 
            to="/login" 
            state={{from: location, message: 'Você precisa estar logado para acessar a página.'}}
            replace
        />
    }
    return <Outlet/>;
}

export function NotFound() {
    return <h1>Rota não encontrada!!!</h1>
}

export function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastrar" element={<RegisterUser/>}/>
                <Route path="/buscar" element={<Buscar />}/>

                <Route element={<RoutePrivate/>}>
                    <Route path="/anunciar" element={<Anunciar />}/>
                    <Route path="/perfil" element={<Perfil />}/>
                    <Route path="/ad-details" element={<AdDetails />}/>
                    <Route path="/meus-anuncios" element={<MeusAnuncios />}/>
                </Route>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

{/* <Route path="/" element={<Home />}/>
<Route path="/login" element={<Login />}/>
<Route path="/cadastrar" element={<RegisterUser/>}/>
<Route path="/buscar" element={<Buscar />}/>

<Route path="/meusAnuncios" element={
    <RoutePrivate>
        <MeusAnuncios />
    </RoutePrivate>
}/>
<Route path="/anunciar" element={
    <RoutePrivate>
        <Anunciar />
    </RoutePrivate>
}/>
<Route path="/perfil" element={
    <RoutePrivate>
        <Perfil />
    </RoutePrivate>
}/>
<Route path="/ad-details" element={
    <RoutePrivate>
        <AdDetails />
    </RoutePrivate>
}/> */}