    import { StatusBar } from 'expo-status-bar';
    import React from 'react';
    import { StyleSheet, Text, View,Button } from 'react-native';
    import items from "../config/items"
    import { ListItem } from 'react-native-elements'
  

    const Good  = (props) => {
     return(
         <View style={{backgroundColor:"#00ffff"}}>
           <Text style={styles.texto}>¡¡¡Felictaciones!!!, has completado todas las preguntas.</Text>
          </View>
     )
  }

 
const styles = StyleSheet.create({
  texto: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
  fontSize: 50,
  paddingTop:50
  },
 });

  export default Good;