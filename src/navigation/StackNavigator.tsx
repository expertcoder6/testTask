import React from 'react';

/* ------------- Screens ------------- */
import Home from '../containers/Home';

/* ------------- stack ------------- */
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenName } from '../utils/contants';

const Stack = createStackNavigator();

/* ------------- welcome stack ------------- */
export const HomeStack = (name: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.HOME}
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

