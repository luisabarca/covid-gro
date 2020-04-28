import React from 'react';

import {StyleSheet, Linking, Image} from 'react-native';

import {
  Container,
  Header,
  Content,
} from 'native-base';

import {ScrollView} from 'react-native-gesture-handler';
import {DrawerItems} from 'react-navigation-drawer';

import {connect} from 'react-redux';

import logo from '../assets/logos/logo.png';

const SidebarMenu = (props) => {
    
    return (
        <ScrollView>
            <Container>
                <Header style={styles.header}>
                <Image
                    source={logo}
                    resizeMethod="scale"
                    resizeMode="contain"
                    style={{
                    width: '100%',
                    height: '100%',
                    }}
                />
                </Header>

                <Content style={styles.content}>
                    <DrawerItems 
                        {...props} 
                        onItemPress={({route, focused}) => {
                            switch (route.key) {
                                case 'CovidFederal':
                                    Linking.openURL('https://coronavirus.gob.mx/');
                                    break;

                                case 'GuerreroGob':
                                    Linking.openURL('http://guerrero.gob.mx/articulos/covid-19');
                                    break;

                                case 'Privacy':
                                    console.log('Go to manage subscriptions');
                                    Linking.openURL('https://citig.mx/privacidad');
                                    break;
                    
                                case 'Terms':
                                    console.log('Go to manage subscriptions');
                                    Linking.openURL('https://citig.mx/terminos');
                                    break;
                    
                                default:
                                    props.navigation.navigate(route.routeName);
                                    break;
                            }
                        }} 
                    />
                </Content>
            </Container>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    height: 200,
  },
  content: {
    paddingTop: 0,
    marginTop: 0,
  },
});

export default connect()(SidebarMenu);
