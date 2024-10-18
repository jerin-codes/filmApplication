import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function ItemSeperator({height=0,width=10})  {
  
    return (
      <View style={{width,height}}/>
        
      
    )
  }


const styles = StyleSheet.create({})
ItemSeperator.defaultProps={
    height:0,
    width:0
}
