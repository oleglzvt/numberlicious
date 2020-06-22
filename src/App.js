import React, {Component} from 'react';
import './App.css';
import AppInputForm from './AppInputForm.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Numberlicious</h1>
        <ul className="description">
          <li><span>Step 1:</span> Choose the category</li>
          <li><span>Step 2:</span> Enter a number and click "Submit"</li>
          <li><span>Step 3:</span> Discover an interesting fact about your number</li>
        </ul>
      
        <AppInputForm />
      </div>
    );
  }
}

export default App;
