import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import React, { } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function StartingScreen() {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window');
    return (
        <LinearGradient colors={['#f542da', '#fc79e9', '#BEA96B']} style={{ width: width, height: height }}>
            <View style={styles.maincontainer}>
                <View style={styles.middlecontainer}>
                    <Image source={require('../../android/app/src/main/res/drawable/image_removebg_preview.png')} style={styles.Image} />
                    <Text style={styles.title}>Stree Rakshak</Text>
                </View>
                <View style={styles.Bottom}>
                    <View style={styles.Bottombutton}>
                        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate("Register")}>
                            <Text style={styles.registerText}>New Here?register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("Login")}>
                            <Text style={{ textAlign: 'center', color: "#ffffff", fontFamily: 'Inter', }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        flexDirection: 'column',
    },
    register: {
        marginTop: 25,
        height: 40,
        marginLeft: 30,
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 30,
        letterSpacing: 6,
        color: '#ffffff',
    },
    middlecontainer: {
        flex: 6,
        justifyContent: 'center',
        alignContent: 'center',
    },
    Image: {
        width: '100%',
        height: '27%',
    },
    registerText: {
        verticalAlign: 'bottom',
        color: '#ffffff',
        fontFamily: 'Inter',
    },
    login: {
        width: '30%',
        height: 50,
        backgroundColor: '#7049D7',
        marginRight: 40,
        justifyContent: 'center',
        borderRadius: 8,
    },
    Bottom: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    Bottombutton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
//7049D7
