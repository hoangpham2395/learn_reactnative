import React, {Component} from 'react';
import styles from './LoginCss';
import {
    View,
    TextInput,
    Text,
    Button,
    Alert,
    AsyncStorage,
} from 'react-native';
import { Config } from "../Common/Config";

class LoginScreen extends Component
{
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
        };
    }

    onPressLogin = async () => {
        let email = this.state.email;
        let password = this.state.password;

        // Check required
        if (!email) {
            return Alert.alert('Enter email.');
        }

        if (!password) {
            return Alert.alert('Enter password.');
        }

        // Check email format
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(regEmail.test(email) === false)
        {
            return Alert.alert('Email is invalid.');
        }

        // Call api login
        let params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };

        let response = await fetch(Config.domainApi + 'api/user/login', params)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            }, function () {
                Alert.alert('Login failed.');
            })
            .catch((error) => {
                console.error(error);
            });

        if (response.status) {
            // AsyncStorage chỉ lưu biến string
            await AsyncStorage.setItem('@admin', JSON.stringify(response.data)).catch((e) => console.error(e));
            await AsyncStorage.setItem('@accessToken', response.data.access_token).catch((e) => console.error(e));
            this.props.navigation.navigate('App');
        } else {
            Alert.alert(response.message);
        }
    };

    render() {
        return (
            <View style={styles.containerLogin}>
                <Text style={styles.title}>React Native</Text>
                <View style={styles.full}>
                    <TextInput
                        style={styles.input}
                        value={this.state.email}
                        placeholder="Email"
                        onChangeText={(email) => {this.setState({email: email})}}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        value={this.state.password}
                        placeholder="Password"
                        onChangeText={(password) => {this.setState({password: password})}}
                    />
                </View>
                <View style={styles.mT20}>
                    <Button title="Login" style={styles.button} onPress={this.onPressLogin}/>
                </View>
            </View>
        );
    }
}

export default LoginScreen;