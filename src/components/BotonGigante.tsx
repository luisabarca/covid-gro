import React, {PureComponent} from 'react';

import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Icon} from 'native-base';

type Props = {
  title: string,
  subtitle: string,
  header: string,
  iconName: string, 
  containerStyle: {},
  buttonStyle: {},
  titleStyle: {},
  textStyle: {},
  onPress: () => void | null,  
}

const BotonGigante = ({
  title = "Título",
  subtitle = "",
  header = "",
  iconName = "", 
  containerStyle = {},
  buttonStyle = {},
  titleStyle = {},
  textStyle = {},
  onPress,
}: Props) => {
  return (
    <View style={[styles.contenedor, containerStyle]}>
      {
        1 < header.length && 
        <Text style={styles.header}>
          {header}
        </Text>
      }

      <TouchableHighlight onPress={onPress} disabled={onPress == null}>
        <View style={[styles.contenedor_boton, buttonStyle]}>
          {
            1 < iconName.length && 
            <Icon
              name={iconName}
              type="MaterialCommunityIcons"
              style={styles.icon}
            />
          }
          <View style={{ marginLeft: 10 }}>
            <Text style={[styles.texto_boton, textStyle, titleStyle]}>{title}</Text>
            {
              subtitle.length > 0 && 
              <Text style={[styles.texto_boton, textStyle]}>{subtitle}</Text>
            }
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    minHeight: 90,
    backgroundColor: '#003366',
    padding: 20,
    zIndex: 990,
  },
  header: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  contenedor_boton: {
    backgroundColor: '#336699',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 9999,
    borderRadius: 5,
  },
  texto_boton: {
    fontSize: 28,
    textAlign: 'left',
    color: 'white',
    textTransform: 'uppercase',
  },
  icon: {
    fontSize: 64,
    color: 'white',
  },
});

export default BotonGigante;
