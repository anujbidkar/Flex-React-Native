import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>

      </View>
      <View style={styles.view2}>

      </View>
      <View style={styles.view3}>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  view1:{
    flex:2,
    backgroundColor:"red",
    height:"100%"
  },
  view2:{
    flex:5,
    backgroundColor:"powderblue",
    height:"100%"
  },
  view3:{
    flex:2,
    backgroundColor:"purple",
    height:"100%"
  }
 
});
