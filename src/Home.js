import React from 'react';
import './Home.css';
import Product from './Product';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div className='home'>
      <Carousel>
        <div>
          <img
            className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_fr-FR._CB406827366_.jpg'
            alt='home banner '
          />
          {/* <p className='legend'>Legend 1</p> */}
        </div>
        <div>
          <img
            className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/08/AmazonMusic/2020/ACQ/Campaign/FR-FR_081720_Katana_ACQ_GW_Hero_D_1500x600_CV10._CB406756386_.jpg'
            alt='home banner '
          />
        </div>
        <div>
          <img
            className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/OTJiNjVkMWQt/OTJiNjVkMWQt-ZjMyMWQ5MmEt-w1500._CB407810412_.jpg'
            alt='home banner '
          />
        </div>
      </Carousel>

      {/* <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_FT_XSite_HeroTALL_1500x600._CB409104621_.jpg'
        alt='home banner '
      /> */}

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
          price={24.99}
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
