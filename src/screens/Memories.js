import { FlatList, StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'

const Memories = () => {
  const image ={uri: 'https://wallpapers.com/images/hd/dark-blue-gradient-e3nnoubumcokurcc.jpg'}
  const diary = useSelector(state => state.diary.value)
  const date = useSelector(state => state.calendar.dateSelected)


  return (
    <View style={styles.container}>
      <Header title='Memories'/>
      <ImageBackground 
        style={styles.image}
        source={image}>
        <View style={styles.listContainer}>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{diary}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Memories

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    borderColor: colors.secondary,
    borderWidth: 2,
    height: '90%',
    width: '95%',
    borderRadius: 10,
  },
  text: {
    color: colors.quaternary,
  }
})