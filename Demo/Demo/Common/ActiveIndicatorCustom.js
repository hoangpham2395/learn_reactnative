import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import styles from "./Style";

class ActiveIndicatorCustom extends Component
{
    render() {
        return (
            <View style={styles.indicator}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        );
    }
}

export default ActiveIndicatorCustom;