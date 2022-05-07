import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const HeaderJual = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default HeaderJual;

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
    fontSize: 14,
    textAlign: 'center',
  },
});
