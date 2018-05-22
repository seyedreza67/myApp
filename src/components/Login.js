import React , { Component } from 'react';
import {
    Text ,
    View ,
    TextInput
} from 'react-native';
import styles from '../assets/css/login';


export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginBox}>
                    <Text style={styles.loginTitle}>ورود</Text>
                    <View style={styles.inputGroups}>
                        <Text style={styles.labelText}>ایمیل :‌ </Text>
                        <TextInput
                            style={styles.inputText}
                            underlineColorAndroid="transparent"
                            placeholder="لطفا ایمیل خود را وارد کنید"
                        />
                    </View>
                    <View style={styles.inputGroups}>
                        <Text style={styles.labelText}>پسورد :‌ </Text>
                        <TextInput
                            style={styles.inputText}
                            secureTextEntry
                            underlineColorAndroid="transparent"
                            placeholder="لطفا پسورد خود را وارد کنید"
                        />
                    </View>
                </View>
            </View>
        )
    }
}
