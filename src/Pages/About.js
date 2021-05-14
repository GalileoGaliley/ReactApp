import React, {Component} from 'react';
import Banners from "./Banners";
import Sliderr from "./Sliderr";

class About extends Component {

    render() {
        return (
            <div>
                <div className={'row'}>
                    <div className={'headLine'}>
                        <p>Немного о нас!</p>
                        <h3>_____</h3>
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
                        <p>Что мы делаем?</p>
                        <h3>_____</h3>
                    </div>
                </div>
                <div className={'row m-0'}>
                    <Banners />
                </div>
                <Sliderr />
            </div>

        );
    }
}

export default About;
