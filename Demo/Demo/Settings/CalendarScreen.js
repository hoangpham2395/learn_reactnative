import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import styles from "../Common/Style";

export default class CalendarScreen extends Component
{
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Calendar',
            headerStyle: {
                backgroundColor: 'steelblue',
                borderWidth: 0
            },
            headerTintColor: 'white',
        };
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Calendar</Text>
            </View>
        );
    }    
}