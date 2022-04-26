    import { StatusBar } from 'expo-status-bar';
    import React from 'react';
    import { StyleSheet, Text, View,Button } from 'react-native';
    import items from "../config/items"
    import { ListItem } from 'react-native-elements'
  

    const Que  = (props) => {
     

     return(
         <View style={{backgroundColor:"#00ffff"}}>
           <Text style={styles.texto}>A continuación enumeramos una seria de pasos en casos de emercia, y haremos una preguntas en base a esta</Text>
        <View style={{overflow: 'auto'}}>
          {
            items.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{l}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))
          }
        </View>
            
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

  export default Que;