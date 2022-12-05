import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Appbar, TextInput, Chip, Button } from 'react-native-paper';
import Constants from "../Constants";

const handleDelete = () => {
  console.log('deleted')
}

const handleOnPress = () => {
  console.log('Pressed')
}

const InventoryHome = () => {

    const navigation = useNavigation();

  return (
    <><Appbar.Header style={{backgroundColor:"#7D1E6A"}}>
      <Appbar.BackAction onPress={() => navigation.goBack()} color='white'/>
      <Appbar.Content title="Material Requirements" titleStyle={{color:'white'}}/>
    </Appbar.Header>
      <KeyboardAvoidingView>
        <View>
          <TextInput style={styles.textInput} label="Job" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={styles.textInput} label="Assembly" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={styles.textInput} label="StartDate" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={styles.textInput} label="Line" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={styles.textInput} label="Operation Sequence Number" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={[styles.textInput, { height: 200 }]} label="Comments" right={<TextInput.Icon disabled icon="note" />} />
        </View>
        <Button style={{ margin: 50 }} mode="contained" onPress={() =>navigation.navigate('Components')}>Next</Button>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
   backgroundColor: Constants.primaryBGColor,
   fontSize:12,
  }
})

export default InventoryHome;