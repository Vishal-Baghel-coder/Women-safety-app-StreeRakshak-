import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function RegisterScreen() {
    const { width, height } = Dimensions.get('window');
    return (
        <LinearGradient colors={['#f542da', '#fc79e9', '#BEA96B']} style={{ width: width, height: height }}>
            <View style={styles.maincontainer}>
                <View style={styles.LoginHeader}>
                    <Text style={styles.logintext}>Register</Text>
                </View>
                <View style={styles.input}>
                    <View style={styles.emailcontainer}>
                        <Text>FullName</Text>
                        <TextInput style={styles.emailinput} />
                    </View>
                </View>
                <View style={styles.passwordinput}>
                    <View style={styles.emailcontainer}>
                        <Text>Email or Phone number</Text>
                        <TextInput style={styles.emailinput} />
                    </View>
                </View>
                <View style={styles.passwordinput}>
                    <View style={styles.emailcontainer}>
                        <Text>Password</Text>
                        <TextInput style={styles.emailinput} />
                    </View>
                </View>
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
    },
    LoginHeader: {
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
