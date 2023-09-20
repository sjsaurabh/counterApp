import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {incNumber,decNumber} from './Action/First_Action'
 
export default function Index() {
  const mystate=useSelector((state)=>state.changeNumber);
  const dispatch =useDispatch()
  console.log(mystate);
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      // marginHorizontal: 50

    }}>
      <TouchableOpacity onPress={()=>dispatch(incNumber())}>
        <Text>INC</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{marginHorizontal: 20}}>{mystate}</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=>dispatch(decNumber())}>
        <Text>DEC</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({})