import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Header from './Header';
import MapView, { Marker } from 'react-native-maps';
import GetLocation, { isLocationError, Location, LocationErrorCode } from 'react-native-get-location';
//Mapbox.setAccessToken('Tk8rWhpHLNwuv2Ak2rg4');
export default function TrackScreen() {
    const [userLocation, setuserLocation] = useState<Location | { latitude: 7586, longitude: 8575, accuracy: 0, altitude: 0, speed: 0, time: 0 }>({ latitude: 7586, longitude: 8575, accuracy: 0, altitude: 0, speed: 0, time: 0 });
    const [error, setError] = useState<LocationErrorCode | null>(null);
    const [markerlocation, setmarkerlocation] = useState<Location | null>();
    /*GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 100000,
        rationale: {
            title: 'APP need Permission',
            message: 'Stree Rakshak needs permission for location',
            buttonPositive: 'ok',
        },
    })
        .then(newLocation => {
            setuserLocation(newLocation);
        })
        .catch(err => {
            if (isLocationError(err)) {
                const { code, message } = err;
                console.warn(code, message);
                setError(code);
            } else {
                console.warn(err);
            }
        });
    console.log(userLocation);
    */
    return (
        <View style={styles.maincontainer}>
            <Header />
            <View style={{}}>
                <View style={{ left: 15 }}>
                    <Text style={styles.trackheader}>Track me</Text>
                    <Text >Share your live location to friends. </Text>
                </View>
            </View>
            <View style={styles.Adder}>
                <Text style={{ textAlignVertical: 'center', left: 15 }}> Add your friends in friendList</Text>
                <TouchableOpacity style={{ right: 15, backgroundColor: 'gray', width: '20%', borderRadius: 15, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <MapView style={{ flex: 0.9, justifyContent: 'flex-end' }}
                    region={{
                        latitude: 23.590493,
                        longitude: 75.223702,
                        latitudeDelta: 1,
                        longitudeDelta: 1,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: userLocation.latitude,
                            longitude: userLocation.longitude,
                        }}
                    />
                </MapView>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },
    trackheader: {
        fontSize: 20,
    },
    Adder: {
        flex: 0.05,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Markercss: {
        width: 10,
        height: 10,
    },
});
