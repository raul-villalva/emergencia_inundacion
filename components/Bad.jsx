    import { StatusBar } from 'expo-status-bar';
    import React from 'react';
    import { StyleSheet, Text, View,Button } from 'react-native';
    import items from "../config/items"
    import { ListItem } from 'react-native-elements'
  

    const Bad  = (props) => {
     

       return (
        <View  style={{backgroundColor:"#00ffff"}}>
          <Text style={styles.texto}>No has completado las preguntas correctamente</Text>
          <Button
          title="Ir a preguntas"
          onPress={() =>
            props.navigation.navigate('Questions')
          }
        />
        </View>
        
       )
    }

 
const styles = StyleSheet.create({
  texto: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop:50,
    paddingBottom:50
  },
 });

  export default Bad;