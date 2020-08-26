import React, { Component } from 'react'
import Header from './header';
import Footer from './footer';
// import baseUrl from '../../baseUrl';
// import axios from "axios";

export class home extends Component {

    constructor(props) {
        super(props);
        this.state={
            homeData:'',
        }
    
        // axios.get(baseUrl + `homepage.php`)
        //     .then(res => {
        //         this.setState({ homeData: res.data, loading:false });
        //     })

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
                    <div class="col-md-6 text-center about-div-left">
                            <img src="assets/images/about.png" alt="" />
                            <h3>ABOUT THE SCHOOL</h3>
                            <h5 class="text-justify">The Greater NOIDA Branch of Somerville School was established on 2nd July 1998 by the Lott Carey Baptist Mission in India, to fulfill the long cherished dream of Dr. W. C. Somerville, to spread education in the country. The School is administered by The Lott Carey Baptist Mission in India. It is an unaided Christian Minority School affiliated to the CBSE Board under the 10+2 scheme. The medium of instruction is English. The foundation stone for the school was laid on 12thJanuary 1995 by...</h5>
                            <br/>
                            <a href="#"><button>READ MORE</button></a>
                    </div>
                    <div class="col-md-6 about-div-right">

                    </div>

                </div>

                <div class="row">
                    <div class="col-md-6 notice-div-left">

                    </div>
                    
                    <div class="col-md-6 text-center notice-div-right">
                            <img src="assets/images/notice.png" alt="announcement"/>
                            <h3>ANNOUNCEMENT</h3>

                            <div class="wrapper">
                                <p><a href="#">First announcement from gurukul</a></p><br/><br/>
                                <p><a href="#">Second announcement from gurukul</a></p><br/><br/>
                                <p><a href="#">Third announcement from gurukul</a></p><br/><br/>
                                <p><a href="#">Fourth announcement from gurukul</a></p><br/><br/>
                                <p><a href="#">Fifth announcement from gurukul</a></p>
                            </div>

                            
                            <a href="#"><button>VIEW ALL</button></a>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-6 text-center msg-div-left">
                            <img src="assets/images/msg.png" alt="message" />
                            <h3>PRINCIPAL'S MESSAGE</h3>
                            <h5 class="text-justify">The Sovereign Lord is my strength; he makes my feet like the feet of a deer, he enables me to go on the heights'(Habakkuk 3:19). Somerville School, Greater NOIDA which was established on the 2ndof July 1998, is administered by the Lott Carey Baptist Mission in India. It has the distinction of being the first School of Greater NOIDA with an imposing building surrounded by a green and sprawling campus of 6 Acres.The school aims at a holistic development of the learners...</h5>
                            <br/>
                            <a href="#"><button>READ MORE</button></a>
                    </div>
                    <div class="col-md-6 msg-div-right">

                    </div>

                </div>

                <div class="row">
                    <div class="col-md-6 gallery-div-left">

                    </div>
                    
                    <div class="col-md-6 text-center notice-div-right">
                            <img src="assets/images/photo_gallery_img.png" alt="gallery" />
                            <h3>PHOTO GALLERY</h3>

                            <br/>
                            <a href="#"><button>VIEW ALL</button></a>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-6 text-center about-div-left">
                            <img src="assets/images/toppers_img.png" alt="toppers" />
                            <h3>OUR TOPPERS 2019-20</h3>
                            <br/>
                            <a href="#"><button>VIEW ALL</button></a>
                    </div>
                    <div class="col-md-6 toppers-div-right">

                    </div>

                </div>

                <div class="row">
                    <div class="col-md-6 bday-div-left">

                    </div>
                    
                    <div class="col-md-6 text-center notice-div-right">
                            <img src="assets/images/bday-icon.png" alt="bday" />
                            <h3>HAPPY BIRTHDAY</h3>

                            <br/>
                            <a href="#"><button>VIEW ALL</button></a>
                    </div>

                </div>

                </div>

            <Footer />
                
            </div>
        )
    }
}
