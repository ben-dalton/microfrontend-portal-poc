import React from 'react';
import ReactDOM from 'react-dom';

// import { Component } from './Exports/Retailer';
// import { Component as GrowerProfile } from './Containers/Grower';
import Retailer from './Retailer/Retailer';
import retailerReducer from './Retailer/reducer';
import { createModuleStore, ModuleWrapper } from './ModuleWrapper';

import './index.css';

const store = createModuleStore(retailerReducer, 'retailer');

const Component = props => (
  <ModuleWrapper component={<Retailer {...props} />} store={store} />
);

ReactDOM.render(<Component />, document.getElementById('root'));
