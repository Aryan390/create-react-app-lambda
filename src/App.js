import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ResumePage from './pages/ResumePage/ResumePage'
import Footer from './components/Footer/Footer';

import NavIcon from './components/Home/NavIcon';
import Navigation from './components/Navigation/Navigation';
import Backdrop from './components/UI/Backdrop/Backdrop'

import './App.css';

function App() {
  const [navShown, setIsNavShown] = useState(false)

  const location = useLocation();

  const navClickHandler = () => {
    setIsNavShown(prevState => !prevState)
  }


  return (
    <Fragment>
      <NavIcon onShow={navClickHandler} />
      {navShown && <Backdrop onClose={navClickHandler} />}
      {navShown && <Navigation onClose={navClickHandler} />}
      
      <TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames='fade'
          key={location.key}
        >
          <Switch location={location}>
            <Route path='/' exact>
              <Redirect to="/home" />
            </Route>

            <Route path="/home">
              <HomePage />
            </Route>

            <Route path='/about'>
              <AboutPage />
            </Route>

            <Route path='/resume'>
              <ResumePage />
            </Route>

            <Route path='/contact'>
              <ContactPage />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>

      <Footer />
    </Fragment>
  );
}

export default App;
