import { Link, useNavigate } from "react-router-dom";

import Helmet from "react-helmet";

import { Header } from '../../components/Header';
import { CardHorizontal, CardVertical } from "../../components/Cards";

import { MeusAnunciosContainer } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";
import { useAuthentication } from "../../hooks/useAutenticacao";
import toast from "react-hot-toast";

export function MeusAnuncios() {
  const [announcements, setAnnouncements] = useState([]);
  const { authentication, destroyAuthentication } = useAuthentication();

  const navigate = useNavigate();

  function listAnnouncements(id) {
    const newAnnouncements = announcements.filter(announcement => announcement.id != id);
    setAnnouncements(newAnnouncements);
  }

  useEffect(() => {
    api.get('/users/announcements', {
      headers: {
        Authorization: `Bearer ${authentication.token}`,
      }
    })
      .then(response => setAnnouncements(response.data))
      .catch((err) => {

        console.log(err);
        if (err.response.status === 500) {
          toast.error('Não foi possível buscar seus anuncios!');
          return;
        }

        if (err.response.status === 401) {
          destroyAuthentication();
          navigate('/login');
          return;
        }

        toast.error(err.response.data.message);
      })
  }, []);

  return (
    <>
      <MeusAnunciosContainer>
        <Helmet>
          <title>Loquei | Meus Anuncios</title>
        </Helmet>
        <Header />
        <div class="box_grid">
          <aside>
            <form>
              <h3>Encontar meus anúncios</h3>
              <input type="text" placeholder="Digite alguma informação do anuncio" />
            </form>

            <Link to="/anunciar">
              <span></span>
              <p>Criar um anúncio</p>
            </Link>
          </aside>
          <section className="box_content">
            {announcements.length === 0 ? (
              <h1>Você ainda não tem nenhum anúncio.</h1>
            ) : (
              <>
                <div className="card_vertical">
                  {announcements.map(announcement => (
                    <CardVertical
                      data={announcement}
                      isDelete={true}
                      listAnnouncements={listAnnouncements}
                    />
                  ))}
                </div>

                <div className="card_horizontal">

                  {announcements.map(announcement => (
                    <CardHorizontal
                      data={announcement}
                      isDelete={true}
                      listAnnouncements={listAnnouncements}
                    />
                  ))}

                </div>
              </>
            )}
          </section>
        </div>
      </MeusAnunciosContainer>
    </>
  );
}