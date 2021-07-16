import { Dimensions, I18nManager } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const RTL = I18nManager.isRTL

export default {
  isRTL: RTL,
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  fonts: {
    h1: 32,
    h2: 24,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,
    p: 10
  },
  fontFamily: {
    InterRegular: 'InterRegular',
    InterMedium: 'InterMedium',
    InterBold: 'InterBold',
  },
  styles: {
    flexDirection: RTL ? 'row-reverse' : 'row' as any,
    alignItems: !RTL ? 'flex-start' : "flex-end" as any,
  }
};
