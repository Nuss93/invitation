import React, { Component } from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import WASEP from 'assets/img/whatsapp.svg'
import WAZE from 'assets/img/waze.svg'
import MAP from 'assets/img/pin.svg';
import PHONE from 'assets/img/phone.svg'

import GOOGLE from 'assets/img/gps.svg';
import WAZE_COL from 'assets/img/waze-color.svg';

import RSVP from 'components/RSVP.jsx';

class BottomNav extends Component {
    state = { WSModal:false, NavigateModal: false }
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };
    render() {
        return (
            <div className=" bg-default App-nav-bottom" style={{color:'white', position:'fixed', bottom:'0', height:'80px', padding:'10px', boxShadow: '0 -3px 6px rgba(0,0,0,0.16), 0 -3px 6px rgba(0,0,0,0.23)'}}>
                <div className="d-flex justify-content-around align-items-start">
                    {/* https://www.waze.com/ul?ll=3.1579%2C101.6202&navigate=yes&zoom=17 */}
                    {/* <NavLink style={{padding:'0'}} href="https://www.waze.com/ul?ll=3.1579%2C101.6202&navigate=yes&zoom=17">
                        <img src={WAZE} style={{height:'calc(55px - 30px)'}} />
                        <div style={{color:'white'}}>Waze</div>
                    </NavLink> */}
                    <div style={{padding:'0'}} onClick={() => {this.toggleModal('NavigateModal')}}>
                        <img src={MAP} style={{height:'calc(55px - 30px)'}} />
                        <div>Directions</div>
                    </div>

                    <div style={{padding:'0'}}>
                        <RSVP parentRefresh={this.props.parentRefresh} />
                    </div>

                    <div style={{padding:'0'}} onClick={() => {this.toggleModal('WSModal')}}>
                        <img src={WASEP} style={{height:'calc(55px - 30px)'}} />
                        <div>WhatsApp</div>
                    </div>
                </div>
                <div style={{color:'white', marginTop:'1rem', fontSize:'0.8rem', lineHeight:'1'}}>
                    Designed and developed by The Bride
                </div>

                {/* NAVIGATE MODAL */}
                <Modal className='modal-dialog-centered modal-default' style={{maxWidth:'425px', color:'white'}} isOpen={this.state.NavigateModal} toggle={() => {this.toggleModal('NavigateModal')}}>
                    <ModalHeader toggle={() => {this.toggleModal('NavigateModal')}}>Choose Navigation App</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col className="pr-2">
                                <a href={'https://www.google.com/maps/dir/?api=1&destination=GLAMHALL%2C+DAMANSARA'} target='_blank' style={styles.navigate} className="text-default bg-white">
                                    <img src={GOOGLE} style={{height:'calc(55px - 30px)', marginRight:'15px'}} />
                                    <div style={{textAlign:'right'}}>Open Google Maps</div>
                                </a>
                            </Col>
                            <Col className="pl-2">
                                <a href={'https://www.waze.com/ul?place=ChIJv8D0HjNPzDERs5wQQ2MhFyA&ll=3.16461380%2C101.61357680&navigate=yes&zoom=17'} target='_blank' style={styles.navigate} className="text-default bg-white">
                                    <img src={WAZE_COL} style={{height:'calc(55px - 30px)', marginRight:'15px'}} />
                                    <div style={{textAlign:'right'}}>Open Waze</div>
                                </a>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color='primary' onClick={() => {this.toggleModal('NavigateModal')}}>Do Something</Button>{' '} */}
                        <Button className='ml-auto' color='link' onClick={() => {this.toggleModal('NavigateModal')}}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                {/* WHATSAPP MODAL */}
                <Modal className='modal-dialog-centered modal-default' style={{maxWidth:'425px', color:'white'}} isOpen={this.state.WSModal} toggle={() => {this.toggleModal('WSModal')}}>
                    <ModalHeader toggle={() => {this.toggleModal('WSModal')}}>Choose number to Whatsapp</ModalHeader>
                    <ModalBody>
                        <a href={'https://wa.me/60122927350'} target='_blank' style={styles.wasepbutton} className="bg-gradient-white text-default">
                            <div>Datin Dr. Suzet</div>
                            <div>+60122927350</div>
                        </a>

                        <a href={'https://wa.me/60122838344'} target='_blank' style={styles.wasepbutton} className="bg-gradient-white text-default">
                            <div>Dato' Dr. Razak</div>
                            <div>+60122838344</div>
                        </a>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color='primary' onClick={() => {this.toggleModal('WSModal')}}>Do Something</Button>{' '} */}
                        <Button className='ml-auto text-white' color='link' onClick={() => {this.toggleModal('WSModal')}}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const styles = {
    wasepbutton: {
        padding:'10px 15px',
        margin:'5px auto 10px',
        borderRadius:'0',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    navigate: {
        padding:'10px 15px',
        margin:'5px auto 10px',
        borderRadius:'0',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        height:'calc(100% - 12px)',
    }
}
export default BottomNav;