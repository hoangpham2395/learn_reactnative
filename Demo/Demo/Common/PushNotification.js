import React from 'react';
import {Alert} from "react-native";
import {Config, Constant, Message} from "./Config";

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

// Push Notification
export function getInfo(token) {
    return remoteApi(Config.remoteUrlGetInfo + token + '?details=true', {});
}

export function addTopic(token, topic) {
    if (!topic) {
        return;
    }
    let data = {
        to: '/topics/' + topic,
        registration_tokens: token,
    };
    
    return remoteApi(Config.remoteUrlAddToTopic, data);
}

export function removeTopic(token, topic) {
    if (!topic) {
        return;
    }
    let data = {
        to: '/topics/' + topic,
        registration_tokens: token,
    };
    
    return remoteApi(Config.remoteUrlRemoveFromTopic, data);
}

export function pushToTopic(topic, title, content) {
    if (!title || !content) {
        return;
    }
    
    let data = {
        to: '/topics/' + topic,
        notification: {
            title: title,
            body: content,
            sound: Config.sound,
            'content-available': 1,
            badge: 1,
        },
    };
    
    return remoteApi(Config.remoteUrlSendToTopic, data);
}

export function replaceFromAllTopic(oldToken, newToken, topic) {
    if (!oldToken || !newToken) {
        return;
    }
    return addTopic([newToken], topic);
}

function remoteApi(url, data) {
    let apiKey = Constant.firebaseApiKey;
    let options = {
        method: 'POST',
        headers: {
            Authorization: 'key=' + apiKey,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data),
    };
    
    return fetch(url, options)
        .then((res) => res.json())
        .then((resJson) => {
            console.log(Message.pushNotificationSuccess, resJson);
        }, function (e) {
            console.log(e);
            Alert.alert(Message.pushNotificationFailed);
        })
        .catch((e) => console.error(e));
}