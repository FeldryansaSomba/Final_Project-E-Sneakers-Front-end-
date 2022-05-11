import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconApp} from '../../assets/icon';
import {
  Button,
  Gap,
  TextInput,
  Title,
  PasswordInput,
} from '../../components/atoms';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IconApp style={styles.logo} />
      <Gap height={8} />
      <Title title="Selamat Datang" />
      <Gap height={51} />
      <View style={styles.contentWrapper}>
        <TextInput title="No Telepon" placeholder="Enter your phone number" />
        <Gap height={6} />
        <PasswordInput title="Password" placeholder="Enter your password" />
        <Gap height={49} />
        <Button title="Masuk" onPress={() => navigation.navigate('MainApp')} />
        <Gap height={45} />
        <Text style={styles.text} onPress={() => navigation.navigate('SignUp')}>
          Buat Akun Baru
        </Text>
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
  text: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#313D6A',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
});
