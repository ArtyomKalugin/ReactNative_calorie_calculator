import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationScreen} from "./Screens/NavigationScreen/NavigationScreen";
import {observer} from "mobx-react";


export const App = observer(() => {
  return (
      <NavigationContainer>
          <NavigationScreen />
      </NavigationContainer>
  );
})
