import React, {Component, Fragment} from 'react';
import YearFact from './YearFact.js'
import NumberFact from './NumberFact.js'
import DayMonthFact from './DayMonthFact.js'

class AppInputForm extends Component {
    constructor() {
    super();
        this.state = {
            yearIsChecked: false,
            dayMonthIsChecked: false,
            numberIsChecked: false
        }
    }

    handleYearCheck = () => {
        this.setState({
            yearIsChecked: true,
            dayMonthIsChecked: false,
            numberIsChecked: false
        })
    }

    handleDayMonthCheck = () => {
        this.setState({
            yearIsChecked: false,
            dayMonthIsChecked: true,
            numberIsChecked: false
        })
    }

    handleNumberCheck = () => {
        this.setState({
            yearIsChecked: false,
            dayMonthIsChecked: false,
            numberIsChecked: true
        })
    }
    
    render () {
        return (
            <Fragment>
                <fieldset className="optionsMenu">
                    <label htmlFor="year">Year</label>
                    <input type="radio" name="inputOption" id="year" onChange={this.handleYearCheck}/>

                    <label htmlFor="monthDay">Month/Day</label>
                    <input type="radio" name="inputOption" id="monthDay" onChange={this.handleDayMonthCheck}/>

                    <label htmlFor="number">Number</label>
                    <input type="radio" name="inputOption" id="number" onChange={this.handleNumberCheck}/>
                </fieldset>

                {this.state.yearIsChecked ? <YearFact /> : null}
                {this.state.dayMonthIsChecked ? <DayMonthFact /> : null}
                {this.state.numberIsChecked ? <NumberFact /> : null}
            </Fragment>
        );
    }
}

export default AppInputForm;