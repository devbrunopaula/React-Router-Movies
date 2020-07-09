import React from 'react';
import './App.css';
import GlobalStyle from './styles/GlobalStyles'
import Routes from './routes'

function App() {
  // console.log(process.env.REACT_APP_KEY)
  return (
    <>
      <GlobalStyle />
      <Routes/>
    </>
  );
}

export default App;
 