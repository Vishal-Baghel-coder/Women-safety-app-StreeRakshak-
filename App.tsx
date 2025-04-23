// In App.js in a new project

import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingScreen from './scr/screens/startingscreen';
import LoginScreen from './scr/screens/LoginScreen';
import RegisterScreen from './scr/screens/RegisterScreen';
import TabNavigator from './scr/screens/TabNavigator';
import { Callscreen } from './scr/screens/FakeCall';
import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';


const Stack = createNativeStackNavigator();

function RootStack() {
  const navigation = useNavigation();
  PushNotification.configure({
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      if (notification.userInteraction) {
        navigation.navigate("CallerScreen");
      }
    },
    requestPermissions: Platform.OS === 'ios',
  });
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="StartingPage" component={StartingScreen} options={{ animation: 'slide_from_bottom' }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="TabScreen" component={TabNavigator} />
      <Stack.Screen name="CallerScreen" component={Callscreen} />
    </Stack.Navigator>
  );
}
PushNotification.createChannel(
  {
    channelId: 'your-channel-id', // (required)
    channelName: 'My channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: false, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
