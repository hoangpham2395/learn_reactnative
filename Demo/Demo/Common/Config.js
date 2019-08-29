import React from 'react';

export const Config = {
    domain: '',
    domainApi: '',
};

export const Constant = {
    firebaseToken: '',
};

export const Api = {
    auth: 'api/user/auth',
    logout: 'api/user/logout',
    editUser: 'api/user/edit',
    getListShops: 'api/user/shops',
    login: 'api/user/login',
    getListBanners: 'api/user/banners',
};

export const Validation = {
    nameRequired: 'Name is required.',
    emailRequired: 'Email is required.',
    emailFormat: 'Email is invalid.',
    passwordRequired: 'Password is required.',
    passwordInvalid: 'Password is invalid.',
    
    // Send mail
    subjectRequired: 'Subject is required.',
    bodyRequired: 'Body is required.',
    
    // Push notification
    titleRequired: 'Title is required.',
    contentRequired: 'Content is required.',
    firebaseTokenNotExist: 'Firebase token does not exist.',
};

export const Message = {
    sendMailSuccess: 'Your email successful provided to device mail.',
    getFirebaseToken: 'Get firebase token from https://console.firebase.google.com \n Choose Your project > Project settings > Cloud Messaging > Server key.',
    sendTestMessageSuccess: 'Push notification - Send test message success.',
    sendTestMessageFailed: 'Push notification - Send test message failed.',
};