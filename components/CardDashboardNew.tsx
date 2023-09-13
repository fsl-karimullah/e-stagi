import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../resources/images'
import { horizontalScale, verticalScale } from '../resources/metrics'


type Props = {title:any, itemKey:any}

const CardDashboardNew = (props: Props) => {
  return (
    <View style={styles.containerContent} key={props.itemKey}>
      <View style={styles.containerCard}>
      <Image source={images.logoFirst} style={styles.cardIcon}  />  
      <Text style={styles.text}>{props.title}</Text>
      </View> 
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