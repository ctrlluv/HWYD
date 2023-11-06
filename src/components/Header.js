import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'


const Header = ({title}) => {
  return (
    <View style={styles.container}>
         <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: colors.secondary,
        fontFamily: 'PoppinsExtraLightItalic',
    },
 
})