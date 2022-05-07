import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {HeaderJual, TextInput, Button, Gap} from '../../components';
import {IconPostProduct} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';

const Jual = () => {
  const [image, setImage] = useState('');
  const [hasImage, setHasImage] = useState(false);

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 160,
      maxWidth: 160,
      includeBase64: true,
    });

    if (result.didCancel) {
      setHasImage(false);
    } else {
      setImage(result.assets[0].uri);
      setHasImage(true);
    }
  };

  return (
    <View>
      <HeaderJual style={styles.title} text="Jual Sneakers" />
      <View style={styles.contentWrapper}>
        <View style={styles.productWrapper}>
          <View style={styles.border}>
            <View style={styles.addPhoto}>
              <TouchableOpacity onPress={getImage} activeOpacity={0.7}>
                {!hasImage && <IconPostProduct />}
                {hasImage && (
                  <Image source={{uri: image}} style={styles.product} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Gap height={29} />
        <TextInput title="Nama Produk" placeholder="Enter your product name" />
        <Gap height={6} />
        <TextInput title="Harga" placeholder="IDR 100.000" />
        <Gap height={6} />
        <TextInput
          title="Deskripsi Produk"
          placeholder="Enter your description"
        />
        <Gap height={49} />
        <View style={styles.button}>
          <Button title="Jual" />
        </View>
      </View>
    </View>
  );
};

export default Jual;

const styles = StyleSheet.create({
  contentWrapper: {
    marginHorizontal: 25,
  },
  productWrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 24,
  },
  border: {
    borderWidth: 1,
    borderColor: '#313D6A',
    width: 160,
    height: 160,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    height: 150,
    width: 150,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  product: {
    height: 150,
    width: 150,
    borderRadius: 17,
  },
  button: {
    marginHorizontal: 14,
  },
});
