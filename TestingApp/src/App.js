import React, {Component} from 'react';
import './App.css';

import Header from './components/Header'

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}