import React,{useState} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'



export default function App() {
  const [color, setColor] = useState([])
  const colorGen = ()=>{
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
   
    return `rgb(${red},${green},${blue})`
  }
  console.log(color)
  return (
    <View>
      <TouchableOpacity onPress={()=>setColor([...color,colorGen()])}>
      <Text style={{marginTop:30, fontSize:40,color:"green"}}>Tap Screen </Text>
      <View style={{width:400, height:600,backgroundColor:colorGen()}}/>
      </TouchableOpacity>
    </View>
  )
}
