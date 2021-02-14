import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import { Camera } from 'expo-camera'
import { Ionicons } from '@expo/vector-icons'
import * as theme from '../config/theme'

export default function ScannerScreen({navigation, route}) {

  const { categorie } = route.params
  const [hasPermission, setHasPermission] = useState(null);

  const [zoom, setZoom] = useState(Camera.Constants.zoom = 0);

  const [Flash, setFlash] = useState(Camera.Constants.flashMode = 'off');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const checkBarcode = ({type, data}) => {
    setZoom(0)
    setFlash('off')
    navigation.navigate('Details'+categorie, {barcode: data})
  }

  return (
    <View style={theme.styles.containerScan}>
      <Camera 
        style={theme.styles.camera} 
        type={Camera.Constants.Type.back}
        zoom = {zoom} 
        flashMode = {Flash}
        onBarCodeScanned={ checkBarcode}
      >
        <ImageBackground source={ require('../../assets/filtrescanner.png') } style={theme.styles.buttonContainer}>
        <TouchableOpacity
              style={theme.styles.buttonTorche}
              onPress={() => {
                setFlash(
                  Flash == 'off' ? 'torch' : 'off'
                )
              }}>
                <Ionicons style={theme.styles.button} name="flashlight-outline" size={50} color="white" />
            </TouchableOpacity>

          <TouchableOpacity
            style={theme.styles.button}
            onPress={() => {
              setZoom(
                zoom >= 1 ? 1 : zoom + 0.5
              )
            }}>
              <Ionicons style={theme.styles.button} name="add-circle" size={50} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={theme.styles.button}
              onPress={() => {
                setZoom(
                  zoom <= 0 ? 0 : zoom - 0.5
                )
              }}>
                <Ionicons style={theme.styles.button} name="remove-circle" size={50} color="white" />
            </TouchableOpacity>

        </ImageBackground>
      </Camera>
    </View>
  );
}
