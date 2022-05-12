import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap, InputProfile } from '../../components'
import { IconAdd, IconBack, IconGambar } from '../../assets'
import { colors } from '../../utils'

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <IconBack style={styles.back} onPress={() => navigation.goBack()}/>
      <View style={styles.container2}>
      <Gap height={16}/>
      <IconGambar/>
      <IconAdd style={styles.addPhoto}/>
      <Gap height={45}/>
      <InputProfile label={"Nama"}/>
      <InputProfile label={"No Telepon"}/>
      <InputProfile label={"Alamat"}/>
      <Gap height={56}/>
      <View style={styles.button}>
        <Text style={styles.text}>Simpan</Text>
      </View >
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
    container2: {
      alignItems: 'center',
      backgroundColor: 'white'
    },
    button: {
      width: 282,
      height: 40,
      backgroundColor: colors.pertama,
      justifyContent: 'center',
      borderRadius: 10
    },
    text: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 16
    },
    addPhoto:{
      position: 'absolute',
      top: 90,
      left: 220
    },
    back: {
      marginLeft: 26,
      marginTop: 28
    }
    
})