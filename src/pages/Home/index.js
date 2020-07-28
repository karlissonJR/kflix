import React from 'react';

import dadosIniciais from '../../data/dados_iniciais.json';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <PageDefault>

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que é front-end? Trabalhando na área"}
        />

        {dadosIniciais.categorias.map((categoria, index) => {     
          return(
            <div key={index}>
              {index === 0 ? (
                <Carousel
                  ignoreFirstVideo
                  category={categoria}
                />  
              ) : (
                <Carousel
                  category={categoria}
                />
              )}
            </div>
          )
        })}

      </PageDefault>
    </div>
  );
}

export default Home;
