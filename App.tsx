import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationProvider} from '@ui-kitten/components';
import React from 'react';
import {useColorScheme} from 'react-native';
import {Routes} from './src/constants';
import DetailsScreen from './src/screens/Details';
import HomeScreen from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const appTheme = useColorScheme() === 'dark' ? eva.dark : eva.light;
  return (
    <ApplicationProvider {...eva} theme={appTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.HOME}>
          <Stack.Screen
            name={Routes.HOME}
            component={HomeScreen}
            options={{
              title: 'My Albuns',
              headerStyle: {
                backgroundColor: '#68B684',
              },
              headerTintColor: '#ffffff',
            }}
          />
          <Stack.Screen
            name={Routes.DETAILS}
            component={DetailsScreen}
            options={{
              title: 'Photos',
              headerStyle: {
                backgroundColor: '#68B684',
              },
              headerTintColor: '#ffffff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
