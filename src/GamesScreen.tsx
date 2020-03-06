import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useStateValue} from './useStateValue';

const GamesScreen = () => {
  const [{currentUser}] = useStateValue();

  return (
    <SafeAreaView>
      <Text>Hello - {currentUser?.name}</Text>
      <Text>Games ...</Text>
    </SafeAreaView>
  );
};

export default GamesScreen;
