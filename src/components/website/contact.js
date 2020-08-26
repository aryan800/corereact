import React, { Component } from 'react'
import Header from './header';
import Footer from './footer';
// import baseUrl from '../../baseUrl';
// import axios from "axios";

export class Contact extends Component {

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
                    <div class="col-md-12 text-center p-2">
                            <img src="assets/images/aboutus-icon.png" alt="contact us" />
                            <h2 class="text-primary">CONTACT US</h2>
                            <hr/>

                                <div class="col-md-6 offset-3" style={{boxShadow:"0px 0px 5px #444",borderRadius:"5px",padding:"5px",backgroundColor:"white"}}>

                                    <div class="form-group">
                                        <label style={{fontWeight:"bold",float:"left"}}>Name</label>
                                        <input type="text" name="name" class="form-control" placeholder="Enter full name" />
                                    </div>

                                    <div class="form-group">
                                        <label style={{fontWeight:"bold",float:"left"}}>Email</label>
                                        <input type="email" name="name" class="form-control" placeholder="Email id" />
                                    </div>

                                    <div class="form-group">
                                        <label style={{fontWeight:"bold",float:"left"}}>Mobile</label>
                                        <input type="text" name="name" class="form-control" placeholder="Mobile No." />
                                    </div>

                                    <div class="form-group">
                                        <label style={{fontWeight:"bold",float:"left"}}>Message</label>
                                        <textarea name="msg"  class="form-control" rows="5" placeholder="Enter your message"></textarea>
                                    </div>

                                    <div class="form-group text-center">
                                        <input type="button" value="submit" class="btn btn-success" />
                                    </div>

                                    <br/>
                                </div>
                                    
                            <hr/>
                    </div>
                </div>

                <div class="row">

                        <img src="assets/images/about-us.jpg" alt="" class="img-responsive" style={{width:"100%"}} />

                </div>

                </div>

            <Footer />
                
            </div>
        )
    }
}
