import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Card = ({children, style}) => {
  return  <View style={[styles.container, style]}>{children}</View>
  
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        shadowColor: colors.quaternary,
        shadowOffset: { height: 5, width: 3 },
        elevation: 20,
        shadowOpacity: 1,
        shadowRadius: 10,
        
    }
})