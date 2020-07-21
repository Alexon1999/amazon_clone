import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_FT_XSite_HeroTALL_1500x600._CB409104621_.jpg'
        alt='home banner '
      />

      <div className='home__row'>
        <Product
          id='94646546341'
          title='Samsung Galaxy S7 edge'
          price={150.0}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71JSUGKsguL._AC_SY550_.jpg'
        />
        <Product
          id='8789748646546'
          title='Iphone X with a good promotion'
          price={400.99}
          rating={2}
          image='https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/iphone-x-final.png?resize=580,580'
        />
      </div>

      <div className='home__row'>
        <Product
          id='02151536165'
          title='Echo Dot (3ème génération), Enceinte connectée avec Alexa, Tissu anthracite'
          price={(24, 99)}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SX425_.jpg'
        />
        <Product
          id='874874646464'
          title='Apple AirPods avec boîtier de charge filaire (2e génération)'
          price={139.0}
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/I/7120GgUKj3L._AC_SX679_.jpg'
        />
        <Product
          id='02331515'
          title='Sony, Ghost of Tsushima sur PS4, Jeu d\"action et d\"aventure, Édition Exclusive Amazon, En français, 1 joueur, PEGI 18'
          price={56.99}
          rating={1}
          image='https://images-na.ssl-images-amazon.com/images/I/91qPKliuy-L._AC_SX679_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id='01523414547485'
          title='Star Wars 9 : L\"Ascension de Skywalker [DVD]'
          price={19.96}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/61pL2S3m5BL._AC_SY445_.jpg'
        />
      </div>
    </div>
  );
};

export default Home;
