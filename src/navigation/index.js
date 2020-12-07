import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChartScreen from '../containers/ChartScreen';

const Stack = createStackNavigator();

const simpleHeaderOptions = {
  headerTitleStyle: {
    textAlign: 'center',
  }
}

const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Chart"
        component={ChartScreen}
        options={simpleHeaderOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default RootNavigation;