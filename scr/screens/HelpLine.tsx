import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import GetLocation, { isLocationError, Location, LocationErrorCode } from 'react-native-get-location';



export default function HelpLine() {
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState<Location | null>(null);
    const [error, setError] = useState<LocationErrorCode | null>(null);

    const requestLocation = () => {
        setLoading(true);
        setLocation(null);
        setError(null);

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 3000,
            rationale: {
                title: 'Location permission',
                message: 'The app needs the permission to request your location.',
                buttonPositive: 'Ok',
            },
        })
            .then(newLocation => {
                setLoading(false);
                setLocation(newLocation);
            })
            .catch(ex => {
                if (isLocationError(ex)) {
                    const { code, message } = ex;
                    console.warn(code, message);
                    setError(code);
                } else {
                    console.warn(ex);
                }
                setLoading(false);
                setLocation(null);
            });
    };
    useEffect(() => {
        setTimeout(() => {
            requestLocation;
        }, 5000);
    });
    return (
        <View style={styles.container}>

            <View style={styles.button}>
                <Button
                    disabled={loading}
                    title="Get Location"
                    onPress={requestLocation}
                />
            </View>

            {loading ? <ActivityIndicator /> : null}
            {location ? (
                <Text style={styles.location}>{JSON.stringify(location, null, 2)}</Text>
            ) : null}
            {error ? <Text style={styles.location}>Error: {error}</Text> : null}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    location: {
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        marginBottom: 8,
    },
});
