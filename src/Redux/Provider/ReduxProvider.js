"use client"
import { store } from '@/Redux/store'
import { Provider } from 'react-redux'
import React from 'react'

export function ReduxProvider({childern}) {
    return <Provider store={store}> {childern} </Provider>
}