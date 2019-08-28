import React from 'react';

export const Config = {
    domain: 'https://fastpick.dev-ui.com/',
    domainApi: 'https://fastpick.dev-ui.com/v1/',
};

export const Constant = {

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
};

export const Message = {
    sendMailSuccess: 'Your email successful provided to device mail.',
};