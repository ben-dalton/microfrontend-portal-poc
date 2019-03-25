import React from 'react';

import Retailer from '../Retailer/Retailer';
import retailerReducer from '../Retailer/reducer';
import * as retailerActions from '../Retailer/actions';

export const Component = props => <Retailer {...props} />;

export const reducer = retailerReducer;
export const actions = retailerActions;
