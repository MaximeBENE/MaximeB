import React from 'react';
import styled from 'styled-components';

function Portfolio() {
  return (
    <Container className='portfolio' id='portfolio'>
    <h1>MON PORTFOLIO</h1>
    <Content>
        <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=400&aspectRatio=1.78&format=png" />
            <div>Disney clone</div>
        </Wrap>
        <Wrap>
            <img src={process.env.PUBLIC_URL +"/images/tesla-logo2.png"} alt='TESLA LOGO' />
            <div>tesla clone</div>
        </Wrap>
        <Wrap>
            <img src="https://pro.guslyon.fr/static/leaflet-f2692525571855c01f83c80c64db92e4.png" />
            <div>genealogie timestamp</div>
        </Wrap>
        <Wrap>
            <img src={process.env.PUBLIC_URL +"/images/node-logo.png"} alt='node.js logo' />
            <div>parc d'attraction</div>
        </Wrap>
        <Wrap>
            <img src={process.env.PUBLIC_URL +"/images/react-logo.png"} alt='react.js logo' />
            <div>chat</div>
        </Wrap>
    </Content>
</Container>
  );
}

export default Portfolio;

const Container = styled.div`
    overflow: hidden;
    background-color: rgba(23, 26, 32, 0.8);
    ${'' /* margin:5px; */}
    margin-top: 20px;
    padding:5px;
    width:100%;

`
const Content = styled.div`
    margin: 10px;
    display: grid;
    grid-gap: 25px;
    align-content: space-between;
    justify-content: space-around;
    
    
    grid-template-columns: repeat(5, minmax(0,1fr));
    grid-template-columns: 250px 250px 250px 250px 250px;

    @media (max-width:1485px) {
        grid-template-columns: repeat(4, minmax(0,1fr));
    }
    @media (max-width:1180px) {
        grid-template-columns: repeat(3, minmax(0,1fr));
    }
    @media (max-width:1000px) {
        grid-template-columns: repeat(2, minmax(0,1fr));
        
    }
    @media (max-width:768px) {
        grid-template-columns: repeat(1, minmax(0,1fr));
        width: 80vw;
        justify-items: center;
        justify-self: center;
        align-self: center;
    }
    
`
const Wrap = styled.div`    
    ${'' /* max-width: 300px;
    max-height: 300px; */}
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadows: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    div {
      font-size: 20px;
      letter-spacing: 1.42px;
      
    }

    img {
    
      max-width: 100%;
      max-height: 100%;
      
      height: auto;
      width: 30em;
      z-index: -1;
      object-fit: cover;
      transition: all 1s ease-out;
      background-color: rgba(255, 255, 255, 0.2);
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);

        img{
            background-color: rgb(241, 208, 10);
            opacity:75%;
        }
        
        div{
            background-color:rgba(23, 26, 32, 0.8);

        }
    }
    
`
