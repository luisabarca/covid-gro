import React, { memo } from 'react'

import {
    View,
    ActivityIndicator,
} from 'react-native';

const Loading = () => {
    return(
        <View style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000000,
        }}>
          <ActivityIndicator size="large" color="white" />
        </View>
    )
}

export default Loading;