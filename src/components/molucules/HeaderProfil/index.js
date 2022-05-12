import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import { ILProfil } from '../../../assets'

const HeaderProfil = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Image source={ILProfil} style={styles.avatar} />
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
      <Text style={styles.edit} >Edit Profil</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderProfil

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.pertama,
        flexDirection: 'row',
        alignItems: 'center',
        height: 107
    },
    text: {
        marginLeft: 16,
        fontFamily: 'Montserrat-Bold',
        color: colors.keempat,
        fontSize: 20,
        flex: 1,
    },
    avatar: {
        marginTop: 21,
        marginBottom: 21,
        marginLeft: 21,
        
    },
    edit: {
        fontFamily: 'Montserrat-SemiBold',
        color: colors.keempat,
        fontSize: 13,
        marginRight: 5,
        marginTop: 73
    }
})