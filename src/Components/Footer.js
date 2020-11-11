import React, {Component} from "react";
import {Container} from "react-bootstrap";

export default class Footer extends Component {
    render()
    {
        return (
            <>
                <footer className="footer section footer-classic context-light">
                    <Container>
                        <div className="row row-30">
                            <div className="col-md-4 col-xl-5">
                                <div className="pr-xl-4"><a className="brand" href="/"></a>
                                    <p>We are an award-winning creative agency, dedicated to the best result in web
                                        design,
                                        promotion, business consulting, and marketing.</p>

                                    <p className="rights"><span>©  </span><span
                                        className="copyright-year">2020</span><span> </span><span>Neutrino</span><span>. </span><span>Все права защищены.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h5>Contacts</h5>
                                <dl class="contact-list">
                                    <dt>email:</dt>
                                    <dd><a href="mailto:#">ThePursuer@mail.ru</a></dd>
                                </dl>
                                <dl class="contact-list">
                                    <dt>Телефон:</dt>
                                    <dd><a href="tel:#">8-986-986-69-79</a> <span><br/>Или<br/></span> <a href="tel:#">8-989-249-66-16</a>
                                    </dd>
                                </dl>
                            </div>
                            <div className="orange col-md-4 col-xl-3">
                                <h5>Links</h5>
                                <ul className="nav-list">
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contacts</a></li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                    <div className="row no-gutters social-container">
                        <div className="col"><a className="social-inner" href="#"><span
                            className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
                        <div className="col"><a className="social-inner" href="#"><span
                            className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
                        <div className="col"><a className="social-inner" href="#"><span
                            className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
                        <div className="col"><a className="social-inner" href="#"><span
                            className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
                    </div>
                </footer>
            </>
        )
    }
}