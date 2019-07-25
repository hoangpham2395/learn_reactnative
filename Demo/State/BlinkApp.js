import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Blink extends Component
{
    // Thực hiện trước khi render
    componentDidMount(){
        // Toggle the state every second
        setInterval(() => (
            this.setState((state, props) => (
                { isShowingText: !state.isShowingText }
            ))
        ), 1000);
    }

    // State object
    state = {isShowingText: true};

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.name}</Text>
        );
    }
}


class BlinkApp extends Component
{
    render() {
        return (
            <View>
                <Blink name={'Blink 1'}/>
                <Blink name={'Blink 2'}/>
                <Blink name={'Blink 3'}/>
            </View>
        );
    }
}

export default BlinkApp;