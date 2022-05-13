import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AppLogo} from '../../assets/illustration';
import {Gap, Title} from '../../components/atoms';
import Axios from 'axios';
import { colors } from '../../utils';

const SignUp = ({navigation}) => {

  const [dataSignUp, setDataSignUp]  = useState({
    nama:'',
    no_telepon: '',
    kata_sandi: ''
})

const nama = (a) =>{
  setDataSignUp({...dataSignUp, nama: a})
}

const no_telepon = (a)=>{
  setDataSignUp({...dataSignUp, no_telepon: a})
}

const kata_sandi = (a) =>{
  setDataSignUp({...dataSignUp, kata_sandi: a})
}

const signUpHandle = (nama, kata_sandi, no_telepon) =>{

  console.log("tes button")
  const apiURL  = 'http://192.168.1.10:4001/v1/auth/register';
  let data = {
      nama: nama,
      kata_sandi: kata_sandi,
      no_telepon:no_telepon,
  }


  Axios.post(apiURL, data)
          .then(res=>{
              console.log(res); 
              navigation.replace('Login')  
          })
          .catch((e)=>console.log("error:", e))

}
console.log("DATA SIGN UP:", dataSignUp)


  return (
    <View style={styles.page}>
      <AppLogo style={styles.logo} />
      <Gap height={8} />
      <Title title="Buat Akun" />
      <Gap height={51} />
      <View style={styles.contentWrapper}>
        <Text style={styles.data}>Nama</Text>
        <Gap height={5} />
        <TextInput style={styles.input} placeholder='Enter your name' 
          onChangeText={ (a) => nama(a) } 
          />
        <Gap height={6} />
        <Text style={styles.data}>No Telepon</Text>
        <Gap height={5} />
        <TextInput style={styles.input} placeholder='No Telepon' 
          onChangeText={ (a) => no_telepon(a) } 
          />
        <Gap height={6} />
        <Text style={styles.data}>Kata Sandi</Text>
        <Gap height={5} />
        <TextInput style={styles.input} placeholder='Kata Sandi' 
          onChangeText={ (a) => kata_sandi(a) } 
          />
        <Gap height={49} />
         <TouchableOpacity onPress={()=>signUpHandle(dataSignUp.nama, dataSignUp.kata_sandi, dataSignUp.no_telepon)}>
         <View style={{alignItems: 'center'}}>
         <View style={styles.button}>
        <Text style={styles.daftar}>Daftar</Text>
        </View >
         </View>
         </TouchableOpacity>
      </View>
    </View>

  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  logo: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 34,
  },
  contentWrapper: {
    flex: 1,
    paddingLeft: 49,
    paddingRight: 46,
  },
  button: {
    width: 282,
    height: 40,
    backgroundColor: colors.pertama,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  daftar: {
    fontFamily: 'Montserrat-Medium',
    color: 'white'
  },
  data: {

  },
  container: color => ({
    height: 41,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }),
  text: textColor => ({
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: textColor,
  }),
  input: {
    borderWidth: 1,
    borderColor: '#313D6A',
    borderRadius: 6,
    paddingLeft: 12,
    paddingHorizontal: 13,
  }
});
