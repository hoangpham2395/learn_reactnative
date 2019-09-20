import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import styles from "../Common/Style";

export default class SettingScreen extends Component
{
    static navigationOptions = {
        header: null,
    };
    
    loadPage(page) {
        this.props.navigation.navigate(page);
    };
    
    render() {
        return (
            <View style={[styles.container, {justifyContent:'center', alignItems: 'center'}]}>
                <Text style={styles.title}>Settings</Text>
                <View style={styles.viewButton}>
                    <Button title="Send mail" onPress={() => this.loadPage('SendMail')}/>
                </View>
                <View style={styles.viewButton}>
                    <Button title="Push notification" onPress={() => this.loadPage('PushNotification')}/>
                </View>
                <View style={styles.viewButton}>
                    <Button title="Calendar" onPress={() => this.loadPage('Calendar')}/>
                </View>
                <View style={styles.viewButton}>
                    <Button title="Tab in tab" onPress={() => this.loadPage('TabInTab')}/>
                </View>
            </View>
        );
    }    
}