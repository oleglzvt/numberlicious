import React, {Component, Fragment} from 'react';
import YearFact from './YearFact.js'
import NumberFact from './NumberFact.js'
import DayMonthFact from './DayMonthFact.js'
import axios from 'axios';

class AppInputForm extends Component {
    
    constructor() {
        super();
        // initial state values
        this.state = {
            userInput: '',
            userFact: '',
            yearIsChecked: false,
            dayMonthIsChecked: false,
            numberIsChecked: false
        }
    }

    // check which options was selected by user
    handleYearCheck = () => {
        this.setState({
            yearIsChecked: true,
            dayMonthIsChecked: false,
            numberIsChecked: false,
            userFact: ''
        })
    }

    handleDayMonthCheck = () => {
        this.setState({
            yearIsChecked: false,
            dayMonthIsChecked: true,
            numberIsChecked: false,
            userFact: ''
        })
    }

    handleNumberCheck = () => {
        this.setState({
            yearIsChecked: false,
            dayMonthIsChecked: false,
            numberIsChecked: true,
            userFact: '',
        })
    }
    
    // update the user input state value
    handleInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    // on submit button click make an API call
    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            userFact: ''
        })
        
        // variable used in the API call
        // checks for which keyword showld be used in the call URL
        let urlCallValue = '';
        // let dayMonthPattern = '\b(0?[1-9]|1[0-2])/(0?[1-9]|[12][0-9]|3[01])\b'
        if (this.state.yearIsChecked) {
            urlCallValue = 'year';
        } else if (this.state.dayMonthIsChecked) {
            urlCallValue = 'date'
        } else if (this.state.numberIsChecked) {
            urlCallValue = 'math'
        }
        axios({
            url: 'https://proxy.hackeryou.com',
            dataType: 'json',
            method:'GET',
            params: {
                reqUrl: `http://numbersapi.com/${this.state.userInput}/${urlCallValue}?json`,
                xmlToJSON: false,
            }
        }).then( (res) => {
            this.setState({
                userFact: res.data
            })
        }).catch(() => {
            alert('Something Went wrong! Please follow the input guideline in brackets.')
        })
    }
    
    render () {
        return (
            <Fragment>
                {/* <fieldset> */}
                    <div className="optionsMenu">
                        <button onClick={this.handleYearCheck}>Year</button>
                        <button onClick={this.handleDayMonthCheck}>Month/Day</button>
                        <button onClick={this.handleNumberCheck}>Number</button>
                    </div>
                {/* </fieldset> */}

                {/* Check for which component to render based on the user choice */}
                {this.state.yearIsChecked ? <YearFact handleClick={this.handleClick} handleInput={this.handleInput} /> : null}

                {this.state.dayMonthIsChecked ? <DayMonthFact handleClick={this.handleClick} handleInput={this.handleInput}/> : null}

                {this.state.numberIsChecked ? <NumberFact handleClick={this.handleClick} handleInput={this.handleInput}/> : null}

                <p className={this.state.userFact ? 'animate' : null}>{this.state.userFact}</p>
            </Fragment>
        );
    }
}

export default AppInputForm;