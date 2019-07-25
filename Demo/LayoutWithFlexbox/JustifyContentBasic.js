import React, {Component} from 'react';
import {View} from 'react-native';

class JustifyContentBasic extends Component
{
    render() {
        // View cha sẽ show các view con ra thành 1 trục (có thể là row hoặc column)
        // Các giá trị của justifyContent:
        // - flex-start (default): show ở đầu trục
        // - flex-end: show ở cuối trục
        // - center: show ở giữa trục
        // - space-between: show các view con cách đều theo trục, space ở giữa các view
        // - space-around: show các view con cách đều theo trục, space ở đầu, giữa và cuối các view
        return (
            // Đối với trường này thì các view con sẽ được show theo trục dọc của màn hình, space ở giữa các view
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
            </View>
        );
    }
}

export default JustifyContentBasic;