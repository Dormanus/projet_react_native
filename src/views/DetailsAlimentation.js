import React, { useEffect, useState } from 'react'
import {ScrollView, StyleSheet, Text, View, Image, Linking, Dimensions} from 'react-native'
import { SvgCssUri } from 'react-native-svg'
import CollapsibleView from "@eliav2/react-native-collapsible-view"
import * as theme from '../config/theme'

const { width, height } = Dimensions.get('screen')

const SiteFrOpenFoodNutriscore = 'https://fr.openfoodfacts.org/nutriscore'
const SiteFrOpenFoodNova = 'https://fr.openfoodfacts.org/nova'

export default function DetailsScreen({ route }) {

  const { barcode } = route.params
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct()
  },[])
  
  const getProduct = () => {
      fetch('https://world.openfoodfacts.org/api/v0/product/'+barcode+'.json')
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error(error))
  }

if(product.status!=1){
  if(product.status===0){
      return (
        <View style={{ alignItems: 'center', backgroundColor: 'steelblue', flex:1}}>
          <Text style={{ fontSize: 35, color: 'black', marginTop: height/3}}>Produit non trouvé.</Text>
        </View>
        )
    }
    else {
        return (
          <View style={{ alignItems: 'center', backgroundColor: 'steelblue', flex:1}}>
            <Image source={require('../../assets/icons/chargement.gif')}  style={{width: 100, height: 100, marginTop: height/3}}/>
          </View>
          )
    }
}
else{
  return (
    
    <View style={theme.styles.VueGlobale}>
          <ScrollView>
              <View style={theme.styles.VueEntete}>
                  <Image source={{ uri: product.product.image_front_url }}  style={theme.styles.ImageArticle} />
                  <View style={theme.styles.VueEnteteTexte}>
                    <Text style={theme.styles.TitreArticle}>{ product.product.product_name }</Text>
                    <Text style={theme.styles.TexteArticle}>Code barre : { product.code } </Text>
                    <Text style={theme.styles.TexteArticle}>Marque : { product.product.brand_owner === undefined || product.product.brand_owner == '' ? 'Non renseigné.' : product.product.brand_owner} </Text>
                    <Text style={theme.styles.TexteArticle}>Quantité : { product.product.quantity === undefined || product.product.quantity == '' ? 'Non renseigné.' : product.product.quantity}</Text>
                    <Text style={theme.styles.TexteArticle}>Emballage : { product.product.packaging === undefined || product.product.packaging == '' ? 'Non renseigné.' : product.product.packaging}</Text>
                    <Text style={theme.styles.TexteArticle}>Origine : { product.product.origins === undefined || product.product.origins == '' ? 'Non renseigné.' : product.product.origins} </Text>
                    <Text style={theme.styles.TexteArticle}>Nb ingrédients connus : { product.product.ingredients_n === undefined || product.product.ingredients_n == '' ? 'Non renseigné.' : product.product.ingredients_n}</Text>
                    <Text style={theme.styles.TexteArticle}>Nb ingrédients inconnus : { product.product.unknown_ingredients_n === undefined || product.product.unknown_ingredients_n == '' ? 'Non renseigné.' : product.product.unknown_ingredients_n}</Text>
                    <Text style={theme.styles.TexteArticle}>Nb addititifs : { product.product.additives_n === undefined || product.product.additives_n == '' ? 'Non renseigné.' : product.product.additives_n}</Text>
                  </View>
              </View>
            <View style={theme.styles.VueCollapse}>
                  <CollapsibleView
                      title={<Text style={theme.styles.TitreCollapse}>Score du produit</Text> }
                      style={theme.styles.VueCollapseDetail}
                      arrowStyling={theme.styles.Arrow} >
                      <View  style={theme.styles.TexteCollapse}>
                        <SvgCssUri style={{ width: width-40, height: width-60, margin: 10}} uri={'https://static.openfoodfacts.org/images/attributes/nutriscore-' + (product.product.nutriscore_grade != undefined ? product.product.nutriscore_grade : 'unknown') + '.svg'} />
                        <Text style={theme.styles.Texte}>
                          Pour plus de renseignements rendez-vous sur le site
                          <Text style={theme.styles.TexteURL} onPress={() => Linking.openURL(SiteFrOpenFoodNutriscore)}> {SiteFrOpenFoodNutriscore} </Text>
                        </Text>

                        <SvgCssUri style={{ width: width-40, height: width-60, margin: 10}} uri={'https://static.openfoodfacts.org/images/attributes/nova-group-' + (product.product.nova_group != undefined ? product.product.nova_group : 'unknown') + '.svg'} />
                        <Text style={theme.styles.Texte}>
                          Pour plus de renseignements rendez-vous sur le site
                          <Text style={theme.styles.TexteURL} onPress={() => Linking.openURL(SiteFrOpenFoodNova)}> {SiteFrOpenFoodNova} </Text>
                        </Text>
                      </View>
                  </CollapsibleView>

                  <CollapsibleView
                      title={<Text style={theme.styles.TitreCollapse}>Allergènes</Text> }
                      style={theme.styles.VueCollapseDetail}
                      arrowStyling={theme.styles.Arrow} >
                      <View  style={theme.styles.VueCollapseDetail}>
                        <Text style={theme.styles.TexteCollapse}>{product.product.allergens_tags === undefined || product.product.allergens_tags == '' ? "Non renseigné." : product.product.allergens_tags.map(( item ) =>
                            (
                              "- " + item + "\n"
                            ))
                          }
                        </Text>
                      </View>
                  </CollapsibleView>
     
              <CollapsibleView
                      title={<Text style={theme.styles.TitreCollapse}>Ingredients</Text> }
                      style={theme.styles.VueCollapseDetail}
                      arrowStyling={theme.styles.Arrow} >
                      <View style={theme.styles.VueCollapseDetail}>
                          <Text style={theme.styles.TexteCollapse}>{product.product.ingredients_tags === undefined || product.product.ingredients_tags == '' ? "Non renseigné." : product.product.ingredients_tags.map(( item ) =>
                              (
                                "- " + item + "\n"
                              ))
                            }
                          </Text>
                      </View>
              </CollapsibleView>

              <CollapsibleView
                      title={<Text style={theme.styles.TitreCollapse}>Vitamines</Text> }
                      style={theme.styles.VueCollapseDetail}
                      arrowStyling={theme.styles.Arrow} >
                      <View  style={theme.styles.VueCollapseDetail}>
                        <Text style={theme.styles.TexteCollapse}>{
                            product.product.vitamins_tags  === undefined || product.product.vitamins_tags == '' ? 'Non renseigné.' : product.product.vitamins_tags.map(( item ) =>
                            (
                              "- " + item + "\n"
                            ))
                          }
                        </Text>
                      </View>
              </CollapsibleView>

              <CollapsibleView
                        title={<Text style={theme.styles.TitreCollapse}>Additifs</Text> }
                        style={theme.styles.VueCollapseDetail}
                        arrowStyling={theme.styles.Arrow} >
                        <View  style={theme.styles.VueCollapseDetail}>
                            <Text style={theme.styles.TexteCollapse}>{product.product.additives_tags === undefined || product.product.additives_tags == '' ? "Non renseigné." : product.product.additives_tags.map(( item ) =>
                                (
                                  "- " + item + "\n"
                                ))
                              }
                            </Text>
                        </View>
                </CollapsibleView>

            </View>
          </ScrollView>
        </View>
  )
}
}
