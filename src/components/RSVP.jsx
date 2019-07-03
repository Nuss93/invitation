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
            modalFindRSVP:false,
            collapseNOT: false,
            collapseMAYBE: false,
            collapseYES: false,
            emailChecker: [],

            response: '',
            attendee_check:'',
            attendee_name:'',
            // attendee_pax: 0,
            attendee_email:'',
            // attendee_message:'',
        };
    }

    toggleFindRSVP = () => {
        this.fetchRSVP()
        this.setState({ modalFindRSVP : !this.state. modalFindRSVP })
    }

    closeOpen = () => {
        let that = this;
        let access = this.props.event.RSVP
        let ErrorHandler = this.state
        console.log(access);
        

        // error handler for email
        if(ErrorHandler.attendee_email === ''){
            alert('WARNING!\nPlease fill in your email.')
            return;
        }
        
        // CHECKS TO SEE IF EMAIL ALREADY EXIST
        let check = that.state.emailChecker.map((x) => {
            return x.email;
        }).indexOf(this.state.attendee_email);

        console.log(check);

        if(access === 'open'){
            if(check !== -1){

                let r = window.confirm('Seems like you have already sent us an RSVP.\nYou responded as ' + this.state.emailChecker[check].response.toUpperCase() + '. Would you like to change your RSVP?')
                
                // CHECK IF USER WANTS TO EDIT THEIR RSVP
                if(!r){
                    console.log('Cancelled');
                    this.toggleFindRSVP()
                    return;
                }
                // console.log(that.state.emailChecker[check]);
                this.setState({
                    attendee_check : that.state.emailChecker[check],
                    attendee_name : this.state.emailChecker[check].name
                }, () => {console.log(this.state.attendee_name)})

                this.toggleFindRSVP()
                this.toggleRSVP()
                return
            }
            
            this.toggleFindRSVP()
            this.toggleRSVP()
        }
        if(access === 'closed'){
            // alert('Closed event')
            if(check === -1){
                alert('It seems you are not invited.\n\nIf you think this was a mistake, please check with the event hosts for the email addresses that they have added you to the guestlist.')
                return;
            }

            // let r = window.confirm('Seems like you have already sent us an RSVP.\nYou responded as ' + this.state.emailChecker[check].response.toUpperCase() + '. Would you like to change your RSVP?')
            // // CHECK IF USER WANTS TO EDIT THEIR RSVP
            // if(!r){
            //     console.log('Cancelled');
            //     this.toggleFindRSVP()
            //     return;
            // }

            this.setState({
                attendee_check : that.state.emailChecker[check],
                attendee_name : this.state.emailChecker[check].name
            }, () => {console.log(this.state.attendee_name, this.state.attendee_check)})
            this.toggleFindRSVP()
            this.toggleRSVP()
        }
        
    }

    toggleRSVP = () => {
        this.setState({
            modalRSVP : !this.state. modalRSVP,
            collapseNOT: false,
            collapseMAYBE: false,
            collapseYES: false,
        })
    }

    toggleCollapse = (response) => {
        this.setState({
            response:response,
            // attendee_name:'',
            // attendee_pax: 0,
            // attendee_message:'',
        }, () => {console.log(this.state.response)})

        if(response === 'notgoing'){
            this.setState(state => ({ collapseNOT: true }));
            this.setState(state => ({ collapseMAYBE: false }));
            this.setState(state => ({ collapseYES: false }));
        }
        if(response === 'maybe'){
            this.setState(state => ({ collapseNOT: false }));
            this.setState(state => ({ collapseMAYBE: true }));
            this.setState(state => ({ collapseYES: false }));
        }
        if(response === 'going'){
            this.setState(state => ({ collapseNOT: false }));
            this.setState(state => ({ collapseMAYBE: false }));
            this.setState(state => ({ collapseYES: true }));
        }
    }

    componentDidMount() {
    }

    fetchRSVP = () => {
        let that = this;
        let REF = 'wedding/' + that.props.mobx_auth.eventID + '/_events/' + this.props.event.key +'/attendance/checker'
        firebase.database().ref(REF).on('value', function(snapshot){
            let EMAIL = [];
            if(snapshot.exists()){
                console.log(snapshot.val());
                let keys = Object.keys(snapshot.val());
                keys.forEach((attendee_id) => {
                    let a = {}
                    a.email = snapshot.val()[attendee_id].email
                    a.key = attendee_id
                    a.name = snapshot.val()[attendee_id].name
                    a.response = snapshot.val()[attendee_id].response
                    EMAIL.push(a)
                })

                console.log(EMAIL)

                that.setState({emailChecker:EMAIL})
            } else {
                console.log('no');
            }
        })
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    _confirm = () => {
        if(this.props.disabled) {
            this.setState({
                attendee_email:'',
                attendee_name:'',
                attendee_check:'',
                response:'',
            })
            // alert('This is a preview')
            return;
        }
        
        let that = this;
        let access = this.props.event.RSVP;
        let ErrorHandler = this.state;
        console.log(this.state.attendee_name, this.state.attendee_email);

        if(ErrorHandler.attendee_name === '' || ErrorHandler.response === ''){
            alert('WARNING!\nPlease choose your attendance and enter your details.');
            return;
        }

        let REF = 'wedding/'
        if(access === 'open'){
            console.log('key',this.state.attendee_check.key);
            let ATTENDEE_EMAIL = this.state.attendee_email;
            let ATTENDEE_NAME = this.state.attendee_name;
            let RESPONSE = this.state.response;
            let SAVE_KEY
            
            if(this.state.attendee_check === ''){
                SAVE_KEY = firebase.database().ref(REF + that.props.mobx_auth.eventID + '/_events/' + this.props.event.key +'/attendance/' + this.state.response).push().getKey()
            } else {
                SAVE_KEY = this.state.attendee_check.key

                firebase.database().ref(REF + that.props.mobx_auth.eventID + '/_events/' + this.props.event.key +'/attendance/' + this.state.attendee_check.response + '/' + SAVE_KEY).remove()
            }
            console.log(SAVE_KEY);
            // console.log('OPEN check then save terus ke firebase');

            firebase.database().ref(REF + that.props.mobx_auth.eventID + '/_events/' + this.props.event.key +'/attendance/' + this.state.response + '/' + SAVE_KEY).update({
                name: ATTENDEE_NAME,
                email: ATTENDEE_EMAIL,
            }).then(() => {
                firebase.database().ref(REF + that.props.mobx_auth.eventID + '/_events/' + this.props.event.key +'/attendance/checker/' + SAVE_KEY).update({
                    name: ATTENDEE_NAME,
                    email: ATTENDEE_EMAIL,
                    response: RESPONSE,
                })
            }).then(() => {
                this.setState({
                    attendee_email:'',
                    attendee_name:'',
                    attendee_check:'',
                    response:'',
                })
            })
        }
        if(access === 'closed'){
            console.log('CLOSED check dulu baru save');
            console.log('check',this.state.attendee_check);
            let ATTENDEE_EMAIL = this.state.attendee_email;
            let ATTENDEE_NAME = this.state.attendee_name;
            // this RESPONSE is meant for checking dah respond ke belum
            let RESPONSE = this.state.attendee_check.response;
            let SAVE_KEY = this.state.attendee_check.key
            let check = that.state.emailChecker.map((x) => {
                return x.email;
            }).indexOf(this.state.attendee_email);

            if(RESPONSE !== this.state.response) {
                firebase.database().ref(REF + that.props.mobx_auth.eventID + '/_events/' + this.props.event.key +'/attendance/' + RESPONSE + '/' + SAVE_KEY).remove()
            }
            console.log('old',SAVE_KEY);            
            
            firebase.database().ref(REF + that.props.mobx_auth.eventID + '/_events/' + this.props.event.key +'/attendance/' + this.state.response + '/' + SAVE_KEY).update({
                name: ATTENDEE_NAME,
                email: ATTENDEE_EMAIL,
            }).then(() => {
                firebase.database().ref(REF + that.props.mobx_auth.eventID + '/_events/' + this.props.event.key +'/attendance/checker/' + SAVE_KEY).update({
                    name: ATTENDEE_NAME,
                    email: ATTENDEE_EMAIL,
                    response: this.state.response,
                })
            }).then(() => {
                this.setState({
                    attendee_email:'',
                    attendee_name:'',
                    attendee_check:'',
                    response:'',
                })
            })

        }

    }
    


    render() {
        
        
        return (
            <div>
                {/* <Button onClick={this.toggleFindRSVP} style={{background:`${this.props.primary}`,borderColor:`${this.props.primary}`, margin: '3px 0', fontSize:'1.2rem'}}>RSVP</Button> */}
                <Button onClick={this.toggleFindRSVP} color="primary" style={{...styles.RSVP, margin:'0'}}>RSVP</Button>

                <Modal isOpen={this.state.modalFindRSVP} toggle={this.toggleFindRSVP}>
                    <ModalHeader toggle={this.toggleFindRSVP}>Find Your Invitation</ModalHeader>
                    <ModalBody>
                        {/* <p className="text-center h3">This is an invitation only exclusive event</p> */}
                        <p>Fill in details below to find your invitation</p>
                        <Form>
                            <FormGroup>
                                <Label for='attendee_email'>Email</Label>
                                <Input type='text' name='attendee_email' id='attendee_email' onChange={this.handleChange}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                    <ModalFooter>
                        <Button color='dark' onClick={() => {
                            this.closeOpen()
                        }}>Next</Button>{' '}
                        <Button color='darkest' onClick={this.toggleFindRSVP}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalRSVP} toggle={this.toggleRSVP}>
                    <ModalHeader toggle={this.toggleRSVP}>RSVP</ModalHeader>
                    <ModalBody>
                        <p className="text-center h3">Confirm attendance</p>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Button onClick={() => {this.toggleCollapse('notgoing')}} style={{flex:'1', margin:'0 5px'}} outline color="darkest">Not Going</Button>{' '}
                            <Button onClick={() => {this.toggleCollapse('maybe')}} style={{flex:'1', margin:'0 5px'}} outline color="darkest">Maybe</Button>{' '}
                            <Button onClick={() => {this.toggleCollapse('going')}} style={{flex:'1', margin:'0 5px'}} outline color="darkest">Going</Button>
                        </div>

                        <Collapse isOpen={this.state.collapseNOT} >
                            <CardBody style={{borderTop:'1px solid ' + `${this.props.secondary}`, marginTop:'20px'}}>
                                <p className="text-center h4">Not Going</p>
                                <Form>
                                    <FormGroup>
                                        <Label for='attendee_name'>Name</Label>
                                        <Input type='text' name='attendee_name' id='attendee_name' value={this.state.attendee_name} onChange={this.handleChange}/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for='attendee_email'>Email</Label>
                                        <Input type='text' value={this.state.attendee_email} name='attendee_email' id='attendee_email' onChange={this.handleChange}/>
                                    </FormGroup>

                                    {/* <FormGroup>
                                        <Label for='attendee_message'>Send your wishes</Label>
                                        <Input type='textarea' name='attendee_message' id='attendee_message' onChange={this.handleChange}/>
                                    </FormGroup> */}
                                </Form>
                            </CardBody>
                        </Collapse>

                        <Collapse isOpen={this.state.collapseMAYBE} >
                            <CardBody style={{borderTop:'1px solid ' + `${this.props.secondary}`, marginTop:'20px'}}>
                                <p className="text-center h4">Maybe</p>
                                <Form>
                                    <FormGroup>
                                        <Label for='attendee_name'>Name</Label>
                                        <Input type='text' name='attendee_name' id='attendee_name' value={this.state.attendee_name}  onChange={this.handleChange}/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for='attendee_email'>Email</Label>
                                        <Input type='text' value={this.state.attendee_email} name='attendee_email' id='attendee_email' onChange={this.handleChange}/>
                                    </FormGroup>

                                    {/* <FormGroup>
                                        <Label for='attendee_message'>Send your wishes</Label>
                                        <Input type='textarea' name='attendee_message' id='attendee_message' onChange={this.handleChange}/>
                                    </FormGroup> */}
                                </Form>
                            </CardBody>
                        </Collapse>

                        <Collapse isOpen={this.state.collapseYES} >
                            <CardBody style={{borderTop:'1px solid ' + `${this.props.secondary}`, marginTop:'20px'}}>
                                <p className="text-center h4">Going</p>
                                <Form>
                                    <FormGroup >
                                        <Label for='attendee_name'>Name</Label>
                                        <Input type='text' name='attendee_name' id='attendee_name' value={this.state.attendee_name} onChange={this.handleChange}/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for='attendee_email'>Email</Label>
                                        <Input type='text' value={this.state.attendee_email} name='attendee_email' id='attendee_email' onChange={this.handleChange}/>
                                    </FormGroup>

                                    {/* <FormGroup>
                                        <Label for='attendee_message'>Send your wishes</Label>
                                        <Input type='textarea' name='attendee_message' id='attendee_message' onChange={this.handleChange}/>
                                    </FormGroup> */}
                                </Form>
                            </CardBody>
                        </Collapse>

                        <div style={{marginTop:'15px'}}>
                            <Button style={{width:'100%'}} color='dark' onClick={() => {
                                this._confirm()
                                this.toggleRSVP()
                                this.toggleFindRSVP()
                            }}>Save and RSVP for another member of your party</Button>
                        </div>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button color='dark' onClick={() => {
                            this._confirm()
                            this.toggleRSVP()
                        }}>Confirm</Button>{' '}
                        <Button color='darkest' onClick={this.toggleRSVP}>Cancel</Button>
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