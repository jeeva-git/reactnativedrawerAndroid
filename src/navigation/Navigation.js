import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ComponentsJob from '../screens/ComponentsJob';
import Home from '../screens/Home';
import InventoryHome from '../screens/InventoryHome';
import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const HomescreenNavigator = ({ navigation }) => {
  return(
    <Drawer.Navigator
    screenOptions={{
      headerShown: true,
      statusBarColor: "#7D1E6A",
      headerStyle: { backgroundColor: "#7D1E6A" },
      headerTintColor: 'white',

    }}
  >
    <Drawer.Screen name="Home" component={Home}
      options={{
        title: "Home"
      }}
    />

    <Stack.Screen name="InventoryHome" component={InventoryHome} options={{headerShown:false}}/>
    <Stack.Screen name="Components" title="Home I" component={ComponentsJob} />

  </Drawer.Navigator>
  )
}

const LoginNavigator = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="HomescreenNavigator" component={HomescreenNavigator} options={{headerShown:false}}/>
      </Stack.Navigator>    
    </NavigationContainer>
  );
};

export default Navigation;
