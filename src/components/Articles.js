import React, { Component } from 'react';
import Article from './Article';
import { ScrollView, StyleSheet } from 'react-native';

export default class Articles extends Component{

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {this.props.articles.map((item, index) => <Article {...item} key={index}/>)}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent : 'space-between',
        margin : 10
    }
});