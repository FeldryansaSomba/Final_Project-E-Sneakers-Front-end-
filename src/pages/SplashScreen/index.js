import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { ILLogo } from '../../assets'
import { colors } from '../../utils/colors'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
    }, [])
  return (
    <View style={styles.container}>
        <ILLogo/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.ketiga,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})