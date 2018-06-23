import React from 'react'
import Header from 'components/Header'
import Modal from 'components/Modal'
import FindInvForm from 'components/FindInvForm'
import FindInvError from 'components/FindInvError'
import styles from './Rsvp.css'
import rsvps from 'data/guests.json'


class Rsvp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            submitted: false
        }

        this.handleFirstChange = this.handleFirstChange.bind(this)
        this.handleLastChange = this.handleLastChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.search = this.search.bind(this)
    }

    handleFirstChange(event) {
        this.setState({firstName: event.target.value})
    }
      
    handleLastChange(event) {
        this.setState({lastName: event.target.value})
    }

    handleBack(event) {
        this.setState({
            firstName: '',
            lastName: '',
            result: {},
            submitted: false
        })
    }
    
    handleSubmit(event) {
        const result = this.search(this.state.firstName.toLowerCase(), this.state.lastName.toLowerCase(), rsvps.rsvps)
        this.setState({submitted: true, result: result})
        event.preventDefault()
      }

    search(firstName, lastName, myArray){
        for (var i=0; i < myArray.length; i++) {
            for (var j=0; j < myArray[i].guests.length; j++){
                if (myArray[i].guests[j].firstName.toLowerCase() === firstName &&
                    myArray[i].guests[j].lastName.toLowerCase() === lastName) {
                    return myArray[i];
                }
              }
        }
    }

    render () {

        return (
            <div className={styles.container}>
                <Header light />
                <Modal>
                    <div className={styles.header}>RSVP</div>
                    <div className={styles.info}>Follow the instructions below to RSVP</div>
                    {!this.state.submitted ? 
                        <div className={styles.findInvHeader}>
                            <FindInvForm
                                handleFirstChange={this.handleFirstChange}
                                handleLastChange={this.handleLastChange}
                                handleSubmit={this.handleSubmit}
                            />
                        </div> :
                        <FindInvError result={this.state.result} handleBack={this.handleBack}/> 
                    }
                </Modal>
              
                {/* <div style={{backgroundColor:"#FFF"}}>{rsvps.rsvps.map(rsvp => 
                <div key={rsvp.guests[0].firstName + rsvp.guests[0].lastName}>
                    {rsvp.guests.map(guest =>
                        <div key={guest.firstName + guest.LastName}>
                        First Name: {guest.firstName} <br />
                        Last Name: {guest.lastName}
                        </div>
                    )}
                </div>)
            }</div>  */}
            </div>
        )
    }

}

export default Rsvp