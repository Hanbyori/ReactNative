import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style = {styles.container}>
            <Text style = {style.message}>Open up App.js to start working on your app!</Text>
			<Image source = {require('./assets/unnamed.jpg')} style = {style.pictrue}></Image>
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
		witdh: 100,
		height: 100
	},
});