import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();
    return(
        <View style={style.container}>
            <View style={style.logo}>
                <Animatable.Image 
                    animation='flipInY'
                    source={require('../../img/logo.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation='fadeInUp' style={style.containerForm}>
                <Text style={style.title}>Bem vindo ao aplicativo</Text>
                <Text style={style.text}>Faça login no aplicativo</Text>
                <TouchableOpacity style={style.button} onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={style.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#472847'
    },
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,   
        paddingStart: '5%',
        paddingEnd: '5%',
        backgroundColor:'#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position:'absolute',
        backgroundColor: '#472847',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
    

})