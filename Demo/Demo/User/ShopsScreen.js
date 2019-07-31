import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
    Image,
    AsyncStorage,
    FlatList,
    Button,
} from 'react-native';
import styles from "../Common/Style";
import ActiveIndicatorCustom from "../Common/ActiveIndicatorCustom";
import { Config } from "../Common/Config";
import {getToken} from "../Common/Helper";
import CallApi from "../Common/CallApi";

class ShopsScreen extends Component
{
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
        this.getListShop();
    }

    async getListShop () {
        // Check login

        // Get list shop
        const accessToken = await getToken();

        // Call api
        let options = {
            headers: {
                'x-auth-token': accessToken
            }
        };

        let result = await CallApi(Config.domainApi + 'api/user/shops', options);
        if (!result.status) {
            return Alert.alert(result.message);
        }

        this.setState({
            isLoading: false,
            data: result.data
        });
    }

    render () {
        if (this.state.isLoading) {
            return <ActiveIndicatorCustom />;
        }

        let data = this.state.data;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>List of shops</Text>
                <FlatList data={data} renderItem={
                    ({item}) => {return <ShopItem value={item} dataPress={() => this.props.navigation.navigate('ShopDetail', {
                        shopItem: JSON.stringify(item)
                    })}/>}
                } />
            </View>
        );
    }
}

class ShopItem extends Component
{
    render() {
        const item = this.props.value;
        const pic = {
            uri: Config.domain + item.brand.logo_image_url
        };
        return (
            <View>
                <Text style={styles.itemTitle}>{item.id}. {item.name}</Text>
                <Image source={pic} style={styles.itemImage}/>
                <Text>Zip: {item.zip}</Text>
                <Text>Address: {item.address}</Text>
                <Text>Phone number: {item.tel}</Text>
                <Text>Brand name: {item.brand.name}</Text>
                <View style={styles.itemButton}>
                    <Button
                        title="Go to Details"
                        onPress={this.props.dataPress}
                    />
                </View>
            </View>
        );
    }
}

export default ShopsScreen;