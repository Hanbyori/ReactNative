import React, { Component, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, MAP_TYPES } from 'react-native-maps';
export default class MychatScreen extends React.Component {
    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
				mapType="hybrid"
                initialRegion={{
                	latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
				>
				
			<MapView.Marker
				title="테스트용 마커"
				description="설명입니다.설명입니다."
				coordinate={{
					latitude: 37.78825,
					longitude: -122.4324,
				}}                
				>
				
			</MapView.Marker>
			</MapView>
        );
    }
}