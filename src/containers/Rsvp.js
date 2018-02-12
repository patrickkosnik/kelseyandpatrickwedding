import React from 'react'
import Header from 'components/Header'
import Modal from 'components/Modal'
import FindInvForm from 'components/FindInvForm'
import FindInvError from 'components/FindInvError'
import styles from './Rsvp.css'
import guests from 'data/guests.json'


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
            submitted: false
        })
    }
    
      handleSubmit(event) {
        this.setState({submitted: true})
        event.preventDefault()
      }

    render () {

        return (
            <div className={styles.container}>
                <Header light />
                <Modal>
                    <div className={styles.header}>RSVP</div>
                    {!this.state.submitted ? 
                        <div className={styles.findInvHeader}>
                            <FindInvForm
                                handleFirstChange={this.handleFirstChange}
                                handleLastChange={this.handleLastChange}
                                handleSubmit={this.handleSubmit}
                            />
                        </div> :
                        <FindInvError handleBack={this.handleBack}/> 
                    }
                </Modal>
                {/* <Modal>
                <div className={styles.header}>RSVP</div>
                {!this.state.submitted ? 
                    <FindInvForm
                        handleFirstChange={this.handleFirstChange}
                        handleLastChange={this.handleLastChange}
                        handleSubmit={this.handleSubmit}
                    /> :
                    <FindInvError handleBack={this.handleBack}/> 
                }
                </Modal>
                <div>{guests.guests.map(guest => 
                <div>
                    First Name: {guest.firstName} <br />
                    Last Name: {guest.lastName} <br />
                    { guest.partnerFirst ? <div>First Name: {guest.partnerFirst}<br /></div> : ''}
                    { guest.partnerFirst ? <div>Last Name: {guest.partnerLast}<br /></div> : ''}
                    Plus Ones: {guest.plusOnes.map(
                        plusOne => <span>{plusOne}, </span>
                    )
                    }
                    <br /><br />
                </div>)
            }</div> */}
            </div>
        )
    }

}

export default Rsvp