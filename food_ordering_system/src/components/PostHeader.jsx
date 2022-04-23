import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
export default function PostHeader() {

  return (
      <div className="container-fluid">
      <div className= "row">
      <div className= "col p-0">
       {/* have to apply one more image here */}
      </div>
    <div className= "col p-1">

    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-40"
        src={img2}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d- block w-40"
        src={img1}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-40"
        src={img3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  <div className="col p-1">
        {/* have to apply one more image here */}
  </div>
  </div>
  </div>
  )
}