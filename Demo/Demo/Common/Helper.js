import React from 'react';
import {AsyncStorage} from 'react-native';

export async function setToken(token)
{
    await AsyncStorage.setItem('@accessToken', token).catch((e) => console.error(e));
}

export async function getToken()
{
    return await AsyncStorage.getItem('@accessToken');
}

export async function setCurrentAdmin(admin)
{
    return await AsyncStorage.setItem('@admin', JSON.stringify(admin)).catch((e) => console.error(e));
}

export async function getCurrentAdmin()
{
    let admin = await AsyncStorage.getItem('@admin').catch((e) => console.error(e));
    return JSON.parse(admin);
}
