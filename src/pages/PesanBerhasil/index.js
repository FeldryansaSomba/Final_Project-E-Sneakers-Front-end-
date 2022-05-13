import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconBerhasil } from '../../assets'
import { Gap } from '../../components'
import { colors } from '../../utils'

const PesanBerhasil = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pesanan Anda Berhasil</Text>
      <Gap height={22}/>
      <IconBerhasil/>
      <Gap height={288}/>
      <TouchableOpacity>
      <View style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.kembali}>Kembali</Text>
      </View>

      </TouchableOpacity>
    </View>
  )
}

export default PesanBerhasil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 129,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        fontSize: 22
    },
    button: {
        backgroundColor: colors.pertama,
        width: 280,
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    kembali: {
        fontFamily: 'Montserrat-SemiBold',
        color: 'white'
    }
})