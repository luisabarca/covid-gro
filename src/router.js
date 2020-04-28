import React from 'react';

// React Navigation.
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import Inicio from './Inicio'
import SidebarMenu from './components/SidebarMenu';
import ContactScreen from './screens/Contact';
import Prevencion from './Prevencion'
  
const SideMenuNavigation = createDrawerNavigator({
  Inicio: {
    screen: Inicio,
  },
  Prevencion: {
    screen: Prevencion,
  },
  // UnidadesMedicas: {
  //   screen: UnidadesMedicas,
  // },
  Contact: {
    screen: ContactScreen,
  },
  CovidFederal: {
    screen: () => null,
    navigationOptions: {
      drawerLabel: 'Portal COVID Federal',
    }
  },
  GuerreroGob: {
    screen: () => null,
    navigationOptions: {
      drawerLabel: 'Portal del Gobierno del Estado',
    }
  },
  Privacy: {
    screen: () => <View></View>,
    navigationOptions: {
      drawerLabel: 'Política de privacidad',
    }
  },
  Terms: {
    screen: () => <View></View>,
    navigationOptions: {
      drawerLabel: 'Terminos de uso',
    }
  },
}, {
  hideStatusBar: false,
  overlayColor: 'rgba(0, 0, 0, 0.8)',
  contentOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#336699',
  },
  contentComponent: SidebarMenu,
});
  
const AppContainer = createAppContainer(
  createAnimatedSwitchNavigator({
    App: SideMenuNavigation,
  }, {
    initialRouteName: 'App',
  }
));

export default AppContainer;