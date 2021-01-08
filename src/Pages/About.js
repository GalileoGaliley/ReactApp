import React, {Component} from 'react';
import Banners from "./Banners";


class About extends Component {

    render() {
        return (
            <div>
                <div className={'row'}>
                    <div className={'headLine'}>
                        <h1>Немного о нас!</h1>
                        <p>_____</p>
                    </div>
                </div>
                <div className={'row m-0 conc'}>
                    <div className={'col-sm-1 m-2 cont squareOne'}>

                    </div>
                    <div className={'col m-2 cont p-2'}>
                        <h3>Мы - команда разработчиков и дизайнеров.</h3>
                        <h3>Наша цель - сделать так, что-бы после проделанной работы заказчик остался доволен!</h3>
                        <h3></h3>
                    </div>
                </div>
                <div className={'row m-0 conc'}>
                    <div className={'col m-2 cont p-2'}>


                    </div>
                    <div className={'col-sm-1 m-2 cont squareOne'}>

                    </div>
                </div>
                <div className={'row'}>
                    <div className={'headLine'}>
                        <h1>Технологии!</h1>
                        <p>_____</p>
                    </div>
                </div>
                <div className={'row m-0'}>
                    <Banners />
                </div>
            </div>
        );
    }
}

export default About;