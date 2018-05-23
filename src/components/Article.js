import React, { Component } from 'react';
import {View, Image, Text, StyleSheet, Platform, Dimensions} from 'react-native';

export default class Article extends Component{

    render() {
        const {title, imageUrl, body} = this.props;
        return (
            <View style={styles.container}>
                <Image source={imageUrl} style={styles.image}/>
                <View style={{padding: 10}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text numberOfLines={5} style={styles.body}>{body}</Text>
                </View>
            </View>
        )
    }
}

const { width , height } = Dimensions.get('window');
const gutter = 10;

const styles = StyleSheet.create({
    container: {
        flex: .5,
        // width : ( width - gutter * 3) / 2, // for scrollView
        backgroundColor: 'white',
        elevation: 1,
        margin: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.2
    },
    image: {
        width: '100%',
        height: 120
    },
    title: {
        textAlign: 'right',
        fontSize: 16,
        ...Platform.select({
            ios: {
                fontFamily: 'IRANSansMobile',
                fontWeight: 'bold'
            },
            android: {
                fontFamily: 'IRANSansMobile_Bold'
            }
        })
    },
    body: {
        textAlign: 'right',
        fontSize : 12,
        ...Platform.select({
            ios: {
                fontFamily: 'IRANSansMobile',
                fontWeight: 'bold'
            },
            android: {
                fontFamily: 'IRANSansMobile_Bold'
            }
        })
    }
});