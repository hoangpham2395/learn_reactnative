import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from "../Common/Style";
import { TabView, SceneMap } from 'react-native-tab-view';
import Contacts from "./Shared/Contacts";
import Article from "./Shared/Article";

const ContactsRoute = () => (
    <Contacts />
);

const ArticleRoute = () => (
    <Article />
);

export default class TabInTabScreen extends Component
{
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Tab in tab',
            headerStyle: {
                backgroundColor: 'steelblue',
                borderWidth: 0
            },
            headerTintColor: 'white',
        };
    };
    
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                {key: 'contacts', title: 'Contacts'},
                {key: 'article', title: 'Article'},
            ],
        };
    }
    
    _renderScene =  SceneMap({
        contacts: ContactsRoute,
        article: ArticleRoute,
    });
    
    _initialLayout = {width: Dimensions.get('window').width};
    
    render() {
        let navigationState = this.state;
        return (
            <TabView
                navigationState={navigationState}
                renderScene={this._renderScene}
                onIndexChange={index => this.setState({index})}
                initialLayout={this._initialLayout}
            />
        );
    }    
}