import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextField from '../../components/TextField'
import ButtonComponent from '../../components/ButtonComponent'

type Props = {}

const BmiScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
      <TextField helpertext={"Masukkan Tinggi Badan Anda"} color={'black'} label={'Tinggi Badan'} keyboardType={'numeric'} />
      <TextField helpertext={"Masukkan Berat Badan Anda"} color={'black'} label={'Berat Badan'} keyboardType={'numeric'} />
     
      </View>
      <View style={styles.buttonContainer}>
      <ButtonComponent title={'Submit'} color={'black'} />
      </View>
    </View>
  )
} 

export default BmiScreen

const styles = StyleSheet.create({
  container:{ 
    flex:1,
    backgroundColor:'white'
  },
  containerInput:{
    marginTop:10
  },
  buttonContainer:{
    margin:10
  }
})