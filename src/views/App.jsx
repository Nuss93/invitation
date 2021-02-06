import React, { Component } from 'react';
import logo from 'assets/img/logo.svg';
// import 'assets/css/App.css';
import * as firebase from 'firebase';
import Header from 'components/Header';
import InvitationDetails from 'components/InvitationDetails';
import BottomNav from 'components/BottomNav';
import Countdown from 'components/Countdown';
import Signature from 'components/Signature';
import GuestBook from 'components/GuestBook';

import { features, path } from 'config.js'

class App extends Component {
  state = {
    guestbook: []
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    firebase.database().ref(`${path}/guestbook/`).once('value').then((snapshot) => {
      if(snapshot.exists()){
        let SNAP = snapshot.val()
        let TEMP = []
        for (const key in SNAP) {
          let a = SNAP[key]
          a.key = key
          TEMP.push(a)
        }
        this.setState({guestbook:TEMP})
      }
    })
  }
  refresh = () => {
    this.fetchData()
  }
  render() {
    return (
      <div className="text-center App-container">
        <Header />
        
        <InvitationDetails />
        
        {features.countDown ? <Countdown/> : null}

        {features.guestBook ? <GuestBook data={this.state.guestbook} /> : null}

        <Signature/>

        <div style={{paddingTop:'40px'}}></div>
        
        <BottomNav parentRefresh={this.refresh} />

        <div style={{paddingTop:'75px'}}></div>
      </div>
    );
  }
}

export default App;