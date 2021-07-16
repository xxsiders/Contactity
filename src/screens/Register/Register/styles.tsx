import { useTheme } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import Layout from '../../../constants/Layout';

const styles = () => {
    const { colors } = useTheme()
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        scrollContainer: {
            flex: 1,
        },
        contentContainer: {
            flex: 1,
            paddingHorizontal: '5%',
            marginTop: 50
        },
        title: {
            fontFamily: Layout.fontFamily.InterBold,
            fontSize: Layout.fonts.h1,
            color: colors.text,
            marginVertical: 10,
        },
        input: {
            fontFamily: Layout.fontFamily.InterRegular,
            fontSize: Layout.fonts.h5,
            height: 50,
            marginTop: 12,
            color: colors.text,
        },
        loginContainer: {
            height: 50,
            backgroundColor: colors.tint,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            marginTop: 25
        },
        loginText: {
            fontFamily: Layout.fontFamily.InterMedium,
            fontSize: Layout.fonts.h4,
            color: colors.white,
        },
    })
}

export default styles