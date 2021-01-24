import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.message}>Test Message!</Text>
			<Image source = {require('./assets/unnamed.jpg')} style = {styles.pictrue}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
	message: {
		color: 'red'
	},
	pictrue: {
		width: 200,
		height: 200
	},
});