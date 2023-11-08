import { useEffect, useState } from 'react'
import React from 'react'
import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/authApi'
import { setCameraImage, setUser } from '../features/authSlice'
import { fetchSession } from '../db'

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

    useEffect(() => {
       (async () => {
        try {
          const session = await fetchSession()
          console.log(session)
          if(session.rows.length) {
            const user = session.rows._array[0]
            dispatch(setUser(user))
          }
        } catch (error) {
           console.log(error.message)
        }
       })()
    },[])

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator