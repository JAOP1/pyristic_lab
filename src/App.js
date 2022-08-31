import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import './app.scss';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import ContinuosOptimizationPage from './content/ContinuosOptimizationPage/ContinuosOptimizationPage';
class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <NavBar />
        </Theme>
        <Content>
          <Banner/>
          <Switch>
            <Route exact path='/' component={ContinuosOptimizationPage} />
            <Route path="/land" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
          <Theme theme='g100'>
            <Footer/>
          </Theme>
        </Content>
      </>
    );
  }
}

export default App;
