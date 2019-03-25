import axios from 'axios';
import React, { Component } from 'react';
import { loadScript, loadStyle } from './load_script';

function buildMicroFrontend(baseUrl, name) {
  class MicroFrontendWrapper extends Component {
    state = {
      MicroFrontend: null,
    };
    componentWillMount() {
      console.log(this.props);
      axios
        .get(`${baseUrl}/api/embed-assets/${name.toLowerCase()}`)
        .then(({ data }) => {
          loadScript(`${baseUrl}/${data.js}`, name.toLowerCase())
            .then(amdModule => {
              // if (amdModule.reducer) {
              //   this.props.injectReducer(name.toLowerCase(), amdModule.reducer);
              // }
              return amdModule;
            })
            .then(mod => {
              this.setState({ MicroFrontend: mod.Component });
            });
          if (data.css) {
            loadStyle(`${baseUrl}/${data.css}`, name);
          }
        });
    }
    render() {
      const { MicroFrontend } = this.state;
      return MicroFrontend ? <MicroFrontend {...this.props} /> : null;
    }
  }

  MicroFrontendWrapper.displayName = name;

  return MicroFrontendWrapper;
}

class MicroFrontends extends Component {
  static Retailer = buildMicroFrontend('http://localhost:3001', 'Retailer');
  static Grower = buildMicroFrontend('http://localhost:3001', 'Grower');
}

// const mapStateToProps = state => state;

export default MicroFrontends;
