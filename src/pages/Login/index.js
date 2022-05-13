import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {IconApp} from '../../assets/icon';
import { Gap, Title, } from '../../components/atoms';
import Axios  from 'axios';
import { colors } from '../../utils';

const Login = ({navigation}) => {

  const [dataLogin, setDataLogin]  = useState({
    no_telepon: '',
    kata_sandi: ''
})


  const no_telepon = (a)=>{
    // console.log("nomor telepon a:,", a)
    setDataLogin({...dataLogin, no_telepon: a})
  }

  const kata_sandi = (a) =>{
    // console.log("kata sandi a:,", a)

    setDataLogin({...dataLogin, kata_sandi: a})
  }

  const loginHandle = (kata_sandi, no_telepon) =>{

    // console.log("kata sandi:", kata_sandi)
    // console.log("nomor telepon:", no_telepon)

      const apiURL  = 'http://192.168.1.10:4001/v1/auth/login';
      

        let data = {
            kata_sandi: kata_sandi,
            no_telepon:no_telepon,
        }

        console.log("data:", data)
        Axios.post(apiURL, data)
                .then(res=>{
                    console.log(res); 
                    navigation.replace('MainApp')
                })
                .catch((e)=>console.log("error:", e))

}

  return (
    <View style={styles.page}>
      <IconApp style={styles.logo} />
      <Gap height={8} />
      <Title title="Buat Akun" />
      <Gap height={51} />
      <View style={styles.contentWrapper}>
      <Text style={styles.data}>No Telepon</Text>
        <Gap height={5} />
      <TextInput style={styles.input} placeholder='no telepon' 
          onChangeText={ (a) => no_telepon(a) } 
          />
        <Gap height={6} />
        <Text style={styles.data}>Kata Sandi</Text>
        <Gap height={5} />
        <TextInput style={styles.input} placeholder='kata_sandi' 
          onChangeText={ (a) => kata_sandi(a) } 
          />
        <Gap height={49} />
        <TouchableOpacity onPress={()=>loginHandle(dataLogin.kata_sandi, dataLogin.no_telepon)}>    
        <View style={{alignItems: 'center'}}>
        <View style={styles.button}>
              <Text style={styles.masuk}>Masuk</Text>
            </View>
            </View>
         </TouchableOpacity>
      </View>
      <Gap height={45}/>
      <Text style={styles.text} onPress={() => navigation.navigate('SignUp')}>
       Buat Akun Baru
       </Text>
    </View>
  );
};

export default Login;

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
    paddingLeft: 49,
    paddingRight: 46,
  },
  text: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#313D6A',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  }, button: {
    width: 282,
    height: 40,
    backgroundColor: colors.pertama,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  masuk: {
    fontFamily: 'Montserrat-Medium',
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: '#313D6A',
    borderRadius: 6,
    paddingLeft: 12,
    paddingHorizontal: 13,
  }
});
