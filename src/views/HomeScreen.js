import React from 'react'
import {Text, View, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView  } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import alimentation from '../../assets/icons/alimentation.png'
import cosmetique from '../../assets/icons/cosmetique.png'
import produit from '../../assets/icons/produit.png'
import * as theme from '../config/theme'

export default function HomeScreen({ navigation }) {

const alimentationIconURI = Image.resolveAssetSource(alimentation)
const cosmetiqueIconURI = Image.resolveAssetSource(cosmetique)
const produitIconURI = Image.resolveAssetSource(produit)

const ScannerAlimentation = () => {
    navigation.navigate('Scanner', {categorie: 'Alimentation'})
    }
const ScannerCosmetique = () => {
    navigation.navigate('Scanner', {categorie: 'Cosmetique'})
    }
const ScannerProduit = () => {
    navigation.navigate('Scanner', {categorie: 'Produit'})
    }
    
    const MenuComponent = () => {
        return (
                <View style={theme.styles.containerHome}>
                    <TouchableOpacity onPress={ScannerAlimentation}>
                        <Image source={{ uri: alimentationIconURI.uri }} style={theme.styles.ImageHome1} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ScannerCosmetique}>
                        <Image source={{ uri: cosmetiqueIconURI.uri }}  style={theme.styles.ImageHome2}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={ScannerProduit}>
                            <Image source={{ uri: produitIconURI.uri }} style={theme.styles.ImageHome3} />
                    </TouchableOpacity>
                </View>
                )
              }
      
    return (
      <SafeAreaView style={theme.styles.containerHome}>
          <ScrollView>
            <FlatList ListHeaderComponent={<MenuComponent />}/>
          </ScrollView>
      </SafeAreaView>
    )
  }