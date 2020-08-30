import React, { Component } from 'react'
import logo from '../images/logo.jpg';
import Cards from './cards/cards'
import Header from './layout/header/header.js'
import Footer from './layout/footer/footer'
import image1 from '../images/image2.webp'
import image2 from '../images/image1.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/milky-way-starry-sky-night-sky-star-956981.webp'
import Post from './post/Post'
const images = [
    image1,
    image2,
    image3,
    image4
  ]

export default class home extends Component {
    render() {
    return (
    <div className="App">
    <Header></Header>
    <div className="textAlignLeft" style={{marginTop:"5%",marginBottom:"5%"}}>
    <Post desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></Post>
    </div>
    <section className="ImgSliderSection">
    <div className="container">
      <div className="row">
      <div className="col-md-6">
       <Cards images={images} title="Title"></Cards>
      </div>
      <div className="col-md-6">
       <Cards images={images} title="Title"></Cards>
       </div>
    </div>
    </div>
    </section>
    <div   className="textAlignLeft" style={{marginTop:"5%",marginBottom:"5%"}}>
    <Post desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></Post>
    </div>
       <div style={{marginTop:"10%"}}>
    <Footer></Footer>
    </div>
  </div>
        )
    }
}
