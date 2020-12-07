import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import RootContainer from './src/containers/RootContainer'
import store from './src/redux/store';
import RootNavigation from './src/navigation';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <RootContainer />
      <RootNavigation />
    </Provider>
  );
};

export default App;
