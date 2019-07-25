import React, {Component} from 'react';
import {View} from 'react-native';

class FlexDirectionBasic extends Component
{
    render() {
        // flexDirection default là column (sắp xếp theo 1 cột), sắp xếp ngược lại so với column là column-reserve
        // Sắp xếp 3 view theo 1 hàng thì dùng flexDirection: row, sắp xếp ngược với row là row-reserve
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
            </View>
        );
    }
}

export default FlexDirectionBasic;