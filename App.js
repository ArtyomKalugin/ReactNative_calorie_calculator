import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationScreen} from "./Screens/NavigationScreen/NavigationScreen";
import {observer} from "mobx-react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';


export const App = observer(() => {
  return (
      <GestureHandlerRootView style={{flex: 1}}>
          <Host>
              <NavigationContainer>
                  <NavigationScreen />
              </NavigationContainer>
          </Host>
      </GestureHandlerRootView>
  );
})
