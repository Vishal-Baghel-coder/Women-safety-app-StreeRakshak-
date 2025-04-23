/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
// eslint-disable-next-line eslint-comments/no-unused-disable
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FakeCall from './FakeCall';
import TrackScreen from './TrackScreen';
import HelpLine from './HelpLine';
import Sos from './Sos';

const Tab = createBottomTabNavigator();
const CustomTabBarButtom = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: 18,

            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow,
        }}
        onPress={onPress}
    >
        <View style={{ width: 70, height: 70, borderRadius: 35, alignItems: 'center' }}>
            {children}
        </View>
    </TouchableOpacity>
);
export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    height: 70,
                    elevation: 0,
                    ...styles.shadow,
                },
            }}
            initialRouteName='Track Me'
        >
            <Tab.Screen name="Track Me" component={TrackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center', top: 10, height: 60, width: 60 }}>
                        <Image source={require('../../android/app/src/main/res/drawable/map.png')} resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#fc79e9' : '#748c96',
                            }}
                        />
                        <Text style={{ fontSize: 12, color: focused ? '#fc79e9' : '#748c96' }}>Track Me</Text>
                    </View>
                ),

            }}
            />
            <Tab.Screen name="Record" component={Recording} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center', top: 10, height: 60, width: 60 }}>
                        <Image source={require('../../android/app/src/main/res/drawable/record.png')} resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#fc79e9' : '#748c96',
                            }}
                        />
                        <Text style={{ fontSize: 12, color: focused ? '#fc79e9' : '#748c96' }}>Record</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Sos" component={Sos} options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={require('../../android/app/src/main/res/drawable/sos.png')} style={{ width: 70, height: 70, tintColor: '#fffff' }} />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButtom {...props} />
                ),
            }} />
            <Tab.Screen name="Fake Call" component={FakeCall} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center', top: 10, height: 60, width: 60 }}>
                        <Image source={require('../../android/app/src/main/res/drawable/call.png')} resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#fc79e9' : '#748c96',
                            }}
                        />
                        <Text style={{ fontSize: 12, color: focused ? '#fc79e9' : '#748c96' }}>Fake Call</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="HelpLine" component={HelpLine} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center', top: 10, height: 60, width: 60 }}>
                        <Image source={require('../../android/app/src/main/res/drawable/helpline.png')} resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#fc79e9' : '#748c96',
                            }}
                        />
                        <Text style={{ fontSize: 12, color: focused ? '#fc79e9' : '#748c96' }}>HelpLine</Text>
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}
export function Recording() {
    return (
        <View style={styles.main}>
            <View style={styles.bottom}>
                <Text>Recording</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'gray',
    },
    bottom: {
        flex: 0.05,
        backgroundColor: '#fc79e9',
        justifyContent: 'center',
    },
    shadow: {
        shadowColor: '#7F50F0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.5,
    },
});
