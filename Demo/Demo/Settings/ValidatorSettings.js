import React from 'react';
import {Validation} from "../Common/Config";
import {checkFormatEmail} from "../Common/Helper";

export function ValidatorSendMail(data) {
    let {to, subject, body} = data;
    
    if (!to) {
        return {
            status: false,
            message: Validation.emailRequired,
        };
    }

    if(!checkFormatEmail(to))
    {
        return {
            status: false,
            message: Validation.emailFormat,
        }
    }
    
    if (!subject) {
        return {
            status: false,
            message: Validation.subjectRequired,
        };
    }
    
    if (!body) {
        return {
            status: false,
            message: Validation.bodyRequired,
        };
    }
    
    return {status: true};
}

export function ValidatorPushNotification(data) {
    let {title, content, firebaseToken} = data;
    
    if (!firebaseToken) {
        return {
            status: false,
            message: Validation.firebaseTokenNotExist,
        };
    }
    
    if (!title) {
        return {
            status: false,
            message: Validation.titleRequired,
        };
    }
    
    if (!content) {
        return {
            status: false,
            message: Validation.contentRequired,
        };
    }
    
    return {status: true};
}