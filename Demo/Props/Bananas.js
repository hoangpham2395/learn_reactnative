import React, {Component} from 'react';
import {Image} from 'react-native';

class Bananas extends Component
{
    render() {
        let img = {
            uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
        };
        return (
            <Image source={img} style={{width: 300, height: 200}}></Image>
        );
    }
}

export default Bananas;