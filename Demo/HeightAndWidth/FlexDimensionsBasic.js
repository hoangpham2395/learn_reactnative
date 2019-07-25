import React, {Component} from 'react';
import {View} from 'react-native';

class FlexDimensionsBasic extends Component
{
    // Dùng flex thì sẽ full màn hình, width full 100%, height phụ thuộc vào chỉ số flex
    // VD: 3 View đều flex: 1 thì height 2 View như nhau
    // Nếu View1, View2, View3 có chỉ số flex lần lượt là 1,2,3 thì tỉ lệ height của 3 view cũng tương tự như vậy
    render() {
        return (
            /* width: 100%, height: 100% theo component cha (bình thường là màn hình đt)*/
            <View style={{flex: 1}}>
                {/* width: 100%, height = 1/6 so với View cha */}
                <View style={{flex: 1, backgroundColor: 'powderblue'}}></View>
                {/* width: 100%, height = 1/3 so với View cha */}
                <View style={{flex: 2, backgroundColor: 'skyblue'}}></View>
                {/* width: 100%, height = 1/2 so với View cha */}
                <View style={{flex: 3, backgroundColor: 'steelblue'}}></View>
            </View>
        );
    }
}

export default FlexDimensionsBasic;