import React, {Component} from 'react';
import About from "./About";
import Bolls from "./Bolls";
import CarouselBox from "./CarouselBox";
import Goods from "./Goods";
import Images from './Darite.png'

function Home (){

        return (
            <>
            	<Goods title={'Пакет "Блог"!'} price={'3500p'} source={Images}/>
                <About/>
                <CarouselBox />
            </>
        );
}

export default Home;