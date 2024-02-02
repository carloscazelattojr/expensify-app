import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { AppRoutes } from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
      <StatusBar barStyle="light-content" />
    </>
  )
}

