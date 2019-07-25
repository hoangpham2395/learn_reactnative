import React, {Component} from 'react';
import {View} from 'react-native';

class FixedDimensionsBasic extends Component
{
    render() {
        return (
            // Show các view con theo trục dọc
            <View>
                <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                <View style={{width: 100, height: 100, backgroundColor: 'blue'}}></View>
                <View style={{width: 150, height: 150, backgroundColor: 'yellow'}}></View>
            </View>
        );
    }
}

export default FixedDimensionsBasic;