import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class GuestBook extends Component {
    static propTypes = {
        data: PropTypes.array,
    }
    _renderGuestbookData = () => {
        let display
        let SORT = this.props.data.sort((a,b) => b.timestamp - a.timestamp)

        display = this.props.data.length !== 0 ? 
            <div className="container-scroll no-padding pr-1" style={{maxHeight:'250px', overflowY:'scroll'}}>
                {SORT.map((data,index) => (
                    <div key={index} className="p-3"
                        style={{
                            background:'#E3DDC2', borderRadius: '10px',
                            marginBottom: index !== this.props.data.length - 1 ? '1rem' : '0',
                        }}
                    >
                        <div style={{fontSize:'1.2rem'}} className="m-0 font-weight-bold text-left">{data.name}</div>
                        <div className="mb-2 text-left" style={{lineHeight:'1'}}>{data.attendance}</div>
                        
                        <div className="m-0 text-left">"{data.message}"</div>
                        <div className="text-right"><small>{new Date(data.timestamp).toLocaleString('en-MY')}</small></div>
                    </div>
                ))}
            </div>
        : <div className="p-3">No one has signed the guestbook yet :(<br/><br/>Be the first to leave a message! Click on RSVP to respond your attendance and sign the guestbook.</div>

        return display
    }
    render() {
        return (
            <>
                <div className="App-section" style={{paddingLeft:'1.5rem', paddingRight:'1.5rem'}}>
                    <h3 className="font-weight-bold text-uppercase m-0">Guest Book</h3>
                    <div className="mb-3">Click on RSVP to confirm your attendance and sign the guestbook!</div>
                    {this._renderGuestbookData()}
                </div>
                
                <hr/>
            </>
        )
    }
}
