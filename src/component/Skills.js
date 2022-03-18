import React from 'react';
import styled from 'styled-components';

function Skills() {
  return (
    <Container className='skills' id='skills'>
      <h1>MES COMPÉTENCES</h1>

      <Box>
        <Left>
          <h2>Domaines de compétences</h2>

          <Wrap>
            <Skill>GESTION DE PROJETS WEB</Skill>
            <Description>site vitrine, e-commerce</Description>
          </Wrap>

          <Wrap>
            <Skill>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</Skill>
            <Description>MYSQL-SQL</Description>
          </Wrap>

          <Wrap>
            <Skill>MISE EN PLACE / MODIFICATION / GESTION DE CMS</Skill>
            <Description>Wordpress / Prestashop</Description>
          </Wrap>

          <Wrap>
            <Skill>INTÉGRATION (X)HTML / CSS</Skill>
            <Description>Codage à la main respectueux des standards du Web</Description>
          </Wrap>

          <Wrap>
          <Skill>RÉFÉRENCEMENT NATUREL SEO</Skill>
          <Description>Accessibilité & ergonomie des pages web</Description>
          </Wrap>

          <Wrap>
            <Skill>CONCEPTION MULTI-PLATEFORMES</Skill>
            <Description>Compatible tous supports, tablette & application mobile</Description>
          </Wrap>
        </Left>
        <Right>
          <h2>Compétence en développement</h2>

          <Wrap>
            <Skill>BACKEND</Skill>
            <Description>node.js / nest.js / ejs</Description>
          </Wrap>

          <Wrap>
            <Skill>FRONTEND</Skill>
            <Description>html / css / js / react / ejs</Description>
          </Wrap>

          <Wrap>
            <Skill>BDD</Skill>
            <Description>myslq / elasticsearch / firebase / mongoDB</Description>
          </Wrap>

        </Right>
      </Box>
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  margin:5px;
  margin-top: 20px;
  padding:5px;
  width:100%;

  h2 {
    font-size: 20px;
    letter-spacing: 1.42px;
  }  
  @media (max-width:540px) {
    display: block;
    width: auto;
          
  }
`
const Box = styled.div`
  display: flex;
  ${'' /* justify-content: space-between; //vertical
    align-items: center; //horizontal */}
    @media (max-width:1050px) {
      display: block;
      width: 100%;
      font-size: 20px;
    }
    
  margin:25px;
`
const Wrap = styled.div`
  margin:0;
  padding:0;
`
const Skill = styled.div`
  font-size: 13px;
  letter-spacing: 1.42px;
  color: rgb(241, 208, 10);
  font-weight: bold;
`
const Description = styled.div`
  font-size: 13px;
  letter-spacing: 1.42px;
  margin-bottom:15px;
`
const Left = styled.div`
  width: 50%;
  margin-right:5vh;
  @media (max-width:1050px) {
    display: block;
    width: 100%;
    padding:15px;
  }
`
const Right = styled.div`
  width: 50%;
  @media (max-width:1050px) {
    display: block;
    width: 100%;
    padding:15px;
  }
`