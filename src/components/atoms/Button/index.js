import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, color = '#313D6A', textColor = '#FFFFFF', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    height: 41,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }),
  text: textColor => ({
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: textColor,
  }),
});
