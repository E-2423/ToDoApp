/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView, 
  View, 
  Text, 
  Button, 
  StyleSheet, 
  Dimensions} from 'react-native';
import Input from "./src/components/Input";
const App = (props) => {
  const [counter, setCounter] = useState(0);
  return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", margin: 10}}>
          <Text style={{fontSize:40}}>TODO</Text>
          <Text style={{fontSize:40}}>{counter}</Text>
        </View>
        <View>
            <Text>{}</Text>
        </View>
        <View style={styles.inputArea}>
          <Input holder="Enter your today's IT man" />
          <View style={styles.button}>
            <Button
              title="ADD TODO"
              onPress={() => {
                setCounter(counter + 1)
              }}
            />
          </View>
        </View>
      </SafeAreaView>
  )
};
export default App;
const styles = StyleSheet.create({
  inputArea: {
    borderRadius:10,
    height:160,
    backgroundColor:"gray",
    margin: 20
  },
  input:{
  },
  button: {
    width: Dimensions.get("window").width * 0.4,
    alignSelf: "center",
    borderRadius: 200
  }
})