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
import { Config } from "../Common/Config";
import {getCurrentAdmin, getToken} from "../Common/Helper";

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
        this.getInfoUser();
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
                <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Button title="Edit" style={{height: 50}} onPress={() => this.props.navigation.navigate('EditUser', {admin: JSON.stringify(data)})} />
                    <Button title="Logout" style={{height: 50}} onPress={this.onPressLogout}/>
                </View>
            </View>
        );
    }
}

export default ProfileScreen;