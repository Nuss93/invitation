import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

export default class Countdown extends Component {
    state = { countDownDate: new Date("27 February 2021"), days: 0, hours: 0, minutes: 0, seconds: 0 }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            // code goes here
            var now = new Date().getTime();
            var timeleft = this.state.countDownDate - now;
                
            var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            console.log(days, hours, minutes, seconds);

            this.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds })
        }, 1000)
    }
    
    _renderTime = () => {
        let display
        console.log(this.state.countDownDate);

        display =
        <Row>
            <Col>
                <div style={styles.countdownNumber}>{this.state.days}</div>
                <p style={styles.countdownText}>days</p>
            </Col>
            <Col>
                <div style={styles.countdownNumber}>{this.state.hours}</div>
                <p style={styles.countdownText}>hours</p>
            </Col>
            <Col>
                <div style={styles.countdownNumber}>{this.state.minutes}</div>
                <p style={styles.countdownText}>minutes</p>
            </Col>
            <Col>
                <div style={styles.countdownNumber}>{this.state.seconds}</div>
                <p style={styles.countdownText}>seconds</p>
            </Col>
        </Row>

        return display
    }

    render() {
        return (
            <>
                <div className="App-section">
                    <h3 className="font-weight-bold text-uppercase m-0">Countdown</h3>
                    {this._renderTime()}
                </div>
                
                <hr/>
            </>
        )
    }
}

const styles = {
    countdownNumber: {
        fontSize: '2rem',
        fontwWight:'bold'
    },
    countdownText: {
        fontWeight:'bold',
        margin: '0'
    }
}
