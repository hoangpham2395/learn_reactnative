import React, {Component} from 'react';
import {Image, ScrollView, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 30,
        marginTop: 30,
        marginBottom: 30,
    },
    image: {
        width: 64,
        height: 64,
    }
});

class ScrolledDown extends Component
{
    render() {
        let pic = {
            uri: 'https://facebook.github.io/react-native/img/favicon.png',
        };

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Part 1</Text>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>

                <Text style={styles.text}>Part 2</Text>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
                <Image source={pic} style={styles.image}/>
            </ScrollView>
        );
    }
}

export default ScrolledDown;