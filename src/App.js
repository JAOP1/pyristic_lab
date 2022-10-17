import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import './app.scss';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ContinuosOptimizationPage from './layouts/ContinuosOptimizationPage/ContinuosOptimizationPage';
import CombinatorialOptimizationPage from './layouts/CombinatorialOptimizationPage';
class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <NavBar />
        </Theme>
        <Content>
          <Banner/>
          <Routes>
            <Route  path='/' element={<ContinuosOptimizationPage/>} />
            <Route  path='/combinatorial' element={<CombinatorialOptimizationPage/>} />
          </Routes>
          {/* <Theme theme='g100'>
            <Footer/>
          </Theme> */}
        </Content>
      </>
    );
  }
}

export default App;
