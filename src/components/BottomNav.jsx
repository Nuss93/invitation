import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import WASEP from 'assets/img/whatsapp.svg'
import WAZE from 'assets/img/waze.svg'
import PHONE from 'assets/img/phone.svg'
import RSVP from 'components/RSVP.jsx';

class BottomNav extends Component {
    render() {
        return (
            <div className=" bg-default App-nav-bottom" style={{color:'white', position:'fixed', bottom:'0', height:'80px', padding:'15px 15px 10px', boxShadow: '0 -3px 6px rgba(0,0,0,0.16), 0 -3px 6px rgba(0,0,0,0.23)'}}>
                <div className="d-flex justify-content-around align-items-start">
                    {/* https://www.waze.com/ul?ll=3.1579%2C101.6202&navigate=yes&zoom=17 */}
                    <NavLink style={{padding:'0'}} href="https://www.waze.com/ul?ll=3.1579%2C101.6202&navigate=yes&zoom=17">
                        <img src={WAZE} style={{height:'calc(55px - 30px)'}} />
                        {/* WAZE */}
                    </NavLink>

                    <div style={{padding:'0'}}>
                        <RSVP/>
                    </div>

                    <div style={{padding:'0'}} onClick={() => {alert('Hewwo.\nFunction ni tak siap lagi hohoho!!')}}>
                        <img src={WASEP} style={{height:'calc(55px - 30px)'}} />
                        {/* WHATSAPP */}
                    </div>
                </div>
                <div style={{color:'white', marginTop:'1rem', fontSize:'0.8rem'}}>
                    Designed and developed by The Bride
                </div>
            </div>
        );
    }
}

export default BottomNav;