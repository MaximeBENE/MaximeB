import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (

    <Container className='contact' id='contact'>
        <Nav>
        <Logo src ={process.env.PUBLIC_URL +"/images/maxime-bene-logo.png"} />
        <NavMenu>
        <a href='https://www.linkedin.com/in/maxime-bene'>
            <img src={process.env.PUBLIC_URL +"/images/linkedin-logo.png"}/>
            <span>LINKEDIN</span>
        </a>
        <a href='https://github.com/MaximeBENE/MaximeB.git' >
            <img src={process.env.PUBLIC_URL +"/images/github-logo.png"}/>
            <span>GITHUB</span>
        </a>
        </NavMenu>
        </Nav>
        <Wrap>
            <Profil>
                <h3>Développeur WEB</h3>
                <p>
                    Je suis un développeur web qui cherche de nouveau projet pour acquérir de nouvelles compétences ainsi que de nouveau défi à relever
                </p>
            </Profil>
            <Contact>
                <h3>MAXIME BENE</h3>
                <div>
                    <a>
                    <img src={process.env.PUBLIC_URL +"/images/phone-logo-16.png"}/>
                    <span>06 66 39 37 48</span>
                    </a>
                    <a>
                    <img src={process.env.PUBLIC_URL +"/images/email-logo-16.png"}/>
                    <span>bene.max31@gmail.com</span>
                    </a>
                    <a>
                    <img src={process.env.PUBLIC_URL +"/images/link-logo-16.png"}/>
                    <span>Maxime-BENE.com</span>
                    </a>
                </div>
            </Contact>
        </Wrap>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
    background: #090b13;
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
    
`

const Profil = styled.div`
    width: 50%
    
`
const Contact = styled.div`
    padding: 0 25px;
    ${'' /* margin-left: 100px; */}
    flex-direction: column ;
    

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        margin-top: 5px;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        
        &:hover {
            color: rgb(241, 208, 10);
        }

        img {
            margin-right: 5px;
        }

        span {
            font-size: 13px;
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
                transform-origin: center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0)

            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

`

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow: hidden;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        
        

        img {
            height: 20px;
            margin-right: 5px;

        }

        span {
            font-size: 13px;
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
                transform-origin: center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0)

            }
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
