import React from 'react'
import Header from 'components/Header'
import Modal from 'components/Modal'
import FindInvForm from 'components/FindInvForm'
import SelectRsvp from 'components/SelectRsvp'
import FindInvError from 'components/FindInvError'
import styles from './Rsvp.css'
import rsvps from 'data/guests.json'
import RsvpSuccess from 'components/RsvpSuccess'

class Rsvp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            submitted: false,
            checkboxes: []
        }

        this.handleFirstChange = this.handleFirstChange.bind(this)
        this.handleLastChange = this.handleLastChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.toggleCheckbox = this.toggleCheckbox.bind(this)
        this.search = this.search.bind(this)
        this.fetchData = this.fetchData.bind(this)
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
        const result = this.search(
            this.state.firstName.toLowerCase().trim(), 
            this.state.lastName.toLowerCase().trim(), 
            rsvps.rsvps
        )
        const checkboxes = result ? result.guests.map(guest => 
            ({label: guest.firstName.concat(' ', guest.lastName), checked: true})
        ) : []
        this.setState({submitted: true, result: result, checkboxes: checkboxes})
        event.preventDefault()
      }

    toggleCheckbox(index) {
        const {checkboxes} = this.state;
        checkboxes[index].checked = !checkboxes[index].checked;
        this.setState({
            checkboxes
        });
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

    fetchData(url, data){
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Authorization': 'Bearer 8ebeea91b619bb35b906eace71d91040a6d975c0',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        .then((response) => this.setState({apiSubmitted: true}))
    }

    render () {

        return (
            <div className={styles.container}>
                <Header light />
                <Modal>
                    <div className={styles.header}>RSVP</div>
                    {!this.state.submitted && !this.state.apiSubmitted ? 
                        <div className={styles.findInvHeader}>
                            <FindInvForm
                                handleFirstChange={this.handleFirstChange}
                                handleLastChange={this.handleLastChange}
                                handleSubmit={this.handleSubmit}
                            />
                        </div> :
                        ''
                    }
                    {this.state.result && this.state.submitted && !this.state.apiSubmitted ? 
                    <SelectRsvp 
                            result={this.state.result} 
                            checkboxes={this.state.checkboxes}
                            handleBack={this.handleBack} 
                            fetchData={this.fetchData} 
                            toggleCheckbox={this.toggleCheckbox}
                            submitted={this.state.submitted}/> 
                            : 
                            ''
                    }
                    {this.state.submitted && this.state.checkboxes.length == 0 ?
                    <FindInvError handleBack={this.handleBack} /> :
                        ''
                    }
                    {this.state.apiSubmitted ? 
                    <RsvpSuccess />
                    : ''}
                </Modal>
            </div>
        )
    }

}

export default Rsvp