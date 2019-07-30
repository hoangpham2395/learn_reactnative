import React, { Component } from 'react';
import styles from "../Login/LoginCss";
import LoginScreen from "../Login/LoginScreen";
import {
    View,
    Text,
    Button,
    AsyncStorage,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ActiveIndicatorCustom from "../Common/ActiveIndicatorCustom";
import { Config } from "../Common/Config";

class ProfileScreen extends Component
{
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarOptions: {
            showIcon: true
        },
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            // You can return any component that you like here!
            return <Icon name="user" size={25} color={tintColor}/>;
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            isLoading: true,
        };
        this.getInfoUser();
    }

    async getInfoUser() {
        let admin = JSON.parse(await AsyncStorage.getItem('@admin'));
        this.setState({
            admin: admin,
            isLoading: false,
        });
    };

    onPressLogout = async () => {
        const accessToken = await AsyncStorage.getItem('@accessToken');
        let params = {
            method: 'POST',
            headers: {
                'x-auth-token': accessToken,
            }
        };

        let result = await fetch(Config.domainApi + 'api/user/logout', params)
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

    render () {
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
                <View style={styles.mT20}>
                    <Button title="Logout" style={styles.button} onPress={this.onPressLogout}/>
                </View>
            </View>
        );
    }
}

export default ProfileScreen;