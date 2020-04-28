import React, {Component} from 'react';
import {
  StyleSheet, 
  Image,
  Text, 
  View,
  Linking,
  SafeAreaView,
  Platform,
} from 'react-native';

import { 
  Container, 
  Content,
  Icon,
} from 'native-base';

import { 
  FlatList, 
  TouchableWithoutFeedback, 
  TouchableHighlight,
} from 'react-native-gesture-handler';

import Header from '../components/Header';

import mainImage from '../assets/logos/logo-citig.png';

const contactMethods = [
  {
    key: '1',
    type: 'envelope-square',
    text: 'contacto@citig.mx',
    note: '',
    url: 'mailto:contacto@citig.mx',
  },
  {
    key: '2',
    type: 'globe',
    text: 'citig.mx',
    note: '',
    url: 'http://citig.mx/?utm_source=CovidGroApp&utm_medium=phone',
  },
];

export default class ContactScreen extends Component {


  static navigationOptions = {
    drawerLabel: 'Contacto',
  };

  buildContactItem = ({item}) => {
    return (
      <TouchableHighlight underlayColor="rgba(149, 190, 22, 0.2)"  onPress={ () => {
        Linking.openURL(item.url);
      }}>
        <View key={item.key} style={{
          flex: 1,
          flexDirection: 'row',
          padding: 6,
          marginTop: 4,
          marginBottom: 4,
        }}>
          <Icon name={item.type} type="FontAwesome" />
          <Text style={{
            paddingTop: 4,
            paddingLeft: 10,
          }}>{item.text}</Text>
          {/* {
            item.note.length > 0 ? <Text style={{fontSize: 11, flex: 1}}>{item.note}</Text> : null
          } */}
        </View>
      </TouchableHighlight>
    )
  }

  gotoWebsite = () => {
      console.log('Cliekd on gotoWebsite');
      Linking.openURL('http://citig.mx/?utm_source=CovidGroApp&utm_medium=phone');
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Container>
          <Header showLogo={false} />
          
          <Content scrollEnabled={true}>
            <View style={{
              padding: 20,
              paddingTop: 0,
            }}>
              <TouchableWithoutFeedback onPress={ this.gotoWebsite } style={{
                  alignContent: 'center',
                  alignItems: 'center',
              }}>
                <Image style={styles.main_image} resizeMode="contain" source={mainImage} />
              </TouchableWithoutFeedback>
            </View>

            <View style={{
              padding: 15, 
              flex: 10,
            }}>
              <Text style={{
                fontSize: 16,
                lineHeight: 20,
                paddingBottom: 15,
                textAlign: 'justify',
              }}>
                El Colegio de Ingenieros en TIC del Estado de Guerrero somos una Asociación Civil (no lucrativa) formada por profesionistas expertos en Tecnologías de la Información y la Comunicación (TIC) interesados en agruparse para trabajar en beneficio de su profesión y de la sociedad.
              </Text>

              <Text style={{
                fontSize: 13,
                marginTop: 20,
                marginBottom: 5,
                fontWeight: '700',
              }}>Encuentranos en:</Text>

              <FlatList scrollEnabled={false}
              data={contactMethods} 
              renderItem={ this.buildContactItem }>
              </FlatList>
              
            </View>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    main_image: {
      height: 130,
      width: '80%',
      alignSelf: 'center',
      ...Platform.select({
        ios: {
          shadowColor: "#fff",
          shadowOffset: {
              width: 0,
              height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 0.5,
        },
        android: {
          elevation: 1,
        }
    }),
    },
});