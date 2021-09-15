import React,{useState} from 'react'
import {View,Text,Image,StyleSheet,KeyboardAvoidingView,TouchableOpacity} from 'react-native'
import{ TextInput,Button} from 'react-native-paper';
export default function SignupScreen(){
    const [email,setEmail]=useState('')
    const[name,setName]=useState('')
    const [password,setPassword]=useState("")
    const [image,setImage]=useState(null)
    const [showNext,setShowNext]=useState(false)
    return(
        <KeyboardAvoidingView behavior="position">
            <View style={styles.box1}>
            <Text style={styles.text}>Wellcome to Chatup</Text>
            <Image style={styles.img}source={require('../assets/images.jpg')} />
              </View>  
              <View style={styles.box2}>
                  {
                      !showNext && 
                  <>
                  <TextInput
                  label="Email"
                  value={email}
                  onChangeText={(text)=>setEmail(text)}
                  mode="outlined"
                   />
                     <TextInput
                  label="password"
                  mode="outlined"
                  value={password}
                  onChangeText={(text)=>setPassword(text)}
                  secureTextEntry={true}
                   />
                   </>}
                  {showNext ?
                  <>
                  <TextInput
                  label="Name"
                  value={name}
                  onChangeText={(text)=>setName(text)}
                  mode="outlined"
                   />
                   <Button mode="contained"
                   onPress={()=>{}}
                   >Select Profile Picture</Button>
                   <Button mode="contained"
                   onPress={()=>{}}
                   >Signup</Button>
                  </>
                  :
                  <Button mode="contained"
                   onPress={()=>setShowNext(true)}
                   >Next</Button>
                  } 
                  <TouchableOpacity><Text>Already Have an Account ? </Text></TouchableOpacity>

                  </View>
                </KeyboardAvoidingView>
    )
}
const styles=StyleSheet.create({
    text:{
        fontSize:22,
        color:"green",
        margin:10
    },
    img:{
        width:200,
        height:200
    },
    box1:{
        alignItems:"center"
    },
    box2:{
        paddingHorizontal:40,
        justifyContent:"space-evenly",
        height:"50%"
    }
});