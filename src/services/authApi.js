import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { apiKey, authUrl } from '../firebase'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: authUrl}),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({...auth}) => ({
                 url: `accounts:signUp?key=${apiKey}`,
                 method: 'POST',
                 body: auth,
            }),
        }),
        login: builder.mutation({
            query: ({...auth}) => ({
                 url: `accounts:signInWithPassword?key=${apiKey}`,
                 method: 'POST',
                 body: auth,
            }),
        }),
        getProfileImage: builder.query({
            query: localId => `profileImages/${localId}.json`,
        }),
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: 'PUT',
                body: {
                    image: image,
                },
            }),
        }),
    }),
})

export const {
    useLoginMutation, 
    useSignUpMutation, 
    useGetProfileImageQuery, 
    usePostProfileImageMutation} = authApi