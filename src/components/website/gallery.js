import React, { Component } from 'react'
import Header from './header';
import Footer from './footer';
// import baseUrl from '../../baseUrl';
// import axios from "axios";

export class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state={
            homeData:'',
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div>
                <Header />
                
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-12 text-center p-5">
                                <img src="assets/images/aboutus-icon.png" alt="gallery" />
                                <h2 class="text-primary">GALLERY</h2>
                                <hr/>
                        </div>
                    </div>

                    <div class="row">

                        <div class="column">
                            <img src="assets/images/img_nature.jpg" class="hover-shadow cursor img-thumbnail" style={{width:"100%"}} />
                        </div>
                        <div class="column">
                            <img src="assets/images/img_snow.jpg" class="hover-shadow cursor img-thumbnail" style={{width:"100%"}} />
                        </div>
                        <div class="column">
                            <img src="assets/images/img_mountains.jpg" class="hover-shadow cursor img-thumbnail" style={{width:"100%"}} />
                        </div>
                        <div class="column">
                            <img src="assets/images/img_lights.jpg" class="hover-shadow cursor img-thumbnail" style={{width:"100%"}} />
                        </div>

                    </div>

                    <div id="myModal" class="modal">
                    <span class="close cursor">&times;</span>
                    <div class="modal-content">

                    <div class="mySlides">
                    <div class="numbertext">1 / 4</div>
                    <img src="assets/images/img_nature_wide.jpg" style={{width:"100%"}} />
                    </div>

                    <div class="mySlides">
                    <div class="numbertext">2 / 4</div>
                    <img src="assets/images/img_snow_wide.jpg" style={{width:"100%"}} />
                    </div>

                    <div class="mySlides">
                    <div class="numbertext">3 / 4</div>
                    <img src="assets/images/img_mountains_wide.jpg" style={{width:"100%"}} />
                    </div>

                    <div class="mySlides">
                    <div class="numbertext">4 / 4</div>
                    <img src="assets/images/img_lights_wide.jpg" style={{width:"100%"}} />
                    </div>

                    {/* <a class="prev" onclick={ this.plusSlides(-1) }>&#10094;</a>
                    <a class="next" onclick={ this.plusSlides(1) }>&#10095;</a> */}


                    </div>
                    </div>


                    <hr/>
                    </div>

            <Footer />
                
            </div>
        )
    }
}
