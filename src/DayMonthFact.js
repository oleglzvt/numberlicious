import React, {Component} from 'react';

class DayMonthFact extends Component {

    render() {
        return (
            <form className="animate">
                <label htmlFor="dayMonthInput" className="sr-only">Day and month input</label>
                <input value={this.props.userInput} className="userInput" type="text" name="dayMonthInput" id="dayMonthInput" placeholder="Enter a date (MM/DD)" onChange={this.props.handleInput}/>
                <button type="submit" onClick={(e) => this.props.handleClick(e)}>Submit</button>
            </form>
        )
    }
}

export default DayMonthFact