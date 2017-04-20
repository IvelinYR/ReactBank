import React, {Component} from 'react';
import {Link} from 'react-router';
import './Header.css'
import logo from './ING-logo-v2.jpg'


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/" className="back">back</Link>
                <div><img src={logo} alt="" className="logo"/></div>
            </div>
        )
    }
}