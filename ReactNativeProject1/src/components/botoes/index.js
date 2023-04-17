import React from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";


export default function Botoes (){
    return <>
    <View style={estilos.container}>
       <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.texto}>
                Adicionar
            </Text>
       </TouchableOpacity>

       <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.texto}>
                Editar
            </Text>
       </TouchableOpacity>

       <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.texto}>
                Remover
            </Text>
       </TouchableOpacity>
       </View>
    </>
}

const estilos = StyleSheet.create({
    botao:{
        width: "100%",
        backgroundColor: '#72ae95',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginVertical: 10,
        borderRadius: 15
        
    },
    texto:{
        fontSize: 25,
    },
    container:{
        alignItems: 'center',
        marginHorizontal: 55,
    }
})