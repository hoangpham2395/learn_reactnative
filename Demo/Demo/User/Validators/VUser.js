import React from 'react';
import {Validation} from "../../Common/Config";

export function VEditUser(data)
{
    let {email, password, tel} = data;

    // Check required
    if (!email) {
        return {
            status: false,
            message: Validation.emailRequired
        }
    }

    // Check email format
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(regEmail.test(email) === false)
    {
        return {
            status: false,
            message: Validation.emailFormat
        }
    }

    return {status: true};
}

export function VLogin(data)
{
    let {email, password} = data;

    // Check required
    if (!email) {
        return {
            status: false,
            message: Validation.emailRequired
        };
    }

    if (!password) {
        return {
            status: false,
            message: Validation.passwordRequired
        };
    }

    // Check email format
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(regEmail.test(email) === false)
    {
        return {
            status: false,
            message: Validation.emailFormat
        };
    }

    return {status: true};
}