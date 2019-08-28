import React, { Component } from 'react';
import styles from "../Common/Style";
import LoginScreen from "../Login/LoginScreen";
import {
    View,
    Text,
    Button,
    AsyncStorage,
    Alert,
} from 'react-native';
import ActiveIndicatorCustom from "../Common/ActiveIndicatorCustom";
import {Api, Config} from "../Common/Config";
import {getCurrentAdmin, getToken} from "../Common/Helper";
import firebase from 'react-native-firebase';

class ProfileScreen extends Component
{
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            isLoading: true,
        };
    }

    async getInfoUser() {
        let admin = await getCurrentAdmin();
        this.setState({
            admin: admin,
            isLoading: false,
        });
    };

    onPressLogout = async () => {
        const accessToken = await getToken();
        let params = {
            method: 'POST',
            headers: {
                'x-auth-token': accessToken,
            }
        };

        let result = await fetch(Config.domainApi + Api.logout, params)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            }, function () {
                Alert.alert('Logout failed.');
            })
            .catch((error) => {
                console.error(error);
            });

        if (result.status) {
            await AsyncStorage.clear();
            this.props.navigation.navigate('Auth');
        } else {
            Alert.alert(result.message);
        }
    };
    
    // Firebase
    async componentDidMount() {
        let token = await firebase.messaging().getToken();
        console.log(token);
        const notificationOpen: NotificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const action = notificationOpen.action;
            const notification: Notification = notificationOpen.notification;
            var seen = [];
            console.log(JSON.stringify(notification.data));
            // alert(JSON.stringify(notification.data, function(key, val) {
            //     if (val != null && typeof val == "object") {
            //         if (seen.indexOf(val) >= 0) {
            //             return;
            //         }
            //         seen.push(val);
            //     }
            //     return val;
            // }));
        }
        const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
                .setDescription('My apps test channel');
        // Create the channel
        firebase.notifications().android.createChannel(channel);
        this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {
            // Process your notification as required
            // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        });
        this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
            // Process your notification as required
            notification
                .android.setChannelId('test-channel')
                .android.setSmallIcon('ic_launcher');
            firebase.notifications()
                .displayNotification(notification);

        });
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
            // Get the action triggered by the notification being opened
            const action = notificationOpen.action;
            // Get information about the notification that was opened
            const notification: Notification = notificationOpen.notification;
            var seen = [];
            // alert(JSON.stringify(notification.data, function(key, val) {
            //     if (val != null && typeof val == "object") {
            //         if (seen.indexOf(val) >= 0) {
            //             return;
            //         }
            //         seen.push(val);
            //     }
            //     return val;
            // }));
            firebase.notifications().removeDeliveredNotification(notification.notificationId);
        });
    }
    componentWillUnmount() {
        this.notificationDisplayedListener();
        this.notificationListener();
        this.notificationOpenedListener();
    }

    render () {
        // Gọi ở đây thì từ trang khác back về sẽ load lại dữ liệu
        // Đặt trong constructor thì sẽ không load lại dữ liệu
        this.getInfoUser();

        if (this.state.isLoading) {
            // Chờ xử lý AsyncStorage xong, chưa xong thì chưa lấy thông tin user
            return <ActiveIndicatorCustom />;
        }

        const data = this.state.admin;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>My profile</Text>
                <View>
                    <Text>Name: {data.name}</Text>
                    <Text>Email: {data.email}</Text>
                    <Text>Phone number: {data.tel}</Text>
                </View>
                <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Button title="Edit" style={{height: 50}} onPress={() => this.props.navigation.navigate('EditUser', {admin: JSON.stringify(data)})} />
                    <Button title="Logout" style={{height: 50}} onPress={this.onPressLogout}/>
                </View>
            </View>
        );
    }
}

export default ProfileScreen;