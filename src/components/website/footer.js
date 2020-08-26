import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
                <div class="container-fluid">
                <div class="row footer-row">

                    <div class="col-md-4 p-5">
                        <h2>CONTACT INFO</h2>
                        <p><h5><i class="fa fa-home"></i> Address:</h5>
                            <label class="pl-4">MANAV BHARTI NATIONAL SCHOOL ,NEAR ITI ,GAYA BODHGAYA ROAD ,GAYA ,201301</label>
                        </p>
                        <p><h5><i class="fa fa-envelope"></i> Email Us:</h5>
                            <label class="pl-4">gurukul@school.com</label>
                        </p>
                        <p><h5><i class="fa fa-phone"></i> Call Us:</h5>
                            <label class="pl-4">+91 - 9876543210</label>
                        </p>
                        <p><h5><i class="fa fa-clock-o"></i> Working Hours:</h5>
                            <label class="pl-4">Mon-Sat 09:00 AM - 05:00PM</label>
                        </p>
                    </div>

                    <div class="col-md-4 p-5">
                        <h2>LEAVE MESSAGE</h2>   
                        <br/>
                        <p> <input type="text" placeholder="Your Name" class="form-control" /> </p>
                        <p> <input type="text" placeholder="Email" class="form-control" /> </p>
                        <p> <input type="text" placeholder="Mobile No." class="form-control" /> </p>
                        <p> <textarea placeholder="Your message" class="form-control" ></textarea> </p>
                        <p> <button class="btn btn-danger">SEND MESSAGE</button> </p>
                    </div>

                    <div class="col-md-4 p-5">
                        <h2>SOCIAL MEDIA LINKS</h2>
                        <p><h5><i class="fa fa-facebook"></i> &ensp;&nbsp;Facebook</h5></p>
                        <p><h5><i class="fa fa-google-plus"></i> &nbsp;Google</h5></p>
                        <p><h5><i class="fa fa-twitter"></i> &nbsp;&nbsp;Twitter</h5></p>
                        <p><h5><i class="fa fa-linkedin"></i> &nbsp;&nbsp; Linkedin</h5></p>
                    </div>

                </div>

                </div>

        )
    }
}
