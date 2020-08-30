import React, { Component } from 'react'

import post1 from '../../images/image1.jpg';
import './card.css'
export default class cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
             images:[],
             currentImage:0
        }
    }
    
    componentDidMount(){
        this.setState({
            images:this.props.images
        })
    }

    leftbtn = ()=>{
        const {currentImage}= this.state
        if(currentImage===0){
            return
        }else
        this.setState({
            currentImage:currentImage-1
        })
    }

    rightbtn = ()=>{
        const {currentImage,images}= this.state
        if(images.length-1===currentImage){
            return
        }else
        this.setState({
            currentImage:currentImage+1
        })  
    }

    render() {
    	let sectionStyle = {
            backgroundImage: `url(${post1})`
          };
        return (
            <div className="container borderImg">
                <p><b>{this.props.title}</b></p>
            <div className="imageHeader">
                <div className="imageStack" >
             <div className="SlideImages" style={sectionStyle}>
                    <img   src={this.state.images[this.state.currentImage]} onContextMenu={this.nextimage} ></img>
                    </div>
                    <button  className="leftbtn"  onClick={this.leftbtn} >click</button>
                    <button   className="rightbtn" onClick={this.rightbtn}>click</button>                  
                </div>
            </div>
            </div>
        )
    }
}
