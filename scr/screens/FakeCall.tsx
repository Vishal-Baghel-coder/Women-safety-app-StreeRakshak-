import { View, Button, Text, Dimensions, StatusBar, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PushNotification from 'react-native-push-notification';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import RNCallKeep from 'react-native-callkeep';
import { v4 as uuidv4 } from 'uuid';
import '../CallKeep.js';

export default function FakeCall() {
    const handlocation = () => {
        PushNotification.localNotification(
            {
                channelId: 'your-channel-id',
                title: 'notification for call',
                message: 'you have call',
                playSound: true,
                largeIcon: 'ic_notification_round',
                bigLargeIcon: 'ic_notification',
            }
        );
    };
    const triggerCallNotification = () => {
        const callUUID = uuidv4();
        const handle = 'Kunal';
        const contactIdentifier = 'Phone +918327185253';

        //RNCallKeep.displayIncomingCall(callUUID, handle, contactIdentifier, 'generic', true);
    };
    return (
        <View>
            <Button title="fakecall" onPress={() => handlocation()} />
            <Button title="Trigger Call Notification" onPress={triggerCallNotification} />
            <Text style={{ marginBottom: 70, color: 'white' }}>Incoming call</Text>
            <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>Kunal</Text>
            <Text style={{ color: 'white', fontWeight: '400' }}>Phone +918327185253</Text>
            <View style={{ flex: 0.38, justifyContent: 'flex-end' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40 }}>
                    <TouchableOpacity style={{ backgroundColor: '#ffffff', alignItems: 'center', borderRadius: 35, justifyContent: 'center' }}>
                        <Image source={require('../../android/app/src/main/res/drawable/callpick.png')} style={{ width: 70, height: 70, borderRadius: 35 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 70, height: 70, backgroundColor: '#ffffff', alignItems: 'center', borderRadius: 35, justifyContent: 'center' }}>
                        <Image source={require('../../android/app/src/main/res/drawable/callend.png')} resizeMode='center' style={{ width: 70, height: 70, marginTop: 5, borderRadius: 35 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


export function Callscreen() {
    const { width, height } = Dimensions.get('screen');
    return (
        <View>
            <StatusBar backgroundColor={'#5293af'} />
            <LinearGradient colors={['#5293af', '#78ada3']} style={{ width: width, height: height }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.5, alignItems: 'center' }}>
                        <Text style={{ marginBottom: 70, color: 'white' }}>Incoming call</Text>
                        <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>Kunal</Text>
                        <Text style={{ color: 'white', fontWeight: '400' }}>Phone +918327185253</Text>
                    </View>
                    <View style={{ flex: 0.38, justifyContent: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40 }}>
                            <TouchableOpacity style={{ backgroundColor: '#ffffff', alignItems: 'center', borderRadius: 35, justifyContent: 'center' }}>
                                <Image source={require('../../android/app/src/main/res/drawable/callpick.png')} style={{ width: 70, height: 70, borderRadius: 35 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 70, height: 70, backgroundColor: '#ffffff', alignItems: 'center', borderRadius: 35, justifyContent: 'center' }}>
                                <Image source={require('../../android/app/src/main/res/drawable/callend.png')} resizeMode='center' style={{ width: 70, height: 70, marginTop: 5, borderRadius: 35 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 0.12, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ width: 100, height: 20, alignItems: 'center' }}>
                            <View style={{ width: 100, height: 3, backgroundColor: 'white', right: 2.5 }} />
                            <Text style={{ color: "#ffffff" }}>Send message</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
