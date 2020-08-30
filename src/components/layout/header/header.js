import React, { Component } from 'react'
import  logo from '../../../images/logo.jpg'
import {MessageCircle,Search} from 'react-feather'
import './header.css'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img width="100px" style={{borderRadius:"10px"}} src={logo}></img>
                <h4>App name</h4>
                <div className="icons">
                <Search className="search" size="40"></Search>
                <MessageCircle className="message" size="40"></MessageCircle>
                </div>
            </div>
        )
    }
}
