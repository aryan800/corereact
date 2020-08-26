import React, { Component } from 'react'
import Header from './header';
import Footer from './footer';
// import baseUrl from '../../baseUrl';
// import axios from "axios";

export class About extends Component {

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
                        <div class="col-md-12 text-center p-5">
                                <img src="assets/images/aboutus-icon.png" alt="about" />
                                <h2 class="text-primary">ABOUT THE SCHOOL</h2>
                                <hr/>
                                <p class="text-justify"><b>St. Anthony's Secondary School,</b> Faridabad owned by the Institute of the Franciscan Clarist Missionaries of the Most Blessed Sacrament, a body registered under the Societies Registration Act XXI, 1860, has its office at Clara Niwas, Kalu Sari, New Delhi-16. The Institute runs English/Vernacular medium schools, orphanages, dispensaries, Home for aged and other welfare centres in various parts of the country.</p><br/>

                                <p class="text-justify"><b>St. Anthony's Secondary School,</b> Faridabad owned by the Institute of the Franciscan Clarist Missionaries of the Most Blessed Sacrament, a body registered under the Societies Registration Act XXI, 1860, has its office at Clara Niwas, Kalu Sari, New Delhi-16. The Institute runs English/Vernacular medium schools, orphanages, dispensaries, Home for aged and other welfare centres in various parts of the country.</p><br/>

                                <p class="text-justify"><b>St. Anthony's Secondary School,</b> Faridabad owned by the Institute of the Franciscan Clarist Missionaries of the Most Blessed Sacrament, a body registered under the Societies Registration Act XXI, 1860, has its office at Clara Niwas, Kalu Sari, New Delhi-16. The Institute runs English/Vernacular medium schools, orphanages, dispensaries, Home for aged and other welfare centres in various parts of the country.</p><br/>
                                <hr/>
                        </div>
                    </div>

                    <div class="row">

                            <img src="assets/images/about-us.jpg" alt="about-us" class="img-responsive" style={{width:"100%"}} />

                    </div>
                </div>

            <Footer />
                
            </div>
        )
    }
}
