import React, {Component} from 'react';
import About from "./About";
import Bolls from "./Bolls";
import CarouselBox from "./CarouselBox";
import Goods from "./Goods";
import Images from './paperBag.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home (){
  let width = window.innerWidth;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(navigator.userAgent);
  if (width <= 720){
        return (
            <>

                <Slider {...settings}>
                  <div>
                    <Goods title={'Пакет    "Блог"!'} price={'3500p'} source={Images}/>
                  </div>
                  <div>
                    <Goods title={'Пакет "Магазин"!'} price={'10500p'} source={Images}/>
                  </div>
                  <div>
                    <Goods title={'Пакет "Визитка"!'} price={'1500p'} source={Images}/>
                  </div>
                </Slider>

                <About/>
                <CarouselBox />
            </>
        );
      };
  if (width > 600) {
    return(
      <>
      <div className={'row rowPackage'}>
          <Goods title={'Пакет    "Блог"!'} price={'3500p'} source={Images}/>
          <Goods title={'Пакет "Магазин"!'} price={'10500p'} source={Images}/>
          <Goods title={'Пакет "Визитка"!'} price={'1500p'} source={Images}/>
      </div>
      <About/>
      <CarouselBox />
      </>
    )

  }
}

export default Home;
