import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import WASEP from 'assets/img/whatsapp.svg'
import WAZE from 'assets/img/waze.svg'
import PHONE from 'assets/img/phone.svg'
import RSVP from 'components/RSVP.jsx';

class BottomNav extends Component {
    state = { WSModal:false }
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
                    <NavLink style={{padding:'0'}} href="https://www.waze.com/ul?ll=3.1579%2C101.6202&navigate=yes&zoom=17">
                        <img src={WAZE} style={{height:'calc(55px - 30px)'}} />
                        <div style={{color:'white'}}>Waze</div>
                    </NavLink>

                    <div style={{padding:'0'}}>
                        <RSVP/>
                    </div>

                    <div style={{padding:'0'}} onClick={() => {this.toggleModal('WSModal')}}>
                        <img src={WASEP} style={{height:'calc(55px - 30px)'}} />
                        <div>WhatsApp</div>
                    </div>
                </div>
                <div style={{color:'white', marginTop:'1rem', fontSize:'0.8rem', lineHeight:'1'}}>
                    Designed and developed by The Bride
                </div>

                {/* WHATSAPP MODAL */}
                <Modal className='modal-dialog-centered modal-default' style={{maxWidth:'425px', color:'white'}} isOpen={this.state.WSModal} toggle={() => {this.toggleModal('WSModal')}}>
                    <ModalHeader toggle={() => {this.toggleModal('WSModal')}}>Choose number to Whatsapp</ModalHeader>
                    <ModalBody>
                        <a href={'https://wa.me/60122927350'} target='_blank' style={styles.wasepbutton} className="bg-gradient-white text-default">
                            <div>Dr. Suzet</div>
                            <div>+60122927350</div>
                        </a>

                        <a href={'https://wa.me/60122838344'} target='_blank' style={styles.wasepbutton} className="bg-gradient-white text-default">
                            <div>Dr. Razak</div>
                            <div>+60122838344</div>
                        </a>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color='primary' onClick={() => {this.toggleModal('WSModal')}}>Do Something</Button>{' '} */}
                        <Button className='ml-auto' color='primary' onClick={() => {this.toggleModal('WSModal')}}>Cancel</Button>
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
    }
}
export default BottomNav;