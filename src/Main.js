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
        setList(newArray);
    }

    function doneTodo(todoId){
        const newArray = [...list];
        const todoIndex = newArray.findIndex(item => item.id == todoId);

        newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

        setList(newArray);
    }

    function removeTodo(todoId) {
        const newArray = [...list];
        const todoIndex = list.findIndex(t => t.id == todoId);

        newArray.splice(todoIndex, 1);
        setList(newArray);
    }



    const renderTodo =({item})=>{
        return(
            <TodoCard
                data={item}
                onDone={()=>doneTodo(item.id)}
                onRemove={() =>removeTodo(item.id)}
            />
        )
    }


    return (
        <SafeAreaView style={main.container}>
            <View  style={main.container}>
                <View style={main.banner}>
                    <Text style={main.todoText}>TODO</Text>
                    <Text  style={main.todoCount}>{list.filter(t=>t.isDone ===false).length}</Text>

                </View>

                <FlatList
                    keyExtractor={(item, index)=> index.toString()}
                    data={list}
                    renderItem={renderTodo}
                    ListEmptyComponent={()=><Text style={main.emptyComponet}>Nothing to do...</Text>}
                    

                />

                <TodoInput
                    onTodoEnter={todoText=>addTodo(todoText)}
                />

            </View>
        </SafeAreaView>
    )
}

export default Main;