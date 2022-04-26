    import { StatusBar } from 'expo-status-bar';
    import {React,useEffect, useState} from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    import { Modal, RadioButton } from 'react-native-paper';
  

    const Question  = (props) => {
      const [checked, setChecked] = useState(["","","",""]);
      const [visibleRight, setVisibleRight] = useState(false);
      const [visibleWrong, setVisibleWrong] = useState(false);


      const cambio = (i,opcion) => {
       checked[i]=opcion;
        console.log(checked);
        props.updateList(i,opcion);
        if (opcion == props.correcta) {
          setVisibleRight(true)
          setVisibleWrong(false)
        }else {
          setVisibleWrong(true)
          setVisibleRight(false)
        }

      }  

      let bad = null;
      if (visibleWrong) {
        bad =  <View visible={visibleWrong}><Text style={styles.bad}>Incorrecto</Text></View>
      }
      let good = null;
      if (visibleRight) {
        good = <View visible={visibleRight}><Text style={styles.good}>Correcto!!!</Text></View>
      }

     return(
         <View style={{backgroundColor:"#00ffff"}}>
            <Text  style={styles.texto} >{props.texto}</Text>
                <View style={StyleSheet.option} >
                <Text  style = {styles.opcion_texto } >{props.opcion1.texto}</Text>
                  <RadioButton
                  value="first"
                  style = { {flex: 1}}
                  status={ checked[props.id] === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => cambio(props.id,'first')}
                  />
                   
                </View>
                <View style={StyleSheet.option} >
                  <Text style = {styles.opcion_texto }>{props.opcion2.texto}</Text>
                  <RadioButton
                  value="second"
                  status={ checked[props.id] === 'second' ? 'checked' : 'unchecked' }
                  onPress={() => cambio(props.id,'second')}
                  />
               </View>
               <View style={StyleSheet.option} >
                  <Text style = {styles.opcion_texto }>{props.opcion3.texto}</Text>
                  <RadioButton
                  value="third"
                  status={ checked[props.id] === 'third' ? 'checked' : 'unchecked' }
                  onPress={() => cambio(props.id,'third')}
                  />
                </View>
                {bad}
                {good}

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

  export default Question;