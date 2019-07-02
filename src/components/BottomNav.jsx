import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import WASEP from 'assets/img/whatsapp.svg'
import WAZE from 'assets/img/waze.svg'
import PHONE from 'assets/img/phone.svg'

class BottomNav extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around align-items-center bg-default App-nav-bottom" style={{color:'white', position:'fixed', bottom:'0', height:'65px', padding:'6px 15px 9px', boxShadow: '0 -3px 6px rgba(0,0,0,0.16), 0 -3px 6px rgba(0,0,0,0.23)'}}>
                {/* https://www.waze.com/ul?ll=3.1579%2C101.6202&navigate=yes&zoom=17 */}
                <NavLink href="https://www.waze.com/ul?ll=3.1579%2C101.6202&navigate=yes&zoom=17">
                    <img src={WAZE} style={{height:'calc(55px - 30px)'}} />
                    {/* WAZE */}
                </NavLink>
                <NavLink href="#">
                    <Button color="primary" style={styles.RSVP}>RSVP</Button>
                </NavLink>
                <NavLink href="#">
                    <img src={WASEP} style={{height:'calc(55px - 30px)'}} />
                    {/* WHATSAPP */}
                </NavLink>
            </div>
        );
    }
}

const styles = {
    RSVP : {
        fontWeight:'bold',
        background: '#91b3cd',
        position: 'absolute',
        top: '-35px',
        left:'50%',
        padding: '30px 8px',
        transform: 'translateX(-50%)',
        width: '70px',
        fontSize:'14px',
        lineHeight:'14px',
        border: 'none',
        borderRadius: '50%',
        border:'2px solid',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px -1px 6px, rgba(0, 0, 0, 0.23) 0px -1px 6px',
    }
}

export default BottomNav;