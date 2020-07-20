import React, {Component} from 'react';

class YearFact extends Component {
    render() {
        return (
            <form className="animate">
                <label htmlFor="yearInput" className="sr-only">Year input</label>
                <input value={this.props.userInput} className="userInput" type="text" name="yearInput" id="yearInput" placeholder="Enter a year (YYYY)" onChange={this.props.handleInput}/>
                <button type="submit" onClick={(e) => this.props.handleClick(e)}>Submit</button>
            </form>
        )
    }
}

export default YearFact