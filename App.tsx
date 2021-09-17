import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout} from '@ui-kitten/components';
import {useColorScheme} from 'react-native';

// TODO: IMPORT THE ROUTE NAMES ENUM AND THE STACK NAVIGATOR

// TODO: ADD THE ROUTES AND IT'S SCREENS

const App = () => {
  const appTheme = useColorScheme() === 'dark' ? eva.dark : eva.light;
  return (
    <ApplicationProvider {...eva} theme={appTheme}>
      <Layout />
    </ApplicationProvider>
  );
};

export default App;
