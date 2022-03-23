import React, {useState, useEffect} from 'react';
import './App.css';
import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const override = css`
  ${'' /* background-color:white; */}
  display: block;
  margin: auto;
  margin-top: 25vh;
  
`;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (loading) {
    return (
      <CircleLoader
        color={'#F1D00A'}
        loading={loading}
        css={override} 
        size={300} 
      />
    );
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/MaximeB' element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
    
  );
}


export default App;
