import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../resources/images'
import { horizontalScale, verticalScale } from '../resources/metrics'


type Props = {title:any, itemKey:any,onPress:any,imageSource:any}

const CardDashboardNew = (props: Props) => {
  return (
    <View style={styles.containerContent} key={props.itemKey}>
      <Pressable style={styles.containerCard} onPress={props.onPress}>
      <Image source={props.imageSource} style={styles.cardIcon}  />  
      <Text style={styles.text}>{props.title}</Text>
      </Pressable> 
    </View> 
  )
}  

export default CardDashboardNew

const styles = StyleSheet.create({
  cardIcon:{
    width: horizontalScale(30),
    height: verticalScale(30),
    resizeMode:'contain',
    
  },
  containerCard:{
    backgroundColor:'#eee',
    padding:horizontalScale(20),
    borderRadius:10,
    width: horizontalScale(140), 

  },
  containerContent:{
    marginHorizontal:20,
    marginVertical:10
  },
  text:{
    fontSize:13,
    fontWeight:'bold',
    marginTop:5
  }
}) 