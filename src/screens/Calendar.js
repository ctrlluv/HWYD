import { ImageBackground, Button, StyleSheet, Text, TextInput,  View, FlatList, TouchableOpacity, Modal, Pressable, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import Card from '../components/Card'
import { colors } from '../constants/colors'
import { useDispatch } from 'react-redux'
import { setDateSelected } from '../features/calendarSlice'

const image = {uri: 'https://wallpapers.com/images/hd/dark-blue-gradient-e3nnoubumcokurcc.jpg'}

const Calendar = ({ navigation  }) => {
   const [textValue, setTextValue] = useState('')
   const [dateList, setDateList] = useState([])
   const dispatch = useDispatch()
  
   const onHandleChangeText = text => setTextValue (text)

   const addDate = () => {
    if(textValue === "") {
      return
    }
    setDateList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ])
    setTextValue('')
   }

   const renderListDate = ({item}) => (
     <Pressable  onPress={() => {
      dispatch(setDateSelected(item.value))
      navigation.navigate('Diary', {item: item.value})}}>
        <View style={styles.textContainer}>
           <Text style={styles.text}>{item.value}</Text>
        </View>
     </Pressable>
   )

  return (
    <View style={styles.container}>
      <ImageBackground 
       source={image} 
       resizeMode='cover' 
       style={styles.image}>
      <View style={styles.listContainer}>
         <Text style={styles.title}>What's today's date?</Text>
      </View>
      <View style={styles.inputContainer}>
         <TextInput 
            placeholder='DD/MM/YYYY'
            style={styles.textinput}
            value= {textValue}
            onChangeText={onHandleChangeText} 
            textAlign='center'           
            />
         <Button 
            onPress={addDate}
            title='Confirm'
            color= '#00ffcc'
            
             />
      </View>
      <View style={styles.listContainer} >
         <FlatList 
           data={dateList}
           renderItem={renderListDate}
           keyExtractor={item => item.id}
           horizontal
           navigation= {navigation}
         />
      </View>
      </ImageBackground>
    </View>
  )
}

export default Calendar

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    borderColor: colors.quaternary,
    borderWidth: 2,
    width: 180,
    height: 40,
    color: colors.primary,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    fontSize: 20,
    fontFamily: 'PoppinsExtraLightItalic',
    
  
  },
  listContainer: {
    borderColor: colors.secondary,
    borderWidth: 2,
    borderRadius: 10,
    height: 70,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    
   
  },
  text: {
    fontSize: 20,
    color: colors.primary,
    fontFamily: 'PoppinsExtraLightItalic',
  },
  textContainer: {
    borderColor: colors.quaternary,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    
  },
  title: {
    color: colors.quaternary,
    fontSize: 30,
    fontFamily: 'PoppinsExtraLightItalic',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  }
  
});
