import React, { Component } from 'react';
import HeaderBg from 'assets/img/header.PNG'

class Header extends Component {
    render() {
        return (
            <div style={{background:`url(${HeaderBg})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat', width:'100%', paddingTop:'calc(152% - 55px)'}}>
            </div>
        );
    }
}

export default Header;