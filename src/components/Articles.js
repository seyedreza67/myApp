import React, { Component } from 'react';
import Article from './Article';
import { ScrollView, StyleSheet, FlatList, View, Text, StatusBar } from 'react-native';

export default class Articles extends Component{

    renderItemArticle = article => {
        return <Article {...article}/>
    };

    render() {
        // return (
        //     <ScrollView contentContainerStyle={styles.container}>
        //         {this.props.articles.map((item, index) => <Article {...item} key={index}/>)}
        //     </ScrollView>
        // )

        return (
            <View style={{flex: 1}}>
                <StatusBar
                    hidden
                />
                <FlatList
                    data={this.props.articles}
                    renderItem={({item}) => this.renderItemArticle(item)}
                    keyExtractor={(item, index) => index}
                    numColumns={2}
                    columnWrapperStyle={{flexDirection: 'row-reverse'}}
                    ListHeaderComponent={() => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text>آموزش</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // numColumns: 2,
        justifyContent : 'space-between',
        margin : 10
    }
});