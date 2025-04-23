import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();
    return (
        <LinearGradient colors={['#f542da', '#fc79e9', '#BEA96B']} style={{ width: width, height: height }}>
            <View style={styles.maincontainer}>
                <View style={styles.LoginHeader}>
                    <Text style={styles.logintext}>Login</Text>
                </View>
                <View style={styles.input}>
                    <View style={styles.emailcontainer}>
                        <Text>Email or Phone number</Text>
                        <TextInput style={styles.emailinput} />
                    </View>
                </View>
                <View style={styles.passwordinput}>
                    <View style={styles.emailcontainer}>
                        <Text>Password</Text>
                        <TextInput style={styles.emailinput} secureTextEntry={true} />
                    </View>
                </View>
            </View>
            <View style={{ alignSelf: 'flex-end', flex: 0.06, marginBottom: 80, marginRight: 60 }}>
                <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('TabScreen')}>
                    <Text style={{ textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 40,
    },
    passwordinput: {
        marginTop: 18,
    },
    maincontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 140,
    },
    LoginHeader: {
    },
    login: {
        width: 100,
        height: 50,
        backgroundColor: '#7049D7',
        justifyContent: 'center',
        borderRadius: 8,
    },
    logintext: {
        fontSize: 30,
        color: '#ffffffff',
        marginLeft: 25,
        fontFamily: 'Inter',
    },
    emailcontainer: {
        marginLeft: 25,
    },
    emailinput: {
        width: '80%',
        borderColor: '#ffffffff',
        borderRadius: 12,
        borderWidth: 3,
        marginTop: 8,
    },

});
