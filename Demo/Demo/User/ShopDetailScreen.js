import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    Image,
} from 'react-native';
import styles from "../Common/Style";
import ActiveIndicatorCustom from "../Common/ActiveIndicatorCustom";
import { HeaderBackButton } from 'react-navigation';
import {Config} from "../Common/Config";

class ShopDetailScreen extends Component
{
    static navigationOptions = ({ navigation }) => {
        let shop = navigation.getParam('shopItem');
        let title = 'Shop detail';

        if (shop) {
            shop = JSON.parse(shop);
            title = shop.name;
        }

        return {
            title: title,
            headerStyle: {
                backgroundColor: 'steelblue',
                borderWidth: 0
            },
            headerTintColor: 'white',
            // headerLeft: <HeaderBackButton tintColor="white" onPress={() => navigation.navigate(null)} />,
        };
    };

    render() {
        const { navigation } = this.props;
        const shop = navigation.getParam('shopItem');
        if (!shop || shop == 'undefined') {
            return <ActiveIndicatorCustom />
        }

        const item = JSON.parse(shop);
        const pic = {
            uri: Config.domain + item.brand.logo_image_url
        };

        return (
            <ScrollView style={[styles.container, {marginBottom: 30}]}>
                <Text style={styles.title}>Shop detail</Text>
                <Image source={pic} style={styles.itemImage}/>
                <Text style={styles.itemTitle}>Name: {item.name}</Text>
                <Text>Zip: {item.zip}</Text>
                <Text>Address: {item.address}</Text>
                <Text>Phone number: {item.tel}</Text>
                <Text>Brand name: {item.brand.name}</Text>
                <Text>Cancel policy: {item.cancel_policy}</Text>
                <Text style={{marginBottom: 40}}>Comment: {item.comment}</Text>
            </ScrollView>
        );
    }
}

export default ShopDetailScreen;