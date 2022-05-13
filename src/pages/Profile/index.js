import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { Gap, HeaderProfil, ButtondiProfile } from '../../components'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderProfil title={"Feldryansa"} />
      <Gap height={30}/>
      <ButtondiProfile title={"Edit Profile"} onPress={() => navigation.navigate('EditProfile')}/>
      <Gap height={30}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    }
}
)