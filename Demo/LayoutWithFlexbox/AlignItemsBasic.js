import React, {Component} from 'react';
import {View} from 'react-native';

class AlignItemsBasic extends Component
{
    // View show các view con theo 1 trục (row or column)
    // Các giá trị của justifyContent:
    // - stretch: (default) full width các view con nếu trục là dọc và chưa fix width cho view, hoặc full height nếu trục là ngang và chưa fix height
    // - flex-start
    // - center
    // - flex-end
    render() {
        return (
            // Example
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
                <View style={{height: 50, backgroundColor: 'skyblue'}}></View>
                <View style={{height: 100, backgroundColor: 'steelblue'}}></View>
            </View>

            // Image 1: show view con theo trục dọc và ở đầu trục ngang của view cha
            //<View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start'}}>
                //<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
                //<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
                //<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
            //</View>

            // Image 2: show view con theo trục dọc và ở giữa trục ngang của view  cha
            //<View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                //<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
                //<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
                //<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
            //</View>

            // Image 3: show các view theo trục dọc và ở cuối trục ngang của view cha
            //<View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-end'}}>
                //<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
                //<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
                //<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
            //</View>

            // Image 4: show các view theo trục dọc và kéo full width các view con
            //<View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
                //<View style={{height: 50, backgroundColor: 'powderblue'}}></View>
                //<View style={{height: 50, backgroundColor: 'skyblue'}}></View>
                //<View style={{height: 50, backgroundColor: 'steelblue'}}></View>
            //</View>
        );
    }
}

export default AlignItemsBasic;