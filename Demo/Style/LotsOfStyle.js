import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
    blue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
});

class LotsOfStyles extends Component
{
    render() {
        return (
            <View>
                <Text style={styles.red}>Just red</Text>
                <Text style={styles.blue}>Just blue</Text>
                <Text style={[styles.red, styles.blue]}>red then blue</Text>
                <Text style={[styles.blue, styles.red]}>blue then red</Text>
            </View>
        );
    }
}

export default LotsOfStyles;