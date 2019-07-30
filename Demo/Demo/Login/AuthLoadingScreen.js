import React from 'react';
import {
    AsyncStorage,
} from 'react-native';
import ActiveIndicatorCustom from "../Common/ActiveIndicatorCustom";

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // await AsyncStorage.clear();
        const accessToken = await AsyncStorage.getItem('@accessToken').catch((e) => console.error(e));

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(accessToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return <ActiveIndicatorCustom />;
    }
}

export default AuthLoadingScreen;