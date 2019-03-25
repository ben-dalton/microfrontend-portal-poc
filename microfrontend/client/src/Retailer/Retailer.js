import React from 'react';
import { ThemeProvider, Themes } from '@tkxs/cast-ui/lib/themes';
import { connect } from 'react-redux';

import * as actions from './actions';
import ErrorBoundary from '../Components/error_boundary';
import './retailer.css';

const Content = ({ dispatch, count, increment, decrement, ...props }) => {
  return (
    <div className="retailer">
      This is a Retailer's Profile.
      <br />
      Total: {count}
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      {props.authToken && (
        <small>
          <br />
          <br />
          authToken: {props.authToken}
        </small>
      )}
      {props.baseName && (
        <small>
          <br />
          baseName: {props.baseName}
        </small>
      )}
    </div>
  );
};

class Profile extends React.Component {
  componentWillMount() {
    debugger;
  }
  componentDidMount() {
    console.log('Retailer: componentDidMount');
  }
  componentWillUnmount() {
    console.log('Retailer: componentWillUnmount');
  }
  render() {
    return (
      <ThemeProvider theme={this.props.theme || Themes.defaultTheme}>
        <ErrorBoundary>
          <Content count={this.props.count} {...this.props} />
        </ErrorBoundary>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = ({ retailer }) => ({
  count: retailer.count,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  ...actions,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
