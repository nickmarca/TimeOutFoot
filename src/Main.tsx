import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { useStateValue } from './useStateValue';
import SignInScreen from './SignInScreen';
import GamesScreen from './GamesScreen';

const Main = () => {
  const [{ currentUser }] = useStateValue();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
          {
            currentUser ?
                <Stack.Screen name="Games" component={GamesScreen} /> :
                <Stack.Screen name="Sign In" component={SignInScreen} />
          }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
