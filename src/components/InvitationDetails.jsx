import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import MAP from 'assets/img/map.png';

class InvitationDetails extends PureComponent {
    render() {
        return (
            <>
            <div className="App-section light">
                <div>
                    {/* The invitation itself */}
                    <div className="mb-3">Dengan penuh rasa kesyukuran, kami</div>

                    <div className="d-flex flex-column mb-3 font-weight-bold" style={{textTransform:'uppercase'}}>
                        <div>Dr. Abdul Razak Rahman Hamzah</div>
                        <div>&</div>
                        <div>Dr. Nik Nor Suzet Mohd Zain</div>
                    </div>

                    <div className="mb-3" style={{width:'85%', marginLeft:'auto', marginRight:'auto'}}>dengan segala hormatnya menjemput anda ke majlis perkahwinan puteri kami</div>

                    <div className="d-flex flex-column mb-3 font-weight-bold" style={{textTransform:'uppercase'}}>
                        <div>Nasreen Amalina Binti Abdul Razak</div>
                        <div>&</div>
                        <div>Muhamad Faridz Bin Jamil</div>
                    </div>

                    <div className="mb-4" style={{fontSize:'0.8rem'}}>
                        Sabtu, 25 Januari 2020 | 30 Jamadilawal 1441H<br/>
                        Lot 2885, Jalan 6/71B, Pinggir Taman Tun Dr Ismail, 60000 KL
                    </div>

                    <hr className="mt-0 mb-4" />

                    {/* The aturcara */}
                    <div className="mb-0 font-weight-bold" style={{textTransform:'uppercase', lineHeight:'1'}}>Aturcara Majlis</div>
                    <div className="d-flex flex-column mb-3">
                        <div className="font-weight-bold">Jamuan makan :</div>
                        <div>12:00pm - 4:00pm</div>
                    </div>
                </div>
            </div>

            {/* MAP */}
            {/* <div className="App-section light">
                <div>
                    <img src={MAP} style={{width:'100%'}} />
                    <Button color="default">Waze</Button>
                </div>
            </div> */}

            
            {/* RSVP */}
            {/* <div className="App-section dark">
                <div className="pt-5 pb-5">
                    <div className="mb-3">Jika anda mampu hadir, sila <b>RSVP</b> sebelum 10 Januari 2020</div>
                    <Button color="default">RSVP</Button>
                </div>
            </div> */}
            </>
        );
    }
}

InvitationDetails.propTypes = {

};

export default InvitationDetails;