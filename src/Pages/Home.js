import React, {Component} from 'react';
import About from "./About";
import Bolls from "./Bolls";
import CarouselBox from "./CarouselBox";


function Home (){

        return (
            <>
                <About/>
                <div className={'headLine'}>
                
                <h1>Примеры!</h1>
                <p>__________</p>
                </div>
                <CarouselBox />


            </>
        );
}

export default Home;