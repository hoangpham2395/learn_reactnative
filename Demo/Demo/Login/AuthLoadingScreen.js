import React from 'react';
import {
    AsyncStorage,
} from 'react-native';
import ActiveIndicatorCustom from "../Common/ActiveIndicatorCustom";
import CallApi from "../Common/CallApi";
import {Api, Config} from "../Common/Config";

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // await AsyncStorage.clear();
        const accessToken = await AsyncStorage.getItem('@accessToken').catch((e) => console.error(e));
        let isLoggedIn = accessToken ? true : false;
        
        // Check accesstoken is valid
        if (accessToken) {
            let options = {
                method: 'POST',
                headers: {
                    'x-auth-token': accessToken,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            };
            let result = await CallApi(Config.domainApi + Api.auth, options);
            isLoggedIn = result.status;
        }

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(isLoggedIn ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return <ActiveIndicatorCustom />;
    }
}

export default AuthLoadingScreen;