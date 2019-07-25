import React, {Component} from 'react';
import {View} from 'react-native';

class AlignSelfBasic extends Component
{
    render() {
        // alignSelf giúp view con đè css alignItems của view cha
        return (
            // Image 1: View cha default: flexDirection: 'column'
            //<View style={{flex: 1, alignItems: 'flex-end'}}>
                //<View style={{width: 80, height: 50, backgroundColor: 'red', alignSelf: 'flex-start'}}></View>
                //<View style={{width: 100, height: 50, backgroundColor: 'orange'}}></View>
                //<View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
            //</View>

            // Image 2: View cha default: flexDirection: 'column', alignItems: 'flex-start'
            //<View style={{flex: 1}}>
                //<View style={{width: 80, height: 50, backgroundColor: 'red', alignSelf: 'flex-end'}}></View>
                //<View style={{width: 100, height: 50, backgroundColor: 'orange'}}></View>
                //<View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
            //</View>

            // Image 3: View cha default: flexDirection: 'column', alignItems: 'flex-start'
            //<View style={{flex: 1}}>
                //<View style={{width: 80, height: 50, backgroundColor: 'red', alignSelf: 'center'}}></View>
                //<View style={{width: 100, height: 50, backgroundColor: 'orange'}}></View>
                //<View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
            //</View>

            // Image 4: View cha default: flexDirection: 'column', alignItems: 'flex-start'
            <View style={{flex: 1}}>
                <View style={{height: 50, backgroundColor: 'red', alignSelf: 'stretch'}}></View>
                <View style={{width: 100, height: 50, backgroundColor: 'orange'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
            </View>
        );
    }
}

export default AlignSelfBasic;