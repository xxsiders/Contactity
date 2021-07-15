import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export default function LoadingView() {
    return (
        <View style={styles.container}>
            <ActivityIndicator color='#0F4C75' size='large' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})