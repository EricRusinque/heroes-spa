import React from 'react'
import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReduer } from './authReducer'

const initialState = {
    logged: false,
}

export const AuthProvider = ({ children }) => {


    const [ authState, dispatch ] = useReducer( authReduer, initialState)

    const login = ( name = '' ) => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            } 
        }
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login
         }}>
            { children }
        </AuthContext.Provider>
    )
}
