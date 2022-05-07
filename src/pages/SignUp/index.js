import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppLogo} from '../../assets/illustration';
import {Button, Gap, TextInput, Title} from '../../components/atoms';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <AppLogo style={styles.logo} />
      <Gap height={8} />
      <Title title="Buat Akun" />
      <Gap height={51} />
      <View style={styles.contentWrapper}>
        <TextInput title="Nama" placeholder="Enter your name" />
        <Gap height={6} />
        <TextInput title="No Telepon" placeholder="Enter your phone number" />
        <Gap height={6} />
        <TextInput title="Kata Sandi" placeholder="Enter your password" />
        <Gap height={49} />
        <Button title="Daftar" onPress={() => navigation.navigate('Login')} />
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
});
