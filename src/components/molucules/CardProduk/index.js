import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import { Gap } from '../../atoms'

const CardProduk = ({onPress, title, harga, lokasi, pic}) => {
  return (
    <View>
      <View style={styles.container}>
      <Image source={pic} style={styles.gambar}/>
      <View style={styles.container2}>
      <Text style={styles.sneakers}>{title}</Text>
      <Gap height={3}/>
      <Text style={styles.prize}>{harga}</Text>
      <Gap height={12}/>
      <Text style={styles.loc}>{lokasi}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>Beli</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default CardProduk

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.keempat,
    width: 345,
    height: 92,
    borderRadius: 10,
    flexDirection: 'row',
  },
  gambar: {
    width: 79,
    height: 62,
    marginLeft: 20,
    marginTop: 15
  },
  container2: {
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  sneakers: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.ketujuh
  },
  prize: {
    fontSize: 13,
    fontFamily: 'Montserrat-Bold',
    color: colors.ketujuh
  },
  loc: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.ketujuh
  },
  button: {
    width: 49,
    height: 38,
    backgroundColor: colors.pertama,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    marginLeft: 280,
    marginTop: 39
  },
  textButton: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold'
  }
  
  
})