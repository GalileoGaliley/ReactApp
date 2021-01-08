import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import logo from './Components/logo.png';
import logo2 from "./Components/logo2.png"
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
