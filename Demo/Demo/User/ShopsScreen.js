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
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from "../Login/LoginCss";
import ActiveIndicatorCustom from "../Common/ActiveIndicatorCustom";
import { Config } from "../Common/Config";

class ShopsScreen extends Component
{
    static navigationOptions = {
        tabBarLabel: 'Shops',
        tabBarOptions: {
            showIcon: true
        },
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            // You can return any component that you like here!
            return <Icon name="store" size={25} color={tintColor}/>;
        }
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
        const accessToken = await AsyncStorage.getItem('@accessToken').catch((e) => console.error(e));
        return fetch(Config.domainApi + 'api/user/shops', {
            headers: {
                'x-auth-token': accessToken
            }
        })
            .then((res) => res.json())
            .then((resJson) => {
                if (!resJson.status) {
                    return Alert.alert(resJson.message);
                }

                this.setState({
                    isLoading: false,
                    data: resJson.data
                });
            }, function () {
                Alert.alert('Failed.');
            })
            .catch((e) => {
                console.error(e);
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