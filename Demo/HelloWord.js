import React, {Component} from 'react';
import {Text, View} from 'react-native';

class HelloWord extends Component
{
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Hello world! Hello HoangPH!</Text>
            </View>
        );
    }
}

export default HelloWord;