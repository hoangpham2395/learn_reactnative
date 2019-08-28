import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from "../Common/Style";

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
        };
    }
    
    pushNotification = () => {
        
    };
    
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.title}
                        onChangeText={(text) => this.setState({title: text})}/>
                </View>
                <View>
                    <Text style={styles.label}>Content</Text>
                    <TextInput 
                        style={styles.input}
                        value={this.state.content}
                        onChangeText={(text) => this.setState({content: text})}/>
                </View>
                <View style={{marginTop: 15}}>
                    <Button title="Push" onPress={this.pushNotification}/>
                </View>
            </View>
        );
    }    
}