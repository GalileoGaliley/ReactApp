import React, {Component, useState} from 'react';
import logo from './logo.png';
import backLogo from './2_09.png';
import {Navbar, Nav, Container,Modal, Form, Button, FormControl } from "react-bootstrap";
import {Switch,BrowserRouter as Router,Route,Link} from "react-router-dom";
import Footer from "./Footer";


import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import SunSet1 from "./Parallax/Sunset1.png";
import SunSet2 from "./Parallax/Sunset2.png";
import SunSet3 from "./Parallax/Sunset3.png";
import Forma from "../Pages/Forma";

export default function Header () {
    // constructor(props){
    //     super(props)
    //
    //     this.state = {
    //         vision: true
    //     };
    //     this.openModal = this.openModal.bind(this);
    // }
    // openModal(){
    //     this.setState(state =>({
    //         vision: !state.vision
    //     }));
    // }

    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

        return (
            <>
                <Container-fluid>
                    <div className={'row m-0 parallax'}>
                        <div className={'parallaxGroup'}>

                            <div className={'parallaxLayer parallaxLayerThree'}>
                                <Navbar fixed="top" collapseOnSelect expand={'md'} variant={'dark'} bg={'dark'}>
                                    <Container>
                                        <Navbar.Brand href='/' >
                                            <img src={logo} height='56' width='50' className='d-inline-block align-top'/>
                                        </Navbar.Brand>
                                        <Navbar.Toggle arial-controls='responsive-navbar-nav'/>
                                        <Navbar.Collapse id='responsive-navbar-nav'>
                                            <Nav className={'m-auto'}>
                                                <Nav.Link href={'/'}>
                                                    <svg width="1em" height="1em" viewBox="0 0 10 10"
                                                         className="bi bi-house-fill" fill="currentColor"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                              d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                                        <path fill-rule="evenodd"
                                                              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                                    </svg>
                                                </Nav.Link>
                                                <button className={'OpenModalOne'} onClick={openModal}>
                                                    <svg width="1em" height="1em" viewBox="0 0 10 10"
                                                         className="bi bi-chat-text-fill" fill="currentColor"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                              d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                                                    </svg>
                                                </button>
                                                <Nav.Link href={'/Blog'}>
                                                    <svg width="1em" height="1em" viewBox="0 0 10 10"
                                                         className="bi bi-columns" fill="currentColor"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                              d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                                                        <path fill-rule="evenodd"
                                                              d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
                                                    </svg>
                                                </Nav.Link>
                                            </Nav>

                                        </Navbar.Collapse>

                                    </Container>
                                </Navbar>
                                <img src={SunSet3} width={'100%'} className={'img-fluid SunSet'}/>
                            </div>
                            <div className={'parallaxLayer parallaxLayerTwo'}>
                                <img src={SunSet2} width={'100%'} className={'img-fluid SunSet'}/>
                            </div>
                            <div className={'parallaxLayer parallaxLayerOne'}>
                                <img src={SunSet1} width={'100%'} className={'img-fluid SunSet'}/>
                                <div className={'conc inside'}>
                                    <Container-fluid>
                                        <Router>
                                            <Switch>
                                                <Route exact path={'/'} component={Home} />
                                                <Route exact path={'/Blog'} component={Blog} />
                                            </Switch>
                                        </Router>
                                    </Container-fluid>
                                    <Footer />
                                </div>
                            </div>
                        </div>

                    </div>

                <div id={'antiModal'} className={'antiModal'}>
                    <img className={'text-center backLogo'} src={backLogo}  height='600' width='600' />

                    <img id='image' className={'block-center image'} src={logo}  height='289.5' width='250'/>

                </div>
                </Container-fluid>
                <Modal show={show} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Введите данные</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Forma/>
                    </Modal.Body>
                </Modal>

            </>
        );


};