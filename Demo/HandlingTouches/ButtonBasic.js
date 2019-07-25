import React, {Component} from 'react';
import {View, Alert, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
    },
    alternativeLayoutButtonContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});

class ButtonBasic extends Component
{
    onPressButton() {
        Alert.alert('You tapped button!');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button title="Button 1" onPress={this.onPressButton} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Button 2" onPress={this.onPressButton} color="steelblue"/>
                </View>
                <View style={[styles.buttonContainer, styles.alternativeLayoutButtonContainer]}>
                    <Button title="Button 3" onPress={this.onPressButton} color="powderblue"/>
                    <Button title="Button 4" onPress={this.onPressButton} color="skyblue"/>
                </View>
            </View>
        );
    }
}

export default ButtonBasic;