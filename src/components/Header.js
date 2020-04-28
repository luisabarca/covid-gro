import React, { Component } from 'react';

import {
  Image,
  View,
  StyleSheet
} from 'react-native';

import {
  Grid,
  Col,
} from 'native-base';

import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

import HeaderButton from './HeaderButton';
import logo from '../assets/logos/logo-horizontal.png'

class Header extends Component {
    render() {
        return (
            <Grid style={styles.grid}>
                <Col style={styles.col_izquierda}>
                    <HeaderButton />
                </Col>
                <Col style={styles.col_centro}>
                    {/* Logo superior */}
                    <View style={ styles.logo_container }>
                    {
                        this.props.showLogo && 
                        <Image
                            resizeMode="contain"
                            source={ logo }
                            style={ styles.logo }
                        />
                    }
                    </View>
                </Col>
                <Col style={styles.col_derecha}>
                    { this.props.rightButton ? this.props.rightButton : null }
                </Col>
            </Grid>
        )
    }
}

Header.propTypes = {
    showLogo: PropTypes.bool,
    rightButton: PropTypes.any,
};


Header.defaultProps = {
    showLogo: true,
}

const styles = StyleSheet.create({
    grid: {
        backgroundColor: 'white',
        height: 89,
        maxHeight: 90,
        flexDirection: 'row',
    },
    col_izquierda: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    col_centro: {
        flex: 4,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    col_derecha: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingRight: 10,
    },
    logo_container: {
        flex: 1,
        minWidth: 100,
        minHeight: 75,
        maxHeight: 75, 
        zIndex: 100,
    },
    logo: {
        flex: 1,
        alignSelf: 'center',
        alignContent: 'center',
        height: 70,
        width: 200,
    },
});

export default withNavigation(Header);