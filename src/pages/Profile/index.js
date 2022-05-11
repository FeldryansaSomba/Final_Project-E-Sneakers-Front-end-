import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, HeaderProfile} from '../../components';
import {colors} from '../../utils';

const Profile = ({navigation}) => {
  return (
    <View>
      <HeaderProfile style={styles.header} text="Feldryansa" />
      <Gap height={30} />
      <View style={styles.infoAppButton}>
        <Text
          onPress={() => navigation.navigate('InformasiAplikasi')}
          style={styles.text}>
          Informasi Aplikasi
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  infoAppButton: {
    paddingHorizontal: 12,
  },
  text: {
    paddingHorizontal: 12,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#313D6A',
    fontSize: 14,
    color: colors.pertama,
  },
});
