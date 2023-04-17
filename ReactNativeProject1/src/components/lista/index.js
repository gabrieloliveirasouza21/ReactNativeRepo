import React from "react";
import {View, FlatList, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {useFonts} from 'expo-font'




const tarefas = [
    {
        id: '001',
        desc : ['Lavar a louça', 'Regular'],
        data: '10/10/23'
    },
    {
        id: '002',
        desc : ['Lavar a casa', 'Importante'],
        data: '10/10/23'
    },
    {
        id: '003',
        desc : ['Fazer a lição de casa', 'Importante'],
        data: '10/10/23'
    },
    {
        id: '004',
        desc : ['Trabalhar', 'Importante'],
        data: '10/10/23'
    },
    {
        id: '005',
        desc : ['Fazer a lição de casa', 'Importante'],
        data: '10/10/23'
    },
    {
        id: '006',
        desc : ['Fazer a lição de casa', 'Importante'],
        data: '10/10/23'
    },
    {
        id: '007',
        desc : ['Fazer a lição de casa', 'Importante'],
        data: '10/10/23'
    },
]


export default function Main(){

    const [fontCarregada] = useFonts({
        VarelaRound : require('../../../Varela_Round/VarelaRound-Regular.ttf')
    })

    if(!fontCarregada){
        return <View><Text>Fonte nao carrega</Text></View>
    }
    

    return <>
            <FlatList 
                data={tarefas}
                keyExtractor={(item)=>item.id}
                ListHeaderComponent={()=>{
                    return <>
                        <Text style={styles.title}> Últimos Adicionados :</Text>
                    </>
                }}
                renderItem={({item})=>
                <View style={styles.item}>
                    <Text style={styles.text}>
                        Descrição:{item.desc[0]} {"\n"}
                        Grau : {item.desc[1]} {"\n"}
                        Data: {item.data} {"\n\n"}          
                    </Text>
                </View>
                }    
            />
        
    </>
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: "#f1c972",
        marginVertical: 10,
        marginHorizontal: 50,
        alignItems: 'center',
        padding:20,
        justifyContent: 'center',
        borderRadius : 20
        
    }, 
    text:{
        fontFamily: "VarelaRound",
        fontSize: 18
    },
    title:{
        fontFamily: "VarelaRound",
        alignSelf: 'center',
        fontSize: 30,
    }
    
    
})