import React, {Component} from 'react';
import {Alert} from 'react-native';

function CallApi(url, options) {
    return fetch(url, options)
        .then((res) => res.json())
        .then((resJson) => {
            return resJson;
        }, function () {
            Alert.alert('Call api failed.');
            return {
                status: false,
                message: 'Call api failed.',
            };
        })
        .catch((e) => console.error(e));
}

export default CallApi;