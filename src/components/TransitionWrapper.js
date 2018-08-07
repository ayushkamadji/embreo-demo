import React, { Component } from 'react';
import { Transition } from "react-transition-group";

const TransitionWrapper = WrappedComponent => class TransitionWrapper extends Component {
  state = {
    in: false
  }

  componentWillMount = () => {
    this.setState({
      in: true
    })
  }

  componentWillUnmount = () => {
    this.setState({
      in: false
    })
  }

  render = () => {
    const style = {
      transition: `opacity ${400}ms ease-out`,
      opacity: 0
    }
    const transitionStyles = {
      entering: {opacity: 0},
      entered: {opacity: 1},
      exiting: {opacity: 1},
      exited: {opacity: 0}
    }
    return (
    <Transition in={this.state.in} timeout={400}>
      {(state) => (
        <WrappedComponent
          style={{
            ...style,
            ...transitionStyles[state] }} />
      )}
    </Transition>
  )}
}

export default TransitionWrapper;
