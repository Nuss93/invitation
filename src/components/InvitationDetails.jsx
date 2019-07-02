import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class InvitationDetails extends PureComponent {
    render() {
        return (
            <>
            {/* The invitation itself */}
            <div className="App-section light">
                <div>
                    <div className="mb-3">Dengan penuh rasa kesyukuran, kami</div>

                    <div className="d-flex flex-column mb-3 font-weight-bold" style={{textTransform:'uppercase'}}>
                        <div>Abdul Razak Rahman Hamzah</div>
                        <div>&</div>
                        <div>Nik Nor Suzet Mohd Zain</div>
                    </div>

                    <div className="mb-3" style={{width:'85%', marginLeft:'auto', marginRight:'auto'}}>dengan segala hormatnya menjemput anda ke majlis perkahwinan puteri kami</div>

                    <div className="d-flex flex-column mb-3 font-weight-bold" style={{textTransform:'uppercase'}}>
                        <div>Nasreen Amalina Binti Abdul Razak</div>
                        <div>&</div>
                        <div>Muhamad Faridz Bin Jamil</div>
                    </div>
                </div>
            </div>

            {/* The aturcara */}
            <div className="App-section dark">
                <div>
                    hi
                </div>
            </div>
            </>
        );
    }
}

InvitationDetails.propTypes = {

};

export default InvitationDetails;