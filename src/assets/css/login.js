import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#2980b9',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
    },
    loginBox : {
        backgroundColor: 'white',
        flex : 1,
        marginRight : 50,
        marginLeft : 50,
        borderRadius : 5,
        elevation : 2,
        shadowColor : 'black' ,
        shadowOffset : { width : 0 , height: 2},
        shadowOpacity : .1,
        paddingBottom:20
    },
    loginTitle : {
        margin : 2,
        textAlign : 'center',
        fontSize : 18,
        paddingTop : 10,
        paddingBottom :10
    },
    inputGroups : {
        margin : 5,
        marginRight: 20,
        marginLeft: 20
    },
    labelText : {
        textAlign: 'right',
        marginBottom : 10,
        color : '#5256c9',
        fontWeight : 'bold'
    },
    inputText : {
        textAlign : 'right',
        borderColor : 'rgba(0,0,0,.1)',
        borderWidth : 1,
        padding : 10,
        borderRadius: 2,
        height: 40
    }
});


export default styles;