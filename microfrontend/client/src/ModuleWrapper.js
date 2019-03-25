import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const createModuleStore = (reducer, name) =>
  createStore(
    combineReducers({ [name]: reducer }),
    composeWithDevTools(applyMiddleware(thunk)),
  );

export class ModuleWrapper extends React.Component {
  render() {
    return <Provider store={this.props.store}>{this.props.component}</Provider>;
  }
}
