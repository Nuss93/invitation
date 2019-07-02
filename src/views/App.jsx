import React, { Component } from 'react';
import logo from 'assets/img/logo.svg';
// import 'assets/css/App.css';
import * as firebase from 'firebase';
import Header from 'components/Header';
import InvitationDetails from 'components/InvitationDetails';
import BottomNav from 'components/BottomNav';

class App extends Component {
  render() {
    return (
      <div className="text-center App-container">
        <Header />

        <InvitationDetails />

        <BottomNav/>

        <div style={{paddingTop:'75px'}}></div>
      </div>
    );
  }
}

export default App;