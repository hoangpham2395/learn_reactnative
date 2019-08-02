import React, {Component} from 'react';
import {
    View,
    Text,
    Alert,
    FlatList,
    Image,
} from 'react-native';
import CallApi from "../Common/CallApi";
import {Config} from "../Common/Config";
import ActiveIndicatorCustom from "../Common/ActiveIndicatorCustom";
import styles from "../Common/Style";

class ListBannersScreen extends Component
{
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            width: 50,
            height: 50,
        };
        this.getListBanners();
    }

    async getListBanners() {
        let urlApi = Config.domainApi + 'api/user/banners';
        let result = await CallApi(urlApi);

        if (!result.status) {
            return Alert.alert(result.message);
        }

        this.setState({
            isLoading: false,
            data: result.data,
        });
    }

    render() {
        if (this.state.isLoading) {
            return <ActiveIndicatorCustom />
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>List of banners</Text>
                <View>
                    <FlatList data={this.state.data} renderItem={({item}) => {
                        let uri = item.image_url;

                        if (!uri.includes('http')) {
                            uri = Config.domain + uri;
                        }

                        Image.getSize(uri, ({width, height}) => {this.setState({width, height})});

                        return <Image source={{uri: uri}} style={{width: this.state.width, height: this.state.height}}/>
                    }} />
                </View>
            </View>
        );
    }
}

// class ShowImage extends Component
// {
//     render() {
//
//
//         return (
//             <Image style={{width: this.props.width, height: this.props.height}} source={{uri: uri}}/>
//         );
//     }
// }

export default ListBannersScreen;