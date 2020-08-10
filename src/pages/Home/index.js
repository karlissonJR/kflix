import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

import repositorioCategorias from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState({
    categorias: [],
  });

  useEffect(() => {
    repositorioCategorias.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length > 0 && dadosIniciais.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é front-end? Trabalhando na área"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>

  );
}

export default Home;
