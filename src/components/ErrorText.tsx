import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Layout from '../constants/Layout';

export default function ErrorText(props: any) {
    return (
        <Text style={[styles.text, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#EB0000',
        fontFamily: Layout.fontFamily.InterMedium,
        fontSize: Layout.fonts.h6,
        padding: 4,
        paddingBottom: 0,
    }
})