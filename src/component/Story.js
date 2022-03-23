import React from 'react';
import styled from 'styled-components';

function Story() {
  return (
    <Container className='story' id='story'>
      <Video>
      <video id='video' loop autoPlay muted>
        <source
          src={process.env.PUBLIC_URL +"/videos/maxime-logo.mp4" }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </Video>
      <Title>
        <h2>MAXIME BENE</h2>
        <h3>DÉVELOPPEUR WEB FULL STACK</h3>
      </Title>
      <Profil>
        <Left>
          <h3>PROFIL PROFESSIONNEL</h3>
          <p>Je suis un développeur WEB junior qui recherche une entreprise pour développer mes compétences aussi bien en front que en back.</p>
          
          <h3>COMPÉTENCES</h3>
          <h4>FRONT-END </h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>typescript</li>
            <li>React.js</li>
            <li>bootstrap</li>
            <li>tailwind</li>
            <li>flexbox</li>
          </ul>

          <h4>BACK-END</h4>
          <ul>
            <li>Node.js</li>
            <li>express</li>
            <li>nest.js</li>
          </ul>

          <h4>BDD</h4>
          <ul>
            <li>Elasticsearch</li>
            <li>SQL</li>
            <li>mongoDB</li>
            <li>firebase</li>
          </ul>

          <h4>AUTRES</h4>
          <ul>
            <li>GitHub</li>
            <li>mocrisoft office</li>
            <li>AutoCAD</li>
            <li>Solidworks</li>
            <li>Diagramme</li>
            <li>Discord</li>
            <li>SEO</li>
          </ul>

          <h3>PRINCIPAUX INTÉRÊTS</h3>
          <ul>
            <li>Conception d'un site</li>
            <li>animé / manga</li>
            <li>musique (piano, lofi, indie, pop)</li>
            <li>cinephile</li>
            <li>nature</li>
            <li>Technologie</li>
          </ul>

          <h3>COORDONNÉES</h3>
          <p>Téléphone: 06 66 39 37 48</p>
          <p>bene.max31@gmail.com</p>
          <p>268 avenue Henri Peyrusse 31600 Muret</p>
          <p>18/07/1996</p>

        </Left>
        <Right>
          <h3>EXPÉRIENCE PROFESSIONELLE</h3>
          <h4>STAGIAIRE DÉVELOPPEUR WEB</h4>
          <h5>Nextgen-ealogy— Lille | Juillet 2021 À Août 2021</h5>
          <ul>
            <li className='bold'>FRONT-END: <span>react.js , Leflet</span></li>
            <li className='bold'>BACK-END: <span>node.js,express, CORS, Body-parser</span></li>
            <li className='bold'>BASE DE DONNÉES: <span>Elasticsearch</span></li>
          </ul>
          <p>Conception d'une application de généalogie qui regroupe des timestamp (évenement dans le temps et les coordonnées géographique) de la vie d'une personne.</p>
          
          <h4>AUTOMATICIEN EN BUREAU D’ÉTUDES</h4>
          <h5>Dietsmanns Technologies | Salies-du-Salat Mars 2019 À Octobre 2019</h5>
          <ul>
            <li>Étude du cahier des charges</li>
            <li>Grafcet de sécurité</li>
          </ul>

          <h4>TECHNICIEN BUREAU D’ÉTUDES FIBRE OPTIQUE</h4>
          <h5>société D&K TECH | Pinsaguel Janvier 2019 À Février 2019</h5>

          <h4>TECHNICIEN DE MAINTENANCE</h4>
          <h5>Dechaumont | Muret Décembre 2018 À Janvier 2019</h5>

          <h3>PARCOURS SCOLAIRE</h3>

          <h4>DÉVELOPPEUR WEB ET WEB MOBILE</h4>
          <h5>ADRAR Formation | Pôle Numérique Toulouse, France Janvier 2021 À Septembre 2021</h5>
          <p>HTML / CSS / JS / node.js / react.js /SQL/Wamp/ wordpress / prestashop / firebase /mogoDB / bootstrap / tailwind / flexbox / GIT</p>

          <h4>BTS CRSA | CONCEPTION ET RÉALISATION DE SYSTÈMES AUTOMATIQUES</h4>
          <h5>Lycée Victor Duruy | Bagnères De Bigorre, France Septembre 2016 À Juillet 2018</h5>
          <p>SolideWorks / cahier des charges / Grafcet / RDM / AutoCAD</p>

          <h4>BAC PRO ELEEC | ÉLECTROTECHNIQUE, ENERGIE, EQUIPEMENTS COMMUNICANTS</h4>
          <h5>Lycée Charles de Gaulle | Muret, France Septembre 2013 À Juillet 2015</h5>

          
        </Right>
      </Profil>
    </Container>
  );
}

export default Story;

const Container = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  margin-top: 20px;
  padding:5px;
  width:100%;

  h2 {
    font-size: 22px;
    letter-spacing: 1.42px;
  }
  h3 {
    margin-top:35px;
    font-size: 20px;
    letter-spacing: 1.42px;
    color:rgba(230, 105, 8, 0.8);
  }
  h4 {
    font-size: 18px;
    letter-spacing: 1.42px;
    margin-top:20px;
    margin-bottom:0;
    padding:0;
    
  }
  h5 {
    font-size: 16px;
    letter-spacing: 1.42px;
    color:rgba(230, 105, 8, 0.8);
    margin-top:0;
    margin-bottom:5px;
    padding:0;
  }
  p {
    font-size: 14px;
    letter-spacing: 1.42px;
    margin-top:5px;
  }
  ul{
    margin-bottom:10px;
  }
  li {
    font-size: 14px;
    letter-spacing: 1.42px;
    margin-bottom:3px;
  }
  .bold{
    font-weight: bold;
  }
  span {
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 1.42px;
  }  
  @media (max-width:540px) {
      display: block;
      width: auto;
           
    }
`
const Video = styled.div`
  video{
    display: block;
    content: "";
    position: relative;
    z-index: 1;
    align-items: center;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width:20em;
    max-height:auto;
    width: 50%;
  }
  
`
const Title = styled.div`
  background-color: rgba(230, 105, 8, 0.8);
  text-align: center;
  z-index: -1;

  h2 {
    font-size: 28px;
    margin-bottom:0;
    margin-right:210px;
  }

  h3{
    font-size: 25px;
    letter-spacing: 1.42px;
    color: rgba(23, 26, 32, 0.8);
    margin-bottom:0;
    
    margin-top:0;
    padding:0;
  }
  @media (max-width:480px) {
    h2,h3{
      margin:0;
      padding:0;
    }
  }
`
const Profil = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin:0;
  padding:0;
  
`
const Left = styled.div`
  padding:0;
  width: 50%;
  @media (max-width:1050px) {
    display: block;
    width: 100%;
    padding:15px;
  }
`
const Right = styled.div`
  padding:0;
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(23, 26, 32, 0.9);
  width: 50%;
  height:1300px;
  ${'' /* margin:5px; */}

  @media (max-width:1050px) {
    display: block;
    width: 100%;
    padding:15px;
    height:auto;
  }
`