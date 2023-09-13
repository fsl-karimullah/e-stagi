import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "@react-native-material/core";

type Props = {onPress?:any,variant?:"text" | "outlined" | "contained", title:any, color?:any,tintColor?:any}

const ButtonComponent = (props: Props) => {
  return (
    <View>
       <Button onPress={props.onPress} variant={props.variant} title={props.title} color={props.color} tintColor={props.tintColor} />
    </View>
  )
} 

export default ButtonComponent

const styles = StyleSheet.create({})