import { StyleSheet, Text, TextInput, View, Pressable, ImageBackground } from 'react-native'
import React, {useState} from 'react'
import { colors } from '../constants/colors'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { addMemory } from '../features/diarySlice'


const Diary = () => {
    const date = useSelector(state => state.calendar.dateSelected)
    const dispatch = useDispatch()
    const image ={uri: 'https://wallpapers.com/images/hd/dark-blue-gradient-e3nnoubumcokurcc.jpg'}
    
    const [textValue, setTextValue] = useState('')

    const onHandleChangeText = (text) => setTextValue(text)
    
  return (
    <View style={styles.container}>
      <Header title={date}/>
      <ImageBackground 
        style={styles.image}
        source={image}>
       <View style={styles.inputContainer}>
         <TextInput 
            placeholder='How was your day?'
            style={styles.textinput}
            onChangeText={onHandleChangeText}
            textAlign= 'left'
            textAlignVertical='top'
            value={textValue}
            />
      </View>
      <Pressable 
         style={styles.button}
         onPress={() => dispatch(addMemory(textValue))}
         >
           <Text style={styles.textButon}>That's All</Text>
      </Pressable>
      </ImageBackground>

    </View>
  )
}

export default Diary

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
        width: '90%',
    
    },
    textinput: {
        borderColor: colors.quaternary,
        borderWidth: 2,
        width: '100%',
        height: '100%',
        color: colors.primary,
        borderRadius: 10,
        backgroundColor: colors.secondary,
        fontSize: 20,
        fontFamily: 'PoppinsExtraLightItalic',
        paddingLeft: 10,
        paddingTop: 10,
        
    },
    button: {
        backgroundColor: colors.quaternary,
        height: 40,
        width: '30%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
       
    },
    textButon: {
        fontSize: 25,
        color: colors.primary,
        fontFamily: 'PoppinsExtraLightItalic',
    },
    image: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }
})