import React, {Component} from 'react';
import styles from '../Common/Style';
import {
    View,
    TextInput,
    Text,
    Button,
    Alert,
    AsyncStorage,
} from 'react-native';
import { Config } from "../Common/Config";
import {setCurrentAdmin, setToken} from "../Common/Helper";
import {VLogin} from "../User/Validators/VUser";
import CallApi from "../Common/CallApi";

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
        let data = {email, password};

        // Validate
        let validator = await VLogin(data);
        if (!validator.status) {
            return Alert.alert(validator.message);
        }

        // Call api login
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        let response = await CallApi(Config.domainApi + 'api/user/login', options);

        if (response.status) {
            // Lưu giá trị admin đang login
            await setCurrentAdmin(response.data);
            await setToken(response.data.access_token);
            // Chuyển sang trang profile
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