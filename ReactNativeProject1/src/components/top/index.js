import React from "react";
import {Text, Image, View, SafeAreaView, Dimensions, StyleSheet} from 'react-native';
import todoImg from '../../../assets/todo.jpg';
import {useFonts} from 'expo-font'
// import DinaPuffMedium from '../../../DynaPuff/DynaPuff-Medium.ttf'

const dimensao = Dimensions.get('screen').width;

export default function Topo(){
    const [fontCarregada] = useFonts({
        DinaPuffMedium: require('../../../DynaPuff/DynaPuff-Medium.ttf')
    })

    if(!fontCarregada){
        return <View>
            <Text>Fonte não foi Carregada com Sucesso</Text>
        </View>
    }

    return <>
    <View style={styles.view}>
        <Image source={todoImg} style={styles.imagem}/>
        <Text style={styles.texto}>TO DO LIST</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    imagem: {
        width : "100%",
        height : (6240/4160 * dimensao) -400
    },
    texto :{
        position : 'absolute',
        color : 'white',
        alignSelf: 'center',
        fontSize: 50,
        fontFamily: 'DinaPuffMedium',
        textShadowColor: 'black'
        
        
    },
    view:{
        justifyContent: 'center'
    }
})