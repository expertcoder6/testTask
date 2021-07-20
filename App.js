/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';

/*------ redux ------------*/
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

/* ------------- Store ------------- */
import {configureStore} from './src/store';

/* ------------- store setup ------------- */
const setup = configureStore();

/*------ navigator ------------*/
import MainNavigator from './src/navigation';

import { colors } from './src/utils/index';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.primary} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
        <Provider store={setup.store}>
          <PersistGate loading={null} persistor={setup.persistor}>
            <MainNavigator />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </View>
  )
}
