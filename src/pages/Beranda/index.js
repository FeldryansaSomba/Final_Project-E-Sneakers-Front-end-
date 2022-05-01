import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardProduk, Gap, HeaderBeranda } from '../../components'
import { Sneaker1, Sneaker2, Sneaker3 } from '../../assets'
import { colors } from '../../utils'

const Beranda = () => {
  return (
    <View style={styles.container}>
      <HeaderBeranda/>
      <View style={styles.page}>
      <Gap height={13}/>
      <CardProduk 
      title="Sneaker All Star" 
      harga="350000" 
      lokasi="Manado" 
      pic={Sneaker1}
      />
      <Gap height={13}/>
      <CardProduk 
      title="Sneaker Play Low" 
      harga="300000" 
      lokasi="Jakarta Timur" 
      pic={Sneaker2}
      />
      <Gap height={13}/>
      <CardProduk 
      title="Sneaker Triple S" 
      harga="400000" 
      lokasi="Jakarta" 
      pic={Sneaker3}
      />
      </View>
    </View>
  )
}

export default Beranda

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ketiga,
    flex: 1,
  },
  page: {
    alignItems: 'center'
  }
})