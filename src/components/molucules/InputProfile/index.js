import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const InputProfile = ({label, multiline}) => {
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.container}>
      <TextInput style={styles.input} />
      </View>
    </View>
  )
}

export default InputProfile

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.pertama,
        width: 310,
        height: 40,
        flexDirection: 'row'
      },
      input: {
          paddingTop: 5,
          paddingBottom: 5,
          paddingHorizontal: 20,
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 16,
          flex: 1,
          color: colors.pertama,
      },
      label: {
          fontSize: 14,
          color: colors.pertama,
          marginBottom: 6,
          marginTop: 5,
          fontFamily: 'Montserrat-Medium'
      }
})