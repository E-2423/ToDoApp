import React, {useState} from "react";
import {View, TextInput, StyleSheet, Platform} from "react-native";
const Input = ({holder}) => {
    const [text, setText] = useState('');
    return(
        <View style= {styles.container}>
            <TextInput text={duty}
                placeholder={holder}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ECEFF1",
        padding: Platform.OS == "ios" ? 15 : 5,
        margin:10,
        borderRadius: 10,
        marginVertical:30,
    }
})
export default Input;