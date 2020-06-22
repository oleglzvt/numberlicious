import React, {Component, Fragment} from 'react';
import axios from 'axios';

class YearFact extends Component {
    constructor() {
    super();
        this.state = {
            year: '',
            yearFact: '',
        }
    }

    handleInput = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        axios({
            url: 'https://proxy.hackeryou.com',
            dataType: 'json',
            method:'GET',
            params: {
                reqUrl: `http://numbersapi.com/${this.state.year}/year?json`,
                xmlToJSON: false,
            }
        }).then( (res) => {
            this.setState({
                yearFact: res.data
            })
        }).catch(() => {
            alert('Invalid format, please enter numbers only')
        })
    }

    
    render() {
        return (
            <Fragment>
                <form>
                    <label htmlFor="yearInput" className="sr-only">Year input</label>
                    <input className="userInput" type="text" name="yearInput" id="yearInput" placeholder="Enter a year (YYYY)" onChange={this.handleInput}/>
                    <button type="submit" onClick={this.handleClick}>Submit</button>
                </form>
                <p>{this.state.yearFact}</p>
            </Fragment>
        )
    }
}

export default YearFact