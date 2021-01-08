import React, {Component} from 'react';
import About from "./About";
import Bolls from "./Bolls";


function Home (){

        return (
            <>
                <About/>
                <Bolls/>
                <div className={'row ender '}>
                    <button className={'btn btn-warning ml-auto mr-auto mt-5 mb-5'}><h1>Сделать заказ!</h1></button>
                </div>

            </>
        );
}

export default Home;