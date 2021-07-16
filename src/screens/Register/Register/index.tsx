import React from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-paper';
import ErrorText from '../../../components/ErrorText';
import theme from './styles';

export default function index(props: any) {
    const styles = theme()
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.scrollContainer} showsVerticalScrollIndicator={false} extraScrollHeight={100} keyboardShouldPersistTaps='handled' enableOnAndroid={true} enableAutomaticScroll>
                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>Sign up</Text>
                        <TextInput
                            autoCapitalize='none'
                            onChangeText={props.handleChange('username')}
                            onBlur={props.handleBlur('username')}
                            value={props.values.username}
                            style={styles.input} label='Username' mode='outlined' />
                        {props.touched.username ? <ErrorText>{props.errors.username}</ErrorText> : <ErrorText />}
                        <TextInput
                            onChangeText={props.handleChange('password')}
                            onBlur={props.handleBlur('password')}
                            value={props.values.password}
                            style={styles.input} secureTextEntry label='Password' mode='outlined' />
                        {props.touched.password ? <ErrorText>{props.errors.password}</ErrorText> : <ErrorText />}

                        <TouchableOpacity onPress={props.handleSubmit} style={styles.loginContainer}>
                            {props.loading ? <ActivityIndicator color='#fff' /> : <Text style={styles.loginText}>Sign up</Text>}
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    )
}

