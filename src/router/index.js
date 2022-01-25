import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Home, Form} from '../pages';
import {ToDoProvider} from '../context/ToDo';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <ToDoProvider>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </ToDoProvider>
  );
};

export default Router;
