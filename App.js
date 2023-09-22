import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ApiGetData from './src2/ApiGetData'
import Index from './src2/Index'
import { Provider } from 'react-redux'
import store from './src2/Store'

export default function App() {
  return (
    <Provider store={store}>

      <Index/>
    </Provider>
  )
}

const styles = StyleSheet.create({})
