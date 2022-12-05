import React from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Appbar, TextInput, Chip, Button } from 'react-native-paper';
import Constants from "../Constants";

const handleDelete = () => {

}

const handleOnPress = () => {

}

const ComponentsJob = ({ navigation }) => {
  return (
    <>
    <Appbar.Header style={{backgroundColor:"#7D1E6A"}}>
      <Appbar.BackAction onPress={() => navigation.navigate('InventoryHome')} color='white'/>
      <Appbar.Content title="Material Requirements" titleStyle={{color:'white'}}/>
    </Appbar.Header>
      <KeyboardAvoidingView>
        <View>
          <TextInput style={styles.textInput} label="Main" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={styles.textInput} label="Quantities" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={styles.textInput} label="R Quantities" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={styles.textInput} label="Supply" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={styles.textInput} label="ATP" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={[styles.textInput, { height: 200 }]} label="Comments" right={<TextInput.Icon disabled icon="note" />} />
        </View>
        <Button style={{ margin: 50 }} mode="contained" onPress={() => console.log('Pressed')}>Submit</Button>
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

export default ComponentsJob;