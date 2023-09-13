import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper';

type Props = {right?:any,left?:any, title:any,subtitle:any, onPress?:any}

const CardDashboard = (props: Props) => {
  return (
    <Pressable onPress={props.onPress} style={styles.buttonCard}>
     <Card.Title 
    title={props.title}
    subtitle={props.subtitle}
    left={props.left}
    right={props.right}
    titleVariant='titleMedium'
    style={{
      borderColor:'#eee',
      borderWidth:1,
      borderRadius:10
    }}
    
  />
    </Pressable>
  )
}

export default CardDashboard

const styles = StyleSheet.create({
  buttonCard:{
    margin:3
  }
})