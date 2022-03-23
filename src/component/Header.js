import React, { useState } from 'react'
import styled from 'styled-components';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
      <Nav>
      <Logo>
            <video id='video' loop autoPlay muted>
            <source
                src={process.env.PUBLIC_URL +"/videos/maxime-logo.mp4" }
                type="video/mp4"
            />
            Your browser does not support the video tag.
            </video>
        </Logo>
          <NavMenu>
            <a href='#'>
                <img src={process.env.PUBLIC_URL +"/images/home-icon.png" }/>
                <span>ACCUEIL</span>
            </a>
            <a href='#skills'>
                <img src={process.env.PUBLIC_URL +"/images/network.png" }/>
                <span>COMPÉTENCES</span>
            </a>
            <a href='#portfolio'>
                <img src={process.env.PUBLIC_URL +"/images/book-icon.png" }/>
                <span>PORTFOLIO</span>
            </a>
            <a href='#story'>
                <img src={process.env.PUBLIC_URL +"/images/eye-icon.png" }/>
                <span>À PROPOS</span>
            </a>
            <a href='#contact'>
                <img src={process.env.PUBLIC_URL +"/images/contact-icon.png" }/>
                <span>CONTACT</span>
            </a>
          </NavMenu>
          <CustomMenu src={process.env.PUBLIC_URL +"/images/menu-icon.png" } onClick={()=>setBurgerStatus(true)}/>
          <BurgerNav show={burgerStatus} >
                <CloseWrapper>
                    <CustomClose src={process.env.PUBLIC_URL +"/images/close-icon.png" } onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper> 
                <li className='liTop'><a href="#"><img src={process.env.PUBLIC_URL +"/images/home-icon.png" }/>
                <span>ACCUEIL</span></a></li>
                
                <li><a href="#skills"><img src={process.env.PUBLIC_URL +"/images/network.png" }/>
                <span>COMPÉTENCES</span></a></li>

                <li><a href="#portfolio"><img src={process.env.PUBLIC_URL +"/images/book-icon.png" }/>
                <span>PORTFOLIO</span></a></li>

                <li><a href="#story"><img src={process.env.PUBLIC_URL +"/images/eye-icon.png" }/>
                <span>À PROPOS</span></a></li>

                <li><a href="#contact"><img src={process.env.PUBLIC_URL +"/images/contact-icon.png" }/>
                <span>CONTACT</span></a></li>
            </BurgerNav>
      </Nav>
  )
}

export default Header;

const Nav = styled.nav`
    position:fixed;
    top:0;
    z-index:16;
    height: 10vh;
    width:100vw;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow: hidden;
    @media (max-width:660px) {
    background: none;
    }
}
    

    span {
        font-size: 1.5vw;
        letter-spacing: 1.42px;
        position: relative;

        ${'' /* We can use this command for add a div after every span  */}
        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0)

        }
    }
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    

        img {
            width: 2vw;
            margin-right: 5px;

        }

    

        &:hover {
            color: rgb(241, 208, 10);
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const Logo = styled.div`
    video{
        height:10vh;
        width:auto;
        position: absolute;
        object-fit: cover;
        top:0;
        left:0;
        @media (max-width:660px) {
        display: none;
        }
        &:hover {
            position:fixed;
            height:20vh;
            z-index: 16;
            
          
        }
    }
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 10vw;
    align-items: center;

    @media (max-width:660px) {
    display: none;
    }
   
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(23, 26, 32, 0.95);
    width: 25vw;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s ;
    @media (max-width:530px) {
            margin:0;
            padding:0;
        }
    li {
        padding: 15px 0;
        
        a{
            font-weight: 600;
            color: white;
            
            &:hover {
            color: rgb(241, 208, 10);
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
            }
        }
    }
    
    .liTop{
        
        @media (max-width:650px) {
        margin-top:5vh;
        }
    }
    
`
const CustomMenu = styled.img`
    right:0;
    position:absolute;
    margin-right:20px;
    cursor: pointer;
    width:2vw;
    @media (max-width:660px) {
    width:7vw;
    }

    &:hover {
        transform: scale(1.1);
    }
`

const CustomClose = styled.img`
    position:absolute;
    margin-right:10px;
    margin-top:10px;
    cursor: pointer;
    width:2vw;
    @media (max-width:660px) {
    width:5vw;
    }
    
    &:hover {
        transform: scale(1.1);
    }

`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`