import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import AntiModal from "./AntiModal";




function App() {

    const [show, setShow] = useState({display: 'block'});
    const closeModal = () => setShow({display: 'none'});

        return (
            <>
                <div onClick={closeModal} style={show}>
                    <AntiModal/>
                </div>
                <Header/>
            </>
        );
}

export default App;
