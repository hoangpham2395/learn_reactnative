import React, {Component} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import styles from "../Common/Style";
import {sendEmail} from "../Common/SendMail";
import Icon from "react-native-vector-icons/FontAwesome5";
import {ValidatorSendMail} from "./ValidatorSettings";
import {Message} from "../Common/Config";

export default class SendMailScreen extends Component
{
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Send mail',
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
            to: '',
            subject: '',
            body: '',
            cc: '',
            bcc: '',
            isSent: false,
        };
    }

    sendMail = async () => {
        let {to, subject, body, cc, bcc} = this.state;
        let options = {cc, bcc};
        
        // Validate
        let validator = ValidatorSendMail({to, subject, body});
        if (!validator.status) {
            return Alert.alert(validator.message);
        }
        
        sendEmail(to, subject, body, options).then(() => {
            console.log(Message.sendMailSuccess);
            this.setState((state, props) => ({
                isSent: true,
            }));
        });
    };
    
    continueSend = () => {
        this.setState((state, props) => ({
            to: '',
            subject: '',
            body: '',
            cc: '',
            bcc: '',
            isSent: false,
        }));
    };
    
    render() {
        if (this.state.isSent) {
            return (
                <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
                    <Text style={styles.title}>{Message.sendMailSuccess}</Text>
                    <View style={{marginTop: 15}}>
                        <Button title="Continue send" onPress={this.continueSend}/>
                    </View>
                </View>
            );
        }
        
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>To [<Icon name="asterisk" size={14} color="red"/>]</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.to}
                        onChangeText={(text) => this.setState({to: text})}/>
                </View>
                <View>
                    <Text style={styles.label}>Cc</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.cc}
                        onChangeText={(text) => this.setState({cc: text})}/>
                </View>
                <View>
                    <Text style={styles.label}>Bcc</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.bcc}
                        onChangeText={(text) => this.setState({bcc: text})}/>
                </View>
                <View>
                    <Text style={styles.label}>Subject [<Icon name="asterisk" size={14} color="red"/>]</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.subject}
                        onChangeText={(text) => this.setState({subject: text})}/>
                </View>
                <View>
                    <Text style={styles.label}>Body [<Icon name="asterisk" size={14} color="red"/>]</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        style={styles.input}
                        value={this.state.body}
                        onChangeText={(text) => this.setState({body: text})}/>
                </View>
                <View style={{marginTop: 15}}>
                    <Button title="Send" onPress={this.sendMail}/>
                </View>
            </View>
        );
    }    
}