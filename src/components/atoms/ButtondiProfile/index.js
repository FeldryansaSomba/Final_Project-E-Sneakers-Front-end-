import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'


const ButtondiProfile = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.info} >
      <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
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