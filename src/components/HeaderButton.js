import React, { Component } from 'react'

import { TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { withNavigation } from 'react-navigation';

class HeaderButton extends Component {
    render() {
        return (
            <TouchableOpacity 
                onPress={() => {
                    console.log('Props', this.props);
                    this.props.navigation.toggleDrawer();
                }} 
                style={{paddingLeft: 10}}
            >

                <Icon name="menu" style={{
                    color: 'black',
                }} />

            </TouchableOpacity>
        )
    }
}

export default withNavigation(HeaderButton);