import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from '../Constants';
import ComponentsJob from '../screens/ComponentsJob';
import Home from '../screens/Home';
import InventoryHome from '../screens/InventoryHome';
import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomescreenNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#7D1E6A" },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />)
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="InventoryHome"
        component={InventoryHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Components"
        title="Home I"
        options={{ headerShown: false }}
        component={ComponentsJob}
      />
    </Drawer.Navigator>
  )
}

const LoginNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: true,
        title:'AWS Mobile',
        headerStyle: { backgroundColor: "#7D1E6A" },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen name="SignIn" component={SignIn}  />
    </Stack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
      <Stack.Navigator initialRouteName="login" >
        <Stack.Screen name="login" component={LoginNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="HomescreenNavigator" component={HomescreenNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigation;
