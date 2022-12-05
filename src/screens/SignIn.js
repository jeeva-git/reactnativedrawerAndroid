import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import Logo from '../Assets/Logos/aws_logo.png';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Constants from '../Constants';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {

    navigation.navigate('HomescreenNavigator');

    // if(username.length>0 && password.length>0) {
    //     navigation.navigate('Home');
    // }
    // else {
    //     alert("Username or password cannot be empty")
    // }
  };

  return (
    <>
    <StatusBar backgroundColor={Constants.statusbarColor} />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo,]}
          resizeMode="contain" />

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry />

        <CustomButton text="Sign In" onPress={handleSignIn} />
      </View>
    </ScrollView></>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignIn;