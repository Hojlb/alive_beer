import React from 'react';
import TableGrounds from "./components/TableGrounds/TableGrounds";
import BuildingMerger from "./components/AboutBuilding/BuildingMerger";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, EffectCoverflow} from 'swiper';
import 'swiper/swiper-bundle.css';
import './style/App.css';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function App() {

  return (
    <div className="App">
      <Swiper
        effect={'coverflow'}//Could be "slide","fade","cube","coverflow","flip"
        grabCursor={'true'}
        centeredSlides={'true'}
        slidesPerView={'auto'}
        coverflowEffect={
        { rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={30}
        navigation
        pagination={
          { type:'progressbar',
            bulletElement: 'section',
            progressbarOpposite: true
          }
        }
        onInit = {(swiper)=> console.log('Swiper initialized!')}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <SwiperSlide>
          <TableGrounds />
        </SwiperSlide>

        <SwiperSlide >
          <BuildingMerger />
        </SwiperSlide>

    </Swiper>

    </div>
  );
}
//TODO
/*
var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

 */

export default App;
