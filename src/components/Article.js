import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class Article extends Component{

    render() {
        return (
            <View>
                <Text>سیدرضا حسینی</Text>
                <Text style={{fontFamily: 'IRANSansMobile_Bold'}}>سیدرضا حسینی</Text>
                <Text style={{fontFamily: 'IRANSansMobile_UltraLight'}}>سیدرضا حسینی</Text>
            </View>
        )
    }
}