import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
} from "react-native";
import styles from "../Common/Style";
import {VEditUser} from "./Validators/VUser";
import CallApi from "../Common/CallApi";
import {Api, Config} from "../Common/Config";
import {getToken, setCurrentAdmin, setToken} from "../Common/Helper";
import Icon from "react-native-vector-icons/FontAwesome5";

class EditUserScreen extends Component
{
    static navigationOptions = ({ navigation }) => {
        // let shop = navigation.getParam('');
        return {
            title: 'Edit profile',
            headerStyle: {
                backgroundColor: 'steelblue',
                borderWidth: 0
            },
            headerTintColor: 'white',
            // headerLeft: <HeaderBackButton tintColor="white" onPress={() => navigation.navigate(null)} />,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            tel: '',
        };
    }

    componentDidMount(){
        let data = JSON.parse(this.props.navigation.getParam('admin'));
        this.setState(({state, props}) => ({
            name: data.name,
            email: data.email,
            tel: data.tel,
        }));
    }

    editUser = async () => {
        let name = this.state.name;
        let email = this.state.email;
        let password = this.state.password;
        let tel = this.state.tel;
        let data = {name, email, password, tel};

        // Validate
        let validator = await VEditUser(data);
        if (!validator.status) {
            return Alert.alert('Error', validator.message);
        }

        // Call api
        let urlApi = Config.domainApi + Api.editUser;
        let token = await getToken();
        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token,
            },
            body: JSON.stringify(data)
        };

        let result = await CallApi(urlApi, options);

        // Failed
        if (!result.status) {
            return Alert.alert(result.message);
        }

        // Reset AsyncStorage lưu thông tin admin
        await setCurrentAdmin(data);
        // await setToken(result.data.access_token);
        // Chuyển vể trang profile
        Alert.alert('Notify', result.message);
        this.props.navigation.navigate('MyProfile');
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>Email [<Icon name="asterisk" size={14} color="red"/>]</Text>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.email}
                        onChangeText={(text) => this.setState({email: text})}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({password: text})}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Phone number</Text>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.tel}
                        onChangeText={(text) => this.setState({tel: text})}
                    />
                </View>
                <View style={{marginTop: 30}}>
                    <Button title="Submit" onPress={this.editUser} />
                </View>
            </View>
        );
    }
}

export default EditUserScreen;