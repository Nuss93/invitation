import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse,
    Form, FormGroup, Label, Input, FormText, CardBody, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';

class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalRSVP:false,
            emailChecker: [],
            loadButt: false,
            response: '',
            name:'',
            pax: 0,
            message:'',
        };
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    toggleRSVP = () => {
        this.setState({
            modalRSVP : !this.state. modalRSVP,
        })
    }
    // componentDidMount() {
    //     // this.fetchRSVP()
    // }
    // componentWillUnmount() {
    //     // let REF = 'RSVP/'
    //     // firebase.database().ref(REF).off()
    // }
    // fetchRSVP = () => {
    //     let that = this;
    //     let REF = 'RSVP/'

    //     firebase.database().ref(REF).on('value', function(snapshot){
    //         let EMAIL = [];
    //         if(snapshot.exists()){
    //             console.log(snapshot.val());
    //             let keys = Object.keys(snapshot.val());
    //             keys.forEach((attendee_id) => {
    //                 let a = {}
    //                 a.email = snapshot.val()[attendee_id].email
    //                 a.key = attendee_id
    //                 a.name = snapshot.val()[attendee_id].name
    //                 a.response = snapshot.val()[attendee_id].response
    //                 EMAIL.push(a)
    //             })

    //             console.log(EMAIL)

    //             that.setState({emailChecker:EMAIL})
    //         } else {
    //             console.log('no on has RSVP yet');
    //         }
    //     })
    // }

    _markResponse = (response) => {
        this.setState({response: response})
    }
    _save = () => {
        const { response, name, pax, message } = this.state;
        this.setState({loadButt: true})
        if(response === '') {
            alert('Please pick your response!')
            return;
        }
        if(name === '') {
            alert('Please fill in your name!')
            return;
        }
        console.log(name, response, pax, message);
        
        if(response === 'going'){
            firebase.database().ref('RSVP/going/').push({
                name: name,
                pax: parseInt(pax),
                message: message,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            }).then(() => {
                this.setState({ response:'', name:'', pax:0, message:'', loadButt: false });
                this.toggleRSVP();
            })
        }
        if(response === 'not going'){
            firebase.database().ref('RSVP/not_going/').push({
                name: name,
                // pax: pax,
                message: message,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            }).then(() => {
                this.setState({ response:'', name:'', pax:0, message:'', loadButt: false });
                this.toggleRSVP();
            })
        }
    }

    _renderResponse = () => {
        let display, form_content, {response} = this.state;

        if(response === ''){
            form_content = <div className="text-center mt-4 mb-3">Click on the buttons above to mark your attendance</div>
        }
        if(response !== ''){
            form_content =
            <div className="mt-4 mb-3">
                <FormGroup>
                    <Label for='name'><span style={{fontSize:'1.3rem'}}>Name</span></Label>
                    <Input type='text' name='name' id='name' onChange={this.handleChange}/>
                </FormGroup>

                {
                    response === 'going' ?
                    <FormGroup>
                        <Label for='pax'><span style={{fontSize:'1.3rem'}}>How many people will be joining you?</span><br/>(Spouse, partner, family member)</Label>
                        <Input type='number' name='pax' id='pax' onChange={this.handleChange}/>
                    </FormGroup> : null
                }

                <FormGroup>
                    <Label for='message'><span style={{fontSize:'1.3rem'}}>Leave a message for the newlyweds</span> (Optional)</Label>
                    <Input type='textarea' name='message' id='message' onChange={this.handleChange}/>
                </FormGroup>
            </div>
        }


        display =
        <>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Button onClick={() => {this._markResponse('not going')}} style={{flex:'1', margin:'0 5px'}} color="danger">Not Going</Button>{' '}
                
                <Button onClick={() => {this._markResponse('going')}} style={{flex:'1', margin:'0 5px'}} color="success">Going</Button>
            </div>

            {form_content}
        </>
        

        return display;
    }
    _renderButton = () => {
        let display, { loadButt } = this.state;

        if(loadButt === false){
            display = <Button color='primary' onClick={this._save}>Confirm</Button>
        }
        if(loadButt === true){
            display = <Button disabled color='primary' style={{display:'flex', alignItems:'center'}} onClick={this._save}><div>Saving</div><div className="buttonloader ml-2"></div></Button>
        }

        return display;
    }
    render() {
        return (
            <div>
                <Button onClick={this.toggleRSVP} color="primary" style={{...styles.RSVP, margin:'0'}}>RSVP</Button>

                {/* ===toggleRSVP=== */}
                <Modal className="modal-dialog-centered modal-default" style={{maxWidth:'425px', color:'white'}} isOpen={this.state.modalRSVP} toggle={this.toggleRSVP}>
                    <ModalHeader toggle={this.toggleRSVP}>RSVP</ModalHeader>
                    <ModalBody>
                        <p className="text-center mb-4 h4 text-white">Confirm attendance</p>

                        {this._renderResponse()}
                    </ModalBody>
                    <ModalFooter>
                        {this._renderButton()}{' '}
                        <Button className='ml-auto text-white' color='link' onClick={() => {
                            this.setState({ response:'', name:'', pax:0, message:'' });
                            this.toggleRSVP();
                        }}>Cancel</Button>
                    </ModalFooter>
                </Modal>
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
export default RSVP;