import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const details = [
    {
        id: 1,
        title: 'My Profile',
        image: require('../../android/app/src/main/res/drawable/user.png'),
    },
    {
        id: 2,
        title: 'friends',
        image: require('../../android/app/src/main/res/drawable/friends.png'),
    },
    {
        id: 3,
        title: 'Histroy',
        image: require('../../android/app/src/main/res/drawable/history.png'),
    },
    {
        id: 4,
        title: 'Feedback',
        image: require('../../android/app/src/main/res/drawable/feedback.png'),
    },
    {
        id: 5,
        title: 'Legal',
        image: require('../../android/app/src/main/res/drawable/legal_document.png'),
    },
    {
        id: 6,
        title: 'Help',
        image: require('../../android/app/src/main/res/drawable/ask_for_help.png'),
    },
    {
        id: 7,
        title: 'Language',
        image: require('../../android/app/src/main/res/drawable/language.png'),
    },
    {
        id: 8,
        title: 'Settings',
        image: require('../../android/app/src/main/res/drawable/settings.png'),
    },
    {
        id: 9,
        title: 'Logout',
        image: require('../../android/app/src/main/res/drawable/logout.png'),
    },
];
export default function Header() {
    const [visiblemodal, setvisiblemodal] = useState(false);
    return (
        <View style={styles.header}>
            <Modal
                transparent={true}
                visible={visiblemodal}
            >
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{
                        flex: 0.7,
                    }}>
                        <LinearGradient colors={['#f542da', '#fc79e9', '#BEA96B']} style={{ flex: 1 }}>
                            <View
                                style={{ justifyContent: 'center', height: '25%', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => setvisiblemodal(false)}>
                                    <Image source={require('../../android/app/src/main/res/drawable/krishna.jpg')} style={{ width: 120, height: 120, borderRadius: 60 }} />
                                </TouchableOpacity>
                                <View >
                                    <Text>Krishna</Text>
                                </View>
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                {
                                    details.map((details) => (
                                        <TouchableOpacity style={{ flexDirection: 'row', height: 60, alignItems: 'center' }} key={details.id}>
                                            <Image source={details.image} style={{ width: 40, height: 40 }} />
                                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'center' }}>
                                                <Text style={{ alignSelf: 'center' }}>{details.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </LinearGradient>
                    </View>
                    <View
                        style={{
                            flex: 0.3,
                        }}
                    >
                        <TouchableOpacity onPress={() => setvisiblemodal(false)} style={{ flex: 1 }} />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => setvisiblemodal(true)} >
                <Image source={require('../../android/app/src/main/res/drawable/icon_menu.png')} style={{ width: 40, height: 30, marginLeft: 15 }} />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', marginLeft: 70 }}>
                <Text style={styles.title}>Stree Rakshak</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#fc79e9',
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Inter',
        color: '#00000',
        verticalAlign: 'middle',

    },

});
