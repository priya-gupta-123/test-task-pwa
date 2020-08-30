import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap'
import Logo from '../../images/logo.jpg'
import firebase from '../../firebase/config'
import {history} from '../../history'
import './login.css'

export default class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
       email:'',
       password:''
    }
  }
  

  login=(e)=>{
    e.preventDefault()
    const {email,password}= this.state
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((re)=>{
      localStorage.setItem('key',re.user)
      history.push('/home')
    }).catch((e)=>{
      console.log(e)
    })
    console.log({
      email,password
    })
  }



    render() {
        return (
            <>
            <div className="container">
                <div className="logo">
                    <img src={Logo} ></img>
            </div>
            </div>
            <p className="container">We offer a digital services platform for farmers and farming households. As Myanmar leapfrogged from no to full connectivity and 100% smartphone use within 2.5 years, we believe the infrastructure is now available to deliver a solution. Through our free digital platform Golden Paddy we support millions of farmers, retailers, and other users in their daily business and information requirements.We give demand based advice to farmers, through this advice we make knowledge accessible to make farmers more independent. We support organisations that want to connect to the rural community in Myanmar, offering brand awareness opportunity and rich data insights from Golden Paddy.</p>   
            <div className="container">
              <div className="row">

     <div className="col-md-3">&nbsp;</div>
     <div className="col-md-6">
    <Form >
  <Form.Group controlId="formBasicEmail" className="loginGroup" >
    <label><b>Email</b></label>
    <input type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} placeholder="Enter Email" className="input"></input>
  </Form.Group>

  <Form.Group controlId="formBasicPassword" className="loginGroup">
  <label><b>password</b></label>
  <input type="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} placeholder="Enter password" className="input"></input>
  </Form.Group>
  <div className="centerButton">
    <button className="buttonCustom" onClick={this.login}>Login</button>
    </div>
</Form>

</div>
</div>
<div className="col-md-3">&nbsp;</div>
</div>
</>
        )
    }
}
