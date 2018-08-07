import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import Home from "./components/Home";
import Work from "./components/Work";
import GoldMax from "./components/GoldMax";
import Contact from "./components/Contact";
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/work" children={TransitionGroupWrapper(Work)} />
            <Route path="/goldmax" children={TransitionGroupWrapper(GoldMax)} />
            <Route path="/contact" children={TransitionGroupWrapper(Contact)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const TransitionGroupWrapper = (Component) => ({match, ...rest}) => (
  <Transition component={firstChild}>
    {match && <Component {...rest} />}
  </Transition>
);

const firstChild = props => {
  const reactChildren = React.Children.toArray(props.children);
  return reactChildren[0] || null;
}

export default App;
