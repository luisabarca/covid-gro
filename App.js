/**
 * Plan Vivienda
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

console.disableYellowBox = true;

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

import AppContainer from './src/router';
import { Root } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Root>
        <Provider store={ store }>
          <PersistGate loading={null} persistor={ persistor }>
            <AppContainer />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
