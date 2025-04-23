import { PermissionsAndroid } from 'react-native';
import RNCallKeep from 'react-native-callkeep';

const options = {
    ios: {
        appName: 'StreeRakshak',
    },
    android: {
        alertTitle: 'Permissions required',
        alertDescription: 'This application needs to access your phone accounts',
        cancelButton: 'Cancel',
        okButton: 'ok',
        additionalPermissions: [PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE],
        foregroundService: {
            channelId: 'com.streerakshak',
            channelName: 'Foreground service for my app',
            notificationTitle: 'My app is running on background',
        },
    },
};

RNCallKeep.setup(options);
RNCallKeep.setAvailable(true); // Only used for Android, see doc above.
