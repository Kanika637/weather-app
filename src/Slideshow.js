import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./slideshow.css"
const slideImages = [-

    {
      url: 'https://i.pinimg.com/236x/b9/42/8b/b9428bcd1b6cc8761cd19d66af8f2666.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'https://softauthor.com/wp-content/uploads/2021/08/CSS-Background-Image-Full-Screen-background-size-cover-768x634.png',
      caption: 'Slide 2'
    },
    {
      url: 'https://i.pinimg.com/236x/32/73/1c/32731cb916fd7f0c2cb53988426b8159.jpg',
      caption: 'Slide 3'
    },
  ];
  
  const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`, width: 1600, height: 270, backgroundRepeat:'no-repeat',backgroundSize:'cover', marginRight:30, marginTop:20}}>
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
  }
  export default Slideshow