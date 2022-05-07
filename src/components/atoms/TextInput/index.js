/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextInput = ({title, placeholder}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#313D6A',
    borderRadius: 6,
    paddingLeft: 12,
    paddingHorizontal: 13,
  },
});
