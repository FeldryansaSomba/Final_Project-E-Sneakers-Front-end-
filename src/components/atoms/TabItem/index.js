import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconBeranda, IconBerandaActive, IconJual, IconJualActive, IconProfile, IconProfileActive } from '../../../assets';
import { colors } from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Beranda') {
      return  active ? <IconBerandaActive/> : <IconBeranda/>;
    }
    if (title === 'Jual') {
      return active ? <IconJualActive/> : <IconJual/>;
    }
    if (title === 'Profile') {
      return active ? <IconProfileActive/> : <IconProfile/>;
    }
    return <IconBeranda/>;
  };
  return (
    <TouchableOpacity 
    style={styles.container} 
    onPress={onPress} 
    onLongPress={onLongPress}>
      <Icon/>
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text : (active) => (
  {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: active ? colors.kelima : colors.kedua,
  }
  ),
})