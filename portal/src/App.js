import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MicroFrontends from './microfrontends';
import Home from './Home';
import { Navbar, Nav, Themes, ThemeProvider } from '@tkxs/cast-ui';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Themes.defaultTheme}>
        <Router>
          <div className="app">
            <header className="app__header">
              <Navbar>
                <Nav left>
                  <div className="app__logo">ces-ui-core</div>
                </Nav>
                <Nav right>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/retailer">Retailer</Link>
                    </li>
                    <li>
                      <Link to="/grower">Grower</Link>
                    </li>
                    <li>
                      <Link to="/contracts">Contracts</Link>
                    </li>
                  </ul>
                </Nav>
              </Navbar>
            </header>
            <div className="app__main">
              <div className="app__main__column">
                <div className="microfrontend__wrapper">
                  <Route exact path="/" component={Home} />
                  <Route
                    path="/retailer"
                    render={() => (
                      <MicroFrontends.Retailer
                        authToken="someTokenFromTheParent"
                        baseName="CES"
                        theme={Themes.defaultTheme}
                      />
                    )}
                  />
                  <Route
                    path="/grower"
                    render={() => (
                      <MicroFrontends.Grower
                        authToken="someTokenFromTheParent"
                        baseName="CES"
                        theme={Themes.defaultTheme}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
