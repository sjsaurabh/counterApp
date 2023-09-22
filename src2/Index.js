import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo, deleteAllTodos, removeTodo, updateTodo } from './ACTION/Action'

export default function Index() {
    const [inputTodo,setInputTodo]=useState('')
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [mobile,setMobile]=useState('')
    const todoSelectror=useSelector((state)=>state.todoReducer.todos)
    console.log(todoSelectror);
    const dispatch=useDispatch()
    
  const handleAddTodo = () => {
    dispatch(addTodo({ id: new Date().getTime()% 10, name, age, mobile }));
    setName('');
    setAge('');
    setMobile('');
  };
  return (
    <View style={styles.MainContainer}>
       < StatusBar  backgroundColor="pink" networkActivityIndicatorVisible={true}/>
      <Text>Todo list</Text>
      <TextInput 
      style={styles.Input}
       value={inputTodo} 
       onChangeText={(text)=>setInputTodo(text)}
      
      />
      <TextInput 
      style={styles.Input}
       value={name} 
       onChangeText={(text)=>setName(text)}
      
      />
      <TextInput
      style={styles.Input}
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
      style={styles.Input}
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={(text) => setMobile(text)}
      />
      <Button title='AddTodo' onPress={()=>dispatch(addTodo(inputTodo,name,age,mobile),
        setInputTodo(''),
        setName(''),
        setAge(''),
        setMobile('')

        )}/>
      {
        todoSelectror.map((item)=>{
            return(
              
                <View 
                style={{
                  // flexDirection:'row',
                  // justifyContent:'space-between'
                }}
                 key={item.id}>

                    <Text>{item.name}</Text>
                    <Text>{item.todo}</Text>
                    <Text>{item.id}</Text>
                
                    <Text>{item.age}</Text>
                    <Text>{item.mobile}</Text>
                    
                    <Button
                onPress={()=>dispatch(removeTodo(item.id))}
                 title='remove '/>
                    <Button
                onPress={()=>dispatch(updateTodo(item))}
                 title='update '/>
                </View>
               
            )
        })
      }
      
       <Button
                onPress={()=>{
                  dispatch(deleteAllTodos())
                }}
                 title='Delete all'/>
    </View>
  )
}

const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Input:{
        borderRadius:1,
        borderWidth:1,
        width:'50%'
    }
})