import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Story from './Story';
import Contact from './Contact';

function Home() {
  
  
  return(
    <Container >
    <video id='video1' className='video1' loop autoPlay muted>
      <source
        src={process.env.PUBLIC_URL +"/videos/wave-background.mp4" }
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
      <ImgSlider />
      <Skills />
      <Portfolio />
      <Story />
      <Contact />
    </Container>
  ); 
} 

export default Home;

const Container = styled.main`

    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
    
    .video1{ 
      object-fit: cover;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      ${'' /* place the image always on the background */}
      z-index: -1;
      overflow: hidden;
    }
`