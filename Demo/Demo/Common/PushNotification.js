import React from 'react';
import {Alert} from "react-native";
import {Message} from "./Config";

export function sendTestMessage(firebaseToken, deviceToken, title, content) {
    let url = 'https://fcm.googleapis.com/fcm/send';
    let options = {
        method: 'POST',
        headers: {
            Authorization: 'key=' + firebaseToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            to: deviceToken,
            notification: {
                title: title,
                body: content,
                click_action: "http://shareurcodes.com",
            },
        }),
    };
    
    return fetch(url, options)
        .then((res) => res.json())
        .then((resJson) => {
            console.log(Message.sendTestMessageSuccess, resJson);
        }, function (e) {
            console.log(e);
            Alert.alert(Message.sendTestMessageFailed);
        })
        .catch((e) => console.error(e));
}