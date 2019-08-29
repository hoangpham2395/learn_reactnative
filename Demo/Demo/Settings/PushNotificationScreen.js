import React, {Component} from 'react';
import {View, Text, TextInput, Button, ScrollView, Alert} from 'react-native';
import styles from "../Common/Style";
import firebase from 'react-native-firebase';
import {Constant, Message} from "../Common/Config";
import ActiveIndicatorCustom from "../Common/ActiveIndicatorCustom";
import Icon from "react-native-vector-icons/FontAwesome5";
import {ValidatorPushNotification} from "./ValidatorSettings";
import {sendTestMessage} from "../Common/PushNotification";

export default class PushNotificationScreen extends Component
{
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Push notification',
            headerStyle: {
                backgroundColor: 'steelblue',
                borderWidth: 0
            },
            headerTintColor: 'white',
        };
    };
    
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            isLoading: true,
            deviceToken: '',
        };
        this.getDeviceToken();
    }
    
    async getDeviceToken() {
        let token = await firebase.messaging().getToken();
        this.setState({
            isLoading: false,
            deviceToken: token,
        });
    };
    
    pushNotification = () => {
        let title = this.state.title;
        let content = this.state.content;
        let firebaseToken = Constant.firebaseToken;
        let deviceToken = this.state.deviceToken;
        let data = {title, content, firebaseToken};
        
        // Validate
        let validator = ValidatorPushNotification(data);
        if (!validator.status) {
            return Alert.alert(validator.message);
        }
    };
    
    sendTestMessage = async () => {
        let title = this.state.title;
        let content = this.state.content;
        let firebaseToken = Constant.firebaseToken;
        let deviceToken = this.state.deviceToken;
        let data = {title, content, firebaseToken};
        
        // Validate
        let validator = ValidatorPushNotification(data);
        if (!validator.status) {
            return Alert.alert(validator.message);
        }
        
        // Send test message
        sendTestMessage(firebaseToken, deviceToken, title, content).then(() => {
            console.log(Message.sendTestMessageSuccess);
            this.setState((state, props) => ({
                title: '',
                content: '',
            }));
        });
    };
    
    render() {
        if (this.state.isLoading) {
            return <ActiveIndicatorCustom/>;
        }
        
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Push notification</Text>
                <View>
                    <Text style={styles.label}>Title [<Icon name="asterisk" size={14} color="red"/>]</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.title}
                        onChangeText={(text) => this.setState({title: text})}/>
                </View>
                <View>
                    <Text style={styles.label}>Content [<Icon name="asterisk" size={14} color="red"/>]</Text>
                    <TextInput 
                        multiline={true}
                        numberOfLines={4}
                        style={styles.input}
                        value={this.state.content}
                        onChangeText={(text) => this.setState({content: text})}/>
                </View>
                <View style={{marginTop: 15, marginBottom: 30}}>
                    <Button title="Push" onPress={this.pushNotification}/>
                </View>
                
                <Text style={styles.title}>Send test message</Text>
                <View>
                    <Text style={styles.label}>Firebase token</Text>
                    <Text>{Constant.firebaseToken ? Constant.firebaseToken : Message.getFirebaseToken }</Text>
                </View>
                <View>
                    <Text style={styles.label}>Device token</Text>
                    <Text>{this.state.deviceToken}</Text>
                </View>
                <View style={{marginTop: 15, marginBottom: 15}}>
                    <Button title="Send" onPress={this.sendTestMessage}/>
                </View>
                <View style={{paddingBottom: 50}}/>
            </ScrollView>
        );
    }    
}