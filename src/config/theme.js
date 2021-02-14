import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')
export const DEFAULT_COLOR = "#00202B"
export const TEXT_COLOR = "white"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULT_COLOR,
    padding: 20,
  },
  tabBar: {
    backgroundColor: '#FFCC00',
    paddingTop: 5
  },
  scanTab: {
    backgroundColor: '#FFCC00',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarLabel: {
    paddingVertical: 5,
    fontWeight: '700'
  },
  VueCollapse: {
    width: '100%',
    height: '100%',
    backgroundColor: 'steelblue',
    borderWidth: 0
  },
  VueEntete: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#FFCC00',
    borderWidth: 1
  },
  VueCollapseDetail: {
    borderWidth: 0,
    margin: 10,
    padding: 5,
    borderWidth: 0
  },
  VueEnteteTexte: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding:15,
     borderWidth: 0
  },
  VueGlobale: {
    flex: 1,
    backgroundColor: 'steelblue',
    borderWidth: 0
  },
  TitreArticle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    color: 'black'
  },
  TexteArticle: {
   fontSize: 12,
   },
 ImageArticle: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
    margin: 5
  },
  TitreCollapse: {
    color: 'white',
    textAlign:'left',
    fontSize: 15,
    fontWeight: 'bold'
  },
  TexteCollapse :{
   backgroundColor: 'skyblue',
    borderWidth: 1,
    padding: 5,
    color: 'black'
  },
  Arrow   :{
    color: 'white'
  },
  containerScan: {
    flex: 1
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  button: {
    alignSelf: 'flex-end',
    marginLeft: 5,
    marginBottom: 15
  },
  buttonTorche: {
    alignSelf: 'flex-end',
    marginRight: width/2,
    marginBottom: 15
  },
  text: {
    fontSize: 18,
    color: 'white'
  },
  containerInfo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding : 10,
    borderWidth: 0,
},
containerInfo2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    padding : 5
},
Texte: {
    fontSize: 15,
    marginLeft: 5,
    width : 250,
    color :'white'
},
Texte1: {
    fontSize: 15,
    marginLeft: 5,
    color :'white'
},
TexteURL: {
    fontSize: 15,
    color :'gold'

},
ImageInfo1: {
    width: 100,
    height: 100,
    backgroundColor: 'powderblue',
    borderWidth: 0
},
ImageInfo2: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
    borderWidth: 0
},
ImageInfo3: {
    width: 100,
    height: 100,
    backgroundColor: '#2eb8ff',
    borderWidth: 0
},
ImageInfo4: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
},
containerHome: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'steelblue'    
},
ImageHome1: {
  width: 200,
  height: 200,
  backgroundColor: 'powderblue',
  borderWidth: 1
},
ImageHome2: {
  width: 200,
  height: 200,
backgroundColor: 'skyblue',
  borderWidth: 1
},
ImageHome3: {
  width: 200,
  height: 200,
  backgroundColor: '#2eb8ff',
  borderWidth: 1
}
})