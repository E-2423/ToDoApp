import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import {main} from './styles';
import {TodoCard, TodoInput} from './components';


const Main =() => {
    const [list, setList] = useState([]);

    function addTodo(text){
        const element={
            id:list.length,
            todo:text,
            isDone:false
        }

        const newArray = [element, ...list]
        newArray.push(element)

        console.log(newArray);
        setList(newArray);
    }

    const renderTodo =({item})=><TodoCard data={item} />


    return (
        <SafeAreaView style={main.container}>
            <View  style={main.container}>
                <View style={main.banner}>
                    <Text style={main.todoText}>TODO</Text>
                    <Text  style={main.todoCount}>{list.length}</Text>

                </View>

                <FlatList
                    keyExtractor={(item, index)=> index.toString()}
                    data={list}
                    renderItem={renderTodo}
                    ListEmptyComponent={()=><Text>Nothing to do...</Text>}
                    

                />

                <TodoInput
                    onTodoEnter={todoText=>addTodo(todoText)}
                />

            </View>
        </SafeAreaView>
    )
}

export default Main;