import { Pressable, StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../constants/colors'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser, setCameraImage } from '../features/authSlice'
import { usePostProfileImageMutation } from '../services/authApi'
import Feather from '@expo/vector-icons/Feather'
import { deleteSession } from '../db'

const Profile = () => {
    const image ={uri: 'https://wallpapers.com/images/hd/dark-blue-gradient-e3nnoubumcokurcc.jpg'}
    const dispatch = useDispatch()
    const imageProfile = useSelector(state => state.auth.imageCamera)
    const {localId} = useSelector(state => state.auth)
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation()

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
        }
        return true
    }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()
            if (isCameraOk) {
                let result = await ImagePicker.launchCameraAsync({
                   mediaTypes: ImagePicker.MediaTypeOptions.All,
                   allowsEditing: true,
                   aspect: [9, 16],
                   base64: true,
                   quality: 0.4,
                })
                if(!result.canceled) {
                    console.log(result.assets)
                    dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
                   
                }
            }
    }

    const confirmImage = () => {
       triggerSaveProfileImage({image, localId})
    }

    const logout = () => {
      dispatch(clearUser())
      deleteSession()
    }

  return (
    <View style={styles.container}>
      <ImageBackground 
      style={styles.image}
      source={image}
      >
        {imageProfile ? (
         <Image source={{uri: imageProfile,
        }}
        style={styles.imageProfile}
        resizeMode= 'cover'
        />
        ) : (
         <Image source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        }}
        style={styles.imageProfile}
        resizeMode= 'cover'
        />
        )}
        <Pressable style={styles.cameraButton} onPress={pickImage}>
            <Text style={styles.textButton}>Take profile picture</Text>
        </Pressable>
        <Pressable style={styles.cameraButton} onPress={confirmImage}>
            <Text style={styles.textButton}>Confirm</Text>
        </Pressable>
        <View style={styles.logoutButton}>
          <Feather 
          name='log-out' 
          size={30}
          color={colors.quaternary}
          onPress={logout}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageProfile: {
    width: 150,
    height: 150,
    borderColor: colors.quaternary,
    borderWidth: 2,
    borderRadius: 10,
  },
  cameraButton: {
    backgroundColor: colors.quaternary,
    height: 50,
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  textButton: {
    fontFamily: 'PoppinsExtraLightItalic',
    fontSize: 20,
  },
  logoutButton: {
    borderColor: colors.quaternary,
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 10,
  }
})