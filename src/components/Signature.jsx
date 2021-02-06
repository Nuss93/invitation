import React, { Component } from 'react'

export default class Signature extends Component {
    render() {
        return (
            <div className="App-section">
                Want to create a customised digital invite?
                <a href={"https://api.whatsapp.com/send?phone=60172577440&text=Hey! I'm interested in creating an e-invite for my event."} target='_blank' className="text-default">
                    <div>Contact The Bride</div>
                </a>
            </div>
        )
    }
}
