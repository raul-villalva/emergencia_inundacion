import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import items from "../config/items"
import { ListItem } from 'react-native-elements'


const Bienvenida  = (props) => {
 

 return(
    <View style={{backgroundColor:"#00ffff"}} >
        <Text style={styles.titulo}>¿Qué hacer en caso de inundación?</Text>
        <Text style={styles.texto}>Bienvenidos al juego de preguntas y respuestas, primero vamos a leer una serie de pasos, luego las preguntas</Text>

        <Button style={{paddinTop:100}}
          title="Comenzar"
          onPress={() =>
            props.navigation.navigate('Que')
          }
        />
    </View>
 )
}


const styles = StyleSheet.create({
option: {
 
 flexDirection: "row"
},
bad: {
color:"#ff0000",
fontSize: 30,

},
texto: {
  textAlign: 'center', // <-- the magic
  fontWeight: 'bold',
  fontSize: 25,
  paddingTop:50,
  paddingBottom:100,
},
titulo: {
  textAlign: 'center', // <-- the magic
  fontWeight: 'bold',
fontSize: 40,
paddingTop:50
},
opcion_texto: {
fontSize: 20,
},
good: {
color:"#7cfc00",
fontSize: 30,

}
});

export default Bienvenida;