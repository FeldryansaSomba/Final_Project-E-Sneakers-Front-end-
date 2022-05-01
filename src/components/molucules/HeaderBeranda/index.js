import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const HeaderBeranda = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo,</Text>
      <Text style={styles.text}>Selamat Berbelanja</Text>
    </View>
  )
}

export default HeaderBeranda

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pertama,
    flexDirection: 'column',
    paddingHorizontal: 36,
    paddingVertical: 22,

  },
  text: {
    color: colors.ketiga,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14
  }
})