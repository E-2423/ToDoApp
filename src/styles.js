import {Dimensions, StyleSheet} from 'react-native';


const main = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#303e45'
    },
    banner:{
        
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center'

    },
    todoText:{
        fontSize:50,
        fontWeight:'bold',
        color:'#ff9b31'

    },
    todoCounter:{
        fontSize:35,
        color:'#ff9b31'

    }
})
const todo_input = StyleSheet.create({
    inputContainer:{
        backgroundColor:'#e0e0e0',
        padding:10,
        margin:10,
        borderRadius:10
    },
    container:{
        backgroundColor:'#a7b6bd',
        padding:10,
        margin:10,
        borderRadius:10
    },
    buttonContainer:{
        backgroundColor:'#4a636e',
        padding:10,
        margin:10,
        borderRadius:10,
        width:Dimensions.get('window').width/2.5,
        alignSelf:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    }
})
const todo_card = StyleSheet.create({
    container:{
        backgroundColor:'#a7b6bd',
        padding:8,
        margin:5,
        borderRadius:7
    },
    text:{
        fontSize:20
    }
})
export {main, todo_input, todo_card};