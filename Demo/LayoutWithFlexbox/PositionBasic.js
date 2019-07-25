import React, {Component} from 'react';
import {View} from 'react-native';

class PositionBasic extends Component
{
    render() {
        return (
            <View style={{flex: 1, position: 'relative'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'red', position: 'absolute', top: 0, left: 0}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'orange', position: 'absolute', top: 20, left: 20}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'green', position: 'absolute', top: 40, left: 40}}></View>
            </View>
        );
    }
}

export default PositionBasic;