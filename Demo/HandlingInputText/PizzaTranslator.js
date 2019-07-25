import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

class PizzaTranslator extends Component
{
    constructor(props) {
        super(props);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.state = {text: ''};
    }

    handleChangeText(text) {
        this.setState((state, props) => ({
           text: text
        }));
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translator!"
                    onChangeText={this.handleChangeText}
                    value={this.state.text}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

export default PizzaTranslator;