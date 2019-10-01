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

                    <div className="mb-3" style={{width:'85%', marginLeft:'auto', marginRight:'auto'}}>dengan segala hormatnya menjemput ke majlis perkahwinan puteri kami</div>

                    <div className="d-flex flex-column mb-3 font-weight-bold" style={{textTransform:'uppercase'}}>
                        <div>Nasreen Amalina Binti Abdul Razak</div>
                        <div>&</div>
                        <div>Muhamad Faridz Bin Jamil</div>
                    </div>

                    <div className="mb-4" style={{fontSize:'0.8rem'}}>
                        Sabtu, 25 Januari 2020 | 30 Jamadilawal 1441H<br/>
                        Lot 2885, Jalan 6/71B, Pinggir Taman Tun Dr Ismail, 60000 KL
                    </div>

                    <div className="mb-4" style={{fontSize:'0.8rem'}}>
                        <b>RSVP</b> sebelum 25 December 2019<br/>
                        melalui <b>WhatsApp/SMS</b> atau tekan butang <b>RSVP</b> di bawah
                    </div>

                    <hr className="mt-0 mb-4" />

                    {/* The atur cara */}
                    <div className="mb-0 font-weight-bold" style={{textTransform:'uppercase', lineHeight:'1'}}>Atur cara Majlis</div>
                    <div className="d-flex flex-column mb-5">
                        <div className="font-weight-bold">Jamuan makan :</div>
                        <div>12:00pm - 4:00pm</div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

InvitationDetails.propTypes = {

};

export default InvitationDetails;