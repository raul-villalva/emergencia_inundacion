import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,readio,Button } from 'react-native';
import { Modal, RadioButton } from 'react-native-paper';
import Good from '../components/Good';
import Bad from '../components/Bad';
import { Icon } from 'react-native-elements';
import preguntas from "../config/preguntas.json"
import { useState } from 'react';



  

    const Questions  = (props) => {


      let [preg,setPreg] = React.useState([...preguntas]);
      let [termino,setTermino] =  React.useState("Bad");
      const [checked, setChecked] = useState(["","","",""]);
      const [stas, setStas] = useState([false,false,false,false]);
      const [visibleRight, setVisibleRight] = useState(false);
      const [visibleWrong, setVisibleWrong] = useState(false);
      const [position,setPosition] = React.useState(0);


      const siguiente = () => {

        if (position < preguntas.length -1) {
          setPosition(position+1);
          
        }

   
      }
        
    
      const anterior = () => {
    
        if (position > 0) {
          setPosition(position-1);
          
        }
    
      }
      
      let actualizarLista = (i,opcion) => {
        setPreg(preg => {preg[i].elegida = opcion; return preg;} );
      }




      const cambio = (i,opcion) => {
        
        checked[i] = opcion;
        setChecked( checked);
        actualizarLista(i,opcion);
    
   
        if (opcion == preg[position].correcta) {
          setVisibleRight(true)
          setVisibleWrong(false)
        }else {
          setVisibleWrong(true)
          setVisibleRight(false)
        }
        setTermino("Good");
      
        stas[i] = (opcion == preg[i].correcta);
        setStas(stas);

        stas.forEach(function (item, index) {
          
          console.log(item)
          if (! item ) {
            setTermino("Bad")
          }
        })
  
      }  

      let bad = null;
      if (visibleWrong && checked[position] != "" && checked[position] != preg[position].correcta) {
        bad =  <View visible={visibleWrong}><Text style={styles.bad}>Incorrecto</Text></View>
      }
      let good = null;
      if (visibleRight && checked[position] != "" && checked[position] == preg[position].correcta) {
        good = <View visible={visibleRight}><Text style={styles.good}>Correcto!!!</Text></View>
      }

      let final = null;
     
      
    
    
    
      
     return(

       
      <Modal visible={true} style={styles.main} style={{backgroundColor:"#00ffff"}}>
        <View style={styles.container}>
      
              <View style={ {flex: 1,   paddingTop: "10%" } }>
              <Icon
                  raised
                  name='angle-left'
                  type='font-awesome'
                
                  onPress={anterior} />
              </View>    
              <View style={ {flex: 2} }>
              

                  <View >
            <Text  style={styles.texto} >{preg[position].texto}</Text>
                <View style={StyleSheet.option} >
                <Text  style = {styles.opcion_texto } >{preg[position].opcion1.texto}</Text>
                  <RadioButton
                  value="first"
                  style = { {flex: 1}}
                  status={ checked[position] === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => {cambio(position,'first');cambio(position,'first');}}
                  />
                   
                </View>
                <View style={StyleSheet.option} >
                  <Text style = {styles.opcion_texto }>{preg[position].opcion2.texto}</Text>
                  <RadioButton
                  value="second"
                  status={ checked[position] === 'second' ? 'checked' : 'unchecked' }
                  onPress={() =>{cambio(position,'second');cambio(position,'second');} }
                  />
               </View>
               <View style={StyleSheet.option} >
                  <Text style = {styles.opcion_texto }>{preg[position].opcion3.texto}</Text>
                  <RadioButton
                  value="third"
                  status={ checked[position] === 'third' ? 'checked' : 'unchecked' }
                  onPress={() => {cambio(position,'third');cambio(position,'third');}}
                  />
                </View>
                {bad}
                {good}

          </View>
                
              </View>
            
              <View style={ {flex: 1,   paddingTop: "10%" } }>
              <Icon
                raised
                name='angle-right'
                type='font-awesome'
                onPress={siguiente} />
              
              </View>
        </View>
        <View style={{ flexDirection: "row",paddingTop:100}}>
          <View style={{flex:1,paddingTop:100}}>
          <Button
            title="Ir a Home"
            onPress={() =>
              props.navigation.navigate('Que')
            }
          />
          </View>
          <View style={{flex:1,paddingTop:100}}>
          <Button 
            title="Resultados"
            onPress={() =>
              props.navigation.navigate(termino )
            }
          />
          </View>
        </View>
 
      </Modal>
     )
  }

 
  const styles = StyleSheet.create({
    container: {
      
      flexDirection: "row",
  
      backgroundColor: '#fff',
      //alignItems: 'center',
    //  justifyContent: 'center',
    },
    main: {
      
     
  
      backgroundColor: '#fff',
      //alignItems: 'center',
    //  justifyContent: 'center',
    },
    option: {
     
      flexDirection: "row"
    },
    bad: {
     color:"#ff0000",
     fontSize: 30,
   
   },
   texto: {
     fontSize: 25,
     paddingBottom:20
   },
   opcion_texto: {
     fontSize: 20,
   },
   good: {
     color:"#7cfc00",
     fontSize: 30,
 
   }
  });
  

  export default Questions;