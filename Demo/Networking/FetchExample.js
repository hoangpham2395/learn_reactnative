import React, {Component} from 'react';
import {View, Text, ActivityIndicator, FlatList, StyleSheet} from 'react-native';

const urlApi = 'https://facebook.github.io/react-native/movies.json';

class FetchExample extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        return fetch(urlApi)
            .then((response) => response.json())
            .then((responseJson) => {
                // Return response of api
                // Thực chất: responseJson = response.json();
                this.setState((state, props) => ({
                    isLoading: false,
                    data: responseJson
                }));
            }, function () {

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator/>
                </View>
            );
        }

        let data = this.state.data;
        let movies = data.movies;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <FlatList data={movies} renderItem={({item}) => <Movie movie={item}/>} />
            </View>
        );
    }
}

class Movie extends Component {
    render() {
        let movie = this.props.movie;
        return (
            <View style={styles.item}>
                <Text style={styles.itemTitle}>{movie.id}. {movie.title}</Text>
                <Text>Since: {movie.releaseYear}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginBottom: 20,
    },
    item: {
        fontSize: 12,
        marginBottom: 5,
    },
    itemTitle: {
        fontWeight: 'bold',
    }
});

export default FetchExample;