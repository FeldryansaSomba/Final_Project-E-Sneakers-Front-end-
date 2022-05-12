import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'


const ButtondiProfile = ({title}) => {
  return (
    <View style={styles.info}>
      <Text style={styles.text}>{title}</Text>
      </View>
  )
}

export default ButtondiProfile

const styles = StyleSheet.create({
    info: {
        borderBottomWidth: 1,
        borderBottomColor: colors.kedua,
        width: 385,
        paddingHorizontal: 15,
        paddingBottom: 5
      },
      text: {
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
        color: colors.kedua
      }
})