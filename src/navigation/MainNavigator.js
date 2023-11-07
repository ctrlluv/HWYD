import { useEffect, useState } from 'react'
import React from 'react'
import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/authApi'
import { setCameraImage } from '../features/authSlice'

const MainNavigator = () => {
    const {user, localId} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {data, error, isLoading} = useGetProfileImageQuery(localId)

    useEffect(() => {
      console.log(data)
      if (data) {
        dispatch(setCameraImage(data.image))
      }
    },[data])

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator