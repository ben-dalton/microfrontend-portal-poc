import React from 'react';
import { ThemeProvider, Themes } from '@tkxs/cast-ui/lib/themes';

import ErrorBoundary from '../Components/error_boundary';

const Content = props => {
  return (
    <div className="retailer">
      This is a Grower's Profile. It's way different.
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

const GrowerProfile = props => (
  <ThemeProvider theme={props.theme || Themes.defaultTheme}>
    <ErrorBoundary>
      <Content {...props} />
    </ErrorBoundary>
  </ThemeProvider>
);

export const Component = GrowerProfile;
