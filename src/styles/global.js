import {
    StyleSheet,
    Platform,
  } from 'react-native';

export const segmentStyles = StyleSheet.create({
    container: {
      ...Platform.select({
        ios: {},
        android: {
          marginTop: 5,
        }
      })
    },
    button: {
      ...Platform.select({
        ios: {},
        android: {
          borderColor: 'rgb(14, 116, 251)',
        }
      })
    },
    button_active: {
      ...Platform.select({
        ios: {},
        android: {
          backgroundColor: 'rgb(14, 116, 251)',
        }
      })
    },
    button_first: {
      flex: 1,
      marginLeft: 5,
      ...Platform.select({
        ios: {},
        android: {
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }
      })
    },
    button_last: {
      flex: 1,
      marginRight: 5,
      ...Platform.select({
        ios: {},
        android: {
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }
      })
    },
    button_text: {
      ...Platform.select({
        ios: {},
        android: {
          color: 'rgb(14, 116, 251)',
          fontWeight: '100',
          fontSize: 10,
        }
      })
    },
    button_text_active: {
      ...Platform.select({
        ios: {},
        android: {
          color: 'white',
          fontWeight: '100',
        }
      })
    },
  });