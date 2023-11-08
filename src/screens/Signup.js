import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'
import { useSignUpMutation } from '../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'

const image ={uri: 'https://wallpapers.com/images/hd/dark-blue-gradient-e3nnoubumcokurcc.jpg'}

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [triggerSignup, result] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email, password, confirmPass)
        triggerSignup({
            email,
            password,
        })
        console.log(result)
        if(result.isSuccess) {
            dispatch(setUser(result.data))
        }
    }

  return (
    <View style={styles.container}>
        <ImageBackground style={styles.image} source={image}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Sign up to start</Text>
        <TextInput 
           style={styles.textInput}
           placeholder='E-mail'
           value={email}
           onChangeText={setEmail}/>
        <TextInput 
           style={styles.textInput} 
           placeholder='Password'
           value={password}
           onChangeText={setPassword}/>
        <TextInput 
           style={styles.textInput} 
           placeholder='Confirm password'
           value={confirmPass}
           onChangeText={setConfirmPass}/> 
        <Pressable style={styles.buttons} onPress={onSubmit}>
            <Text style={styles.textButtons}>Sign up</Text>
        </Pressable>
        <Text style={styles.message}>Already have an account?</Text>
        <Pressable style={styles.buttons} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textButtons}>Login</Text>
        </Pressable>
      </View>
      </ImageBackground>
    </View>
  )
}

export default Login

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
   loginContainer: {
    borderColor: colors.secondary,
    borderWidth: 2,
    borderRadius: 10,
    height: '50%',
    width: '90%',
    alignItems: 'center',
   },
   title: {
    color: colors.quaternary,
    fontFamily: 'PoppinsExtraLightItalic',
    fontSize: 30,
   },
   textInput: {
    backgroundColor: colors.secondary,
    borderColor: colors.quaternary,
    borderWidth: 2,
    borderRadius: 10,
    height: 45,
    width: 300,
    marginVertical: 10,
    fontFamily: 'PoppinsExtraLightItalic',
    fontSize: 20,
    paddingLeft: 10,
   },
   buttons: {
    backgroundColor: colors.quaternary,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
   },
   textButtons: {
    fontFamily: 'PoppinsExtraLightItalic',
    fontSize: 25,
    color: colors.primary,
   },
   message: {
    color: colors.quaternary,
    fontFamily: 'PoppinsExtraLightItalic',
    fontSize: 20,
   }
})