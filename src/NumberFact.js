import React, {Component} from 'react';

class NumberFact extends Component {
    render() {
        return (
            <form className="animate">
                <label htmlFor="numberInput" className="sr-only">Number input</label>
                <input value={this.props.userInput} className="userInput" type="text" name="numberInput" id="numberInput" placeholder="Enter a number" onChange={this.props.handleInput}/>
                <button type="submit" onClick={(e) => this.props.handleClick(e)}>Submit</button>
            </form>
        )
    }
}

export default NumberFact