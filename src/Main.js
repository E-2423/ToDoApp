import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import styles from './styles'

const Main =() => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View  style={styles.container}>
                <View style={styles.banner}>
                    <Text style={styles.todoText}>TODO</Text>
                    <Text  style={styles.todoCounter}>10</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Main;