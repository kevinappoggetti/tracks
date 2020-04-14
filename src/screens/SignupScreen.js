import React,{useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');
  return(
     <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
       <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        value ={email}
        onChange = {(newEmail)=>setEmail(newEmail)}/>
      <Spacer />
       <Input
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        value ={password}
        onChange = {(newPassword)=>setPassword(newPassword)}/>
      <Spacer />
      <Spacer>
      <Button title="Sign up" onPress={()=>signup({email,password})} />
      </Spacer>
     </View>
  );
}

SignupScreen.navigationOptions = ()=>{
  return
  {
    header:null
  }
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    justifyContent: 'center'
  }
});
export default SignupScreen;
