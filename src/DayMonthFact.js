import React, {Component, Fragment} from 'react';
import axios from 'axios';

class DayMonthFact extends Component {
    constructor() {
    super();
        this.state = {
            dayMonth: '',
            dayMonthFact: '',
        }
    }

    handleInput = (e) => {
        this.setState({
            dayMonth: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        axios({
            url: `http://numbersapi.com/${this.state.dayMonth}/date?json`,
            method: 'GET',
            dataType: 'json'
        }).then( (res) => {
            this.setState({
                dayMonthFact: res.data.text
            })
        }).catch(() => {
            alert('Invalid format, please enter numbers only')
        })
    }

    render() {
        return (
            <Fragment>
                <form>
                    <label htmlFor="dayMonthInput" className="sr-only">Day and month input</label>
                    <input className="userInput" type="text" name="dayMonthInput" id="dayMonthInput" placeholder="Enter date (MM/DD)" onChange={this.handleInput}/>
                    <button type="submit" onClick={this.handleClick}>Submit</button>
                </form>
                <p>{this.state.dayMonthFact}</p>
            </Fragment>
        )
    }
}

export default DayMonthFact