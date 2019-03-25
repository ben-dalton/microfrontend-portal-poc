import React, { Component } from 'react';
import { Alert } from '@tkxs/cast-ui/lib/Alert';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    return this.state.hasError ? (
      <Alert lightMode alertStyle="danger">
        <p className="alert alert-warning">Something went wrong</p>
      </Alert>
    ) : (
      this.props.children
    );
  }
}
