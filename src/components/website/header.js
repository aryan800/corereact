import React, { Component } from 'react';
// import baseUrl from '../../baseUrl';
import { Link } from 'react-router-dom';

// import Login from './login';

export default class Header extends Component {

    render() {
        return (
                <div>
                    <a class="navbar-brand" href="#">
                        <img src="assets/logo/logo2.jpg" alt="logo" class="img-responsive logos"/>
                    </a>
                    <nav class="navbar navbar-expand-md fixed-top navbar-style ">
                    <button class="navbar-toggler border border-1 navbar-btn" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">    
                        <i class="fa fa-navicon"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/about" className="nav-link">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/facilities" className="nav-link">Facilities</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/gallery" className="nav-link">Gallery</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Others</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Link 1</a>
                                <a class="dropdown-item" href="#">Link 2</a>
                                <a class="dropdown-item" href="#">Link 3</a>
                            </div>
                        </li>
                        </ul>
                    </div>  
                    </nav>


                    <div id="demo" class="carousel slide" data-ride="carousel">

                    <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="assets/slider/slider1.jpg" alt="Slider 1" />
                    </div>
                    <div class="carousel-item">
                        <img src="assets/slider/slider3.png" alt="Slider 3" />
                    </div>
                    <div class="carousel-item">
                        <img src="assets/slider/slider4.png" alt="Slider 4" />
                    </div>    
                    </div>

                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                    </a>

                    </div>

                </div>

        )
    }
}
