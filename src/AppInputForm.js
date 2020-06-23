import React, {Component, Fragment} from 'react';
import YearFact from './YearFact.js'
import NumberFact from './NumberFact.js'
import DayMonthFact from './DayMonthFact.js'
import axios from 'axios';

class AppInputForm extends Component {
    constructor() {
    super();
        this.state = {
            userInput: '',
            userFact: '',
            yearIsChecked: false,
            dayMonthIsChecked: false,
            numberIsChecked: false
        }
    }

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

    handleInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            userFact: ''
        })
        let urlCallValue = '';
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
                <fieldset>
                    <div className="optionsMenu">
                        <label htmlFor="year">Year</label>
                        <input type="radio" name="inputOption" id="year" onChange={this.handleYearCheck}/>
    
                        <label htmlFor="monthDay">Month/Day</label>
                        <input type="radio" name="inputOption" id="monthDay" onChange={this.handleDayMonthCheck}/>
    
                        <label htmlFor="number">Number</label>
                        <input type="radio" name="inputOption" id="number" onChange={this.handleNumberCheck}/>
                    </div>
                </fieldset>

                {this.state.yearIsChecked ? <YearFact handleClick={this.handleClick} handleInput={this.handleInput} /> : null}

                {this.state.dayMonthIsChecked ? <DayMonthFact handleClick={this.handleClick} handleInput={this.handleInput}/> : null}

                {this.state.numberIsChecked ? <NumberFact handleClick={this.handleClick} handleInput={this.handleInput}/> : null}

                <p className={this.state.userFact ? 'animate' : null}>{this.state.userFact}</p>
            </Fragment>
        );
    }
}

export default AppInputForm;