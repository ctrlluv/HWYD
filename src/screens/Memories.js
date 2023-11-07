import { FlatList, StyleSheet, Text, View, ImageBackground, Pressable, Modal} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'
import Feather from '@expo/vector-icons/Feather'


const Memories = () => {
  const image ={uri: 'https://wallpapers.com/images/hd/dark-blue-gradient-e3nnoubumcokurcc.jpg'}
  const diary = useSelector(state => state.diary.value)
  const date = useSelector(state => state.calendar.dateSelected)


   const renderMemory = () => 
    <View style={styles.textContainer} >
      <Text style={styles.text}>{date}</Text>
      <Text style={styles.text}>{diary}</Text>
      <Pressable style={styles.trashButton}>
        <Feather name='trash' color={colors.quaternary} size={24}/>
      </Pressable>
    </View>
   

  return (
    <View style={styles.container}>
      <Header title='Memories'/>
      <ImageBackground 
        style={styles.image}
        source={image}>
        <View style={styles.listContainer}>
          <FlatList
          data={diary}
          keyExtractor={item => item.id}
          renderItem={renderMemory}
          horizontal
          />
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
    height: '95%',
    width: '95%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    color: colors.primary,
    fontFamily: 'PoppinsExtraLightItalic',
    fontSize: 20,
    marginLeft: 10,
  },
  textContainer: {
    borderColor: colors.quaternary,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    height: '95%',
    width: 325,
    marginHorizontal: 40,
    marginTop: 15,
    
  },
  trashButton: {
    backgroundColor: colors.primary,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.quaternary,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 480,
  },

})