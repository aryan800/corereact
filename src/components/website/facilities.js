import React, { Component } from 'react'
import Header from './header';
import Footer from './footer';
// import baseUrl from '../../baseUrl';
// import axios from "axios";

export class Facilities extends Component {

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
                
                <div class="container">

                    <div class="row">
                        <div class="col-md-12 text-center p-2">
                                <img src="assets/images/aboutus-icon.png" alt="facilities" />
                                <h2 class="text-primary">FACILITIES</h2>
                                <hr/>

                        </div>
                    </div>

                    <div class="row" style={{boxShadow: "0px 0px 5px teal",borderRadius:"5px",background:"white" }}>
                        
                        <div class="col-md-6 p-2">
                            <h4 class="bg-info text-white text-center p-2">Computer Labs</h4>
                            
                                <p class="text-justify">Technology advancement has affected every sphere of life especially education. This has changed our perception of what a school should provide for its students. In times of booming technology the computer labs at YGPS provide the appropriate platform to the students to be future technocrats. The computer labs are used not just to hone the skills of computer geeks but also provide an exposure to the novices.With four main labs which cater to the needs of senior, middle, junior and nursery sections, the labs also provide facilities to the students to explore the world through internet. Lab has 22 computers and a server. Nursery computer lab is the complete amalgamation of visual entertainment and learning.In the middle and sr. wing students are taught concepts of flash, HTML, VB, MS Office, C and C++ at various levels which prepare them to face the tough challenge of computer world later on. It is in these labs that the teachers also get the facilities to learn while they work in their separate labs on the computers.</p><br/>
                        </div>

                        <div class="col-md-6 p-2">
                            <img src="assets/images/computer-lab.png" alt="computer-lab" class="img-responsive img-thumbnail" style={{height:"350px" }}/>
                        </div>

                    </div>
                    <br/>

                    <div class="row" style={{boxShadow: "0px 0px 5px teal",borderRadius:"5px",background:"white" }}>

                        <div class="col-md-6 p-2">
                            <img src="assets/images/transport.png" alt="transport" class="img-responsive img-thumbnail"  style={{height:"350px" }} />
                        </div>

                        <div class="col-md-6 p-2">
                            <h4 class="bg-info text-white text-center p-2">Transport</h4>
                            
                                <p class="text-justify">The school provides facilities of transport by trolly, van & bus at reasonable rate. Withdrawal from conveyance faculty must be preceded by months notice in writing or a month’s fee is lieu thereof. Conveyance-charge for vacations will also have to be deposited. The school has its own van & Busses for the students. Besides covering all sector routes of Prayagraj. All the buses have got a teacher on duty. In case of their absence a supervisor/ security guard is provided for the safety of the children. Each child wears an I-Card which gives details of his or her individual bus route. Also, the Almanac issued to each child, lists the details of the escorts who would drop and receive the child from their respective bus stops. Each bus is equipped with a First Aid Box and communication is maintained with the Teacher duty throughout.</p><br/>
                        </div>

                    </div>

                    <br/>

                    <div class="row" style={{boxShadow: "0px 0px 5px teal",borderRadius:"5px",background:"white" }}>
                        
                        <div class="col-md-6 p-2">
                            <h4 class="bg-info text-white text-center p-2">Library</h4>
                            
                                <p class="text-justify">Believing in the adage that books are your best friends;the school empahasizes on a well stocked library-right from the pre-primary section upto the senior secondary level.Our quest for fulfilling the needs of an inquisitive mind stems from the basic fact that “knowledge is power” and education holds the key to a bright future.Our modem and fully renovated school library houses not only books of the current syllabus but also encyclopedias,magazines,reference books,dictionaries,maps,CDs,journals,fiction and books on general awareness,health and hygiene and research in various fields.</p><br/>
                        </div>

                        <div class="col-md-6 p-2">
                            <img src="assets/images/library.png" alt="library" class="img-responsive img-thumbnail" style={{height:"350px"}}/>
                        </div>

                    </div>
                    <br/>

                    </div>

            <Footer />
                
            </div>
        )
    }
}
