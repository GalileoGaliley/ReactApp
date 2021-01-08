import React from "react";
import Carousel from "react-bootstrap/Carousel";
import images1 from './Solar.png';
import images2 from './Mountain.jpg';
import images3 from './Mount.jpg'

export default function CarouselBox (){

    return(
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className={'d-block w-100'}
                src={images1}
                alt={'Img'}/>
                <Carousel.Caption>
                    <h1>aaaaaaaAaaaaaaa</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={'d-block w-100'}
                    src={images2}
                    alt={'Img1'}/>
                <Carousel.Caption>
                    <h1>aaaaaaaAaaaaaaa</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={'d-block w-100'}
                    src={images3}
                    alt={'Img'}/>
                <Carousel.Caption>
                    <h1>aaaaaaaAaaaaaaa</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}