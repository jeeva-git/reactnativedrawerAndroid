import React from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Appbar, TextInput, Chip, Button } from 'react-native-paper';

const handleDelete = () => {

}

const handleOnPress = () => {

}

const ComponentsJob = ({ navigation }) => {
  return (
    <><Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.popToTop()} />
      <Appbar.Content title="Material Requirements"/>
    </Appbar.Header>
      <KeyboardAvoidingView>
        <View>
          <TextInput style={styles.textInput} label="Main" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={styles.textInput} label="Quantities" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={styles.textInput} label="R Quantities" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={styles.textInput} label="Supply" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput label="ATP" right={<TextInput.Icon disabled icon="information" />} />
          <TextInput style={[styles.textInput, { height: 200 }]} label="Comments" right={<TextInput.Icon disabled icon="note" />} />
        </View>
        <Button style={{ margin: 50 }} mode="contained" onPress={() => console.log('Pressed')}>Submit</Button>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
   // backgroundColor: Constants.COMMON_BG_COLOR,
  }
})

export default ComponentsJob;