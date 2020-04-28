import React, { useEffect } from 'react';

import {
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { ScrollView, FlatList } from 'react-native-gesture-handler';

import Header from '../components/Header';
import Article from './Article'

import { fetch_start } from './actions';

type Props = {
    items?: [],
    requested?: boolean,
    loading?: boolean,
    reloading?: boolean,
    error?: Object,
    navigation: any,
}

const Prevencion = ({navigation}: Props) => {
  const items = useSelector( state => state.prevencion.items);
  const loading = useSelector( state => state.prevencion.loading);
  const reloading = useSelector( state => state.prevencion.reloading);
  const error = useSelector( state => state.prevencion.error);
  const dispatch = useDispatch();
  
  const isFetching = loading || reloading;

  const { width } = Dimensions.get('window');

  useEffect( () => {
    dispatch(
      fetch_start()
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

      <Header />
      
      <ScrollView style={{
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 0,
        marginBottom: 0,
      }} refreshControl={
        <RefreshControl refreshing={reloading} onRefresh={() => dispatch(fetch_start(true)) } />
      }>

        {
          loading && <ActivityIndicator />
        }


        {
          ! isFetching && items && items.length > 0 && 
          <FlatList style={{
            margin: 10,
          }}
            data={ items } 
            renderItem={ ({ item }) => {
              return <Article key={item.id} 
                item={item} 
                isFetching={isFetching} 
                width={width} 
              />
            }}
          />
        }

      </ScrollView>
      
    </SafeAreaView>
  );
};

Prevencion.navigationOptions = () => ({
  title: 'Prevención',
});

export default Prevencion;