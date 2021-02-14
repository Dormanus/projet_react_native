import React from 'react'
import {Text, View, Image, FlatList, StyleSheet, Linking, ScrollView  } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import alimentation from '../../assets/icons/alimentation.png'
import cosmetique from '../../assets/icons/cosmetique.png'
import produit from '../../assets/icons/produit.png'
import * as theme from '../config/theme'

const url="https://google.com"

const alimentationIconURI = Image.resolveAssetSource(alimentation)
const cosmetiqueIconURI = Image.resolveAssetSource(cosmetique)
const produitIconURI = Image.resolveAssetSource(produit)

const ImageOpenBeauty ='https://static.openbeautyfacts.org/images/misc/openbeautyfacts-logo-en-178x150.png'
const ImageOpenFood = 'https://static.openfoodfacts.org/images/misc/openfoodfacts-logo-fr-178x150.png'
const ImageFrOpenProduct = 'https://static.openproductsfacts.org/images/misc/openproductsfacts-logo-en-178x150.png'
    
const SiteFrOpenBeauty = 'https://fr.openbeautyfacts.org/'
const SiteFrOpenFood = 'https://fr.openfoodfacts.org/'
const SiteFrOpenProducts ='https://fr.openproductsfacts.org/'

export default function InfosScreen({ }) {
  const InfosComponent = () => {
    return (
      <View style={theme.styles.containerInfo}>
        <ScrollView>
            <View style={theme.styles.containerInfo2}>
            <Text style={theme.styles.Texte1}>
            Les données récupérées sont issues de bases de données gratuites et participatives, par conséquent il y a beaucoup de produits où les données sont manquantes,  obsolètes ou érronées.
            </Text>
            </View>
            <View style={theme.styles.containerInfo2}>
              <Image source={{ uri: alimentationIconURI.uri }} style={theme.styles.ImageInfo1} />
              <Text style={theme.styles.Texte}>Grâce à cette icône accédez au scanner de produits alimentaires.</Text>
            </View>
            <View style={theme.styles.containerInfo2}>
              <Image source={{ uri: cosmetiqueIconURI.uri }} style={theme.styles.ImageInfo2}/>
            <Text style={theme.styles.Texte}>Grâce à cette icône accédez au scanner de produits cosmétiques.</Text>
            </View>
            <View style={theme.styles.containerInfo2}>
              <Image source={{ uri: produitIconURI.uri }} style={theme.styles.ImageInfo3} />
            <Text style={theme.styles.Texte}>Grâce à cette icône accédez au scanner de aux autres produits.</Text>
            </View>
            
            <View style={theme.styles.containerInfo2}>
                  <Image source={{uri:ImageOpenFood}} style={theme.styles.ImageInfo4} />
              <Text style={theme.styles.Texte}>
            Open Food Facts est la base de données participative utilisée pour récupérer les informations des produits de la catégorie alimentaire. Pour plus de renseignements rendez-vous sur le site
            <Text style={theme.styles.TexteURL} onPress={() => Linking.openURL(SiteFrOpenFood)}> {SiteFrOpenFood}
            </Text>
              </Text>
            </View>
            <View style={theme.styles.containerInfo2}>
                  <Image source={{uri: ImageOpenBeauty}} style={theme.styles.ImageInfo4} />
              <Text style={theme.styles.Texte}>
            Open Beauty Facts est la base de données participative utilisée pour récupérer les informations des produits de la catégorie cosmétique. Pour plus de renseignements rendez-vous sur le site
            <Text style={theme.styles.TexteURL} onPress={() => Linking.openURL(SiteFrOpenBeauty)}> {SiteFrOpenBeauty}
            </Text>
            </Text>
            </View>
            <View style={theme.styles.containerInfo2}>
                  <Image source={{uri:ImageFrOpenProduct}} style={theme.styles.ImageInfo4} />
                  <Text style={theme.styles.Texte}>
                  Open Products Facts est la base de données participative utilisée pour récupérer les informations les produits autres que alimentaire ou ccosmétique. Pour plus de renseignements rendez-vous sur le site
            <Text style={theme.styles.TexteURL} onPress={() =>  Linking.openURL(SiteFrOpenProducts)}> {SiteFrOpenProducts}
              </Text>
              </Text>
          </View>
          </ScrollView>
      </View>
            )
          }
  
return (
  <SafeAreaView style={{flex:1, backgroundColor: 'steelblue'} }>
     <FlatList ListHeaderComponent={<InfosComponent />}/>
  </SafeAreaView>
)
}