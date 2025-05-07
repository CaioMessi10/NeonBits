import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Tela1 from './src/screens/Tela1';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          drawerStyle: { backgroundColor: '#1a1a1a' },
          drawerActiveBackgroundColor: '#1a1a1a',
          drawerInactiveBackgroundColor: '#1a1a1a',
          drawerActiveTintColor: '#ffcc00',
          drawerInactiveTintColor: '#ffcc00',
          headerStyle: { backgroundColor: '#1a1a1a' },
          headerTintColor: '#ffcc00',
          drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
        }}
      >
        <Drawer.Screen name="Area do Usuario" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Meus Anuncios" component={Tela1} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
