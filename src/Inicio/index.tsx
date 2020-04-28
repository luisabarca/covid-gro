import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableHighlight,
  Linking,
} from 'react-native';

import {
    Text,
    Container,
    Content,
    Footer,
    Icon,
    Grid,
    Col,
} from 'native-base';

import { ScrollView } from 'react-native-gesture-handler';

import firebase from '@react-native-firebase/app'
import '@react-native-firebase/firestore'

import Header from '../components/Header';
import BotonGigante from '../components/BotonGigante';

const EstadisticaCovid = ({titulo, confirmados, decesos}) => {
  return(
    <>
    <Text style={styles.titulo_estadisticas}>
      {titulo}
    </Text>

    <Grid style={{
      marginBottom: 30,
    }}>
      <Col>
      <Text style={styles.contador}>
        {confirmados}
      </Text>

      <Text style={styles.etiqueta}>
        Confirmados
      </Text>
      </Col>

      <Col>
      <Text style={styles.contador}>
        {decesos}
      </Text>

      <Text style={styles.etiqueta}>
        Decesos
      </Text>
      </Col>
    </Grid>
    </>
  )
}

const EstadisticaMunicipio = ({titulo, confirmados}) => {
  return(
    <View style={styles.contenedor_estadisticas_municipio}>
      <Grid style={{
        marginTop: 10,
        marginBottom: 10,
      }}>
        <Col>
        <Text style={[styles.contador, styles.etiqueta_estadisticas_municipio]}>
          {confirmados}
        </Text>

        <Text style={[styles.etiqueta, styles.etiqueta_estadisticas_municipio]}>
          {titulo}
        </Text>
        </Col>
      </Grid>
    </View>
  )
}

const initialState = {
  estatal_confirmados: "0", 
  estatal_decesos: "0", 
  nacional_confirmados: "0", 
  nacional_decesos: "0",
}

const Inicio = ({navigation}) => {
  var firestore_ref = null;

  const [items, setItems] = useState(initialState)
  const [municipios, setMunicipios] = useState({})

  useEffect(() => {
    firestore_ref = firebase.firestore().collection('home').doc('home_1');

    const subscription = firestore_ref.onSnapshot( (doc) => {
      setItems(doc.data())
    })

    return () => {
      if ( subscription ) {
        subscription();
      }
    }
  }, [])

  useEffect(() => {
    firestore_ref = firebase.firestore().collection('home').doc('home_1');

    const subscription = firestore_ref.collection('municipios').orderBy('nombre', 'asc').onSnapshot( (municipios) => {
      
      const items = municipios.docs.map( (item) => {
        return {
          nombre: item.get('nombre'),
          confirmados: item.get('confirmados'),
        }
      } )
      
      setMunicipios(items)
    });


    return () => {
      if ( subscription ) {
        subscription();
      }
    }
  }, [])

  return(
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Container>
      
      <Header />
      
      <Content>
        <BotonGigante 
          header="Tod@s juntos contra el COVID-19" 
          title="Información" 
          subtitle="De prevención" 
          iconName="clipboard-check-outline" 
          onPress={() => navigation.navigate('Prevencion')} 
        />

        <BotonGigante 
          title="Estamos en:" 
          subtitle="Fase 3"
          iconName="hospital"
          titleStyle={{
            fontSize: 14,
          }}
          containerStyle={{
            height: 64,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: "#ff8500"
          }} 
          buttonStyle={{
            paddingTop: 5,
            paddingBottom: 0,
            backgroundColor: "#ff8500"
          }}
        />

        <View style={styles.contenedor_estadisticas}>
          <View style={{
            padding: 30,
            paddingBottom: 0,
          }}>
            <EstadisticaCovid titulo="Casos a nivel nacional" confirmados={items.nacional_confirmados} decesos={items.nacional_decesos} />
            <EstadisticaCovid titulo="Casos en Guerrero" confirmados={items.estatal_confirmados} decesos={items.estatal_decesos} />
          </View>
        
          <ScrollView horizontal style={{
            flex: 1,
            flexDirection: "row",
            marginTop: -10,
          }}>
            {
              municipios && municipios.length > 0 && 
              municipios.map( (municipio) => {
                return <EstadisticaMunicipio key={municipio.nombre} titulo={municipio.nombre} confirmados={municipio.confirmados} />
              })
            }
          </ScrollView>
        </View>

      </Content>

      <Footer style={{
        backgroundColor: '#ff1744',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}>
        <TouchableHighlight onPress={() => {
          Linking.openURL("tel://8007725834")
        }}>
          <View style={{
            flexDirection: "row",
          }}>
            <Icon name="phone-in-talk" type="MaterialCommunityIcons" style={{
              color: "white",
            }} />
            <Text style={{
              paddingLeft: 10,
              fontSize: 24,
              fontWeight: "700",
              color: "white",
            }}>
              COVITEL 800 772 5834
            </Text>
          </View>
        </TouchableHighlight>
      </Footer>
      
    </Container>
    </SafeAreaView>
  )
}

Inicio.navigationOptions = {
    title: 'Inicio',
};

const styles = StyleSheet.create({
  contenedor_primario: {
    flex: 1,
    minHeight: 90,
    backgroundColor: "#003366",
    padding: 20,
    zIndex: 990,
  },
  contenedor_estadisticas: {
    flex: 1,
    backgroundColor: "#e3f2fd",
    paddingTop: 0,
    paddingBottom: 10,
    zIndex: 10,
  },
  contenedor_estadisticas_municipio: {
    minWidth: 180,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderRadius: 5,
    backgroundColor: "#336699",
    flex: 1,
    margin: 2,
    marginBottom: 15,
  },
  etiqueta_estadisticas_municipio: {
    color: "white",
  },
  contenedor_boton_personalizado: {
    backgroundColor: "#336699",
    padding: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 9999,
    borderRadius: 5,
  },
  texto_grande_boton: {
    fontSize: 36,
    textAlign: "left",
    color: "white",
    textTransform: "uppercase",
  },
  titulo_estadisticas: {
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    marginBottom: 10,
    color: "#000",
  },
  contador: {
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    color: "#444",
  },
  etiqueta: {
    fontSize: 14,
    textAlign: "center",
    color: "#444",
  },
});

export default Inicio;