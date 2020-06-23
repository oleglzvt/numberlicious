import React, {Component} from 'react';

class DayMonthFact extends Component {
    render() {
        return (
            <form>
                <label htmlFor="dayMonthInput" className="sr-only">Day and month input</label>
                <input className="userInput" type="text" name="dayMonthInput" id="dayMonthInput" placeholder="Enter date (MM/DD)" onChange={this.props.handleInput}/>
                <button type="submit" onClick={(e) => this.props.handleClick(e)}>Submit</button>
            </form>
        )
    }
}

export default DayMonthFact