import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Topo from './src/components/top';
import Main from './src/components/lista';
import Botoes from './src/components/botoes';

export default function App() {
  return <>
  
  <SafeAreaView style={estilos.main}>
    <ScrollView>
      <Topo />
    
    <Main />
    
    <Botoes />
    

    </ScrollView>
    
  </SafeAreaView>
  </>
}
const estilos = StyleSheet.create({
  main:{
    backgroundColor: "#f3e6bc"
  },
  
})


