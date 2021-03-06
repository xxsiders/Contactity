
const tintLight = '#6200ee';

const light: any = {
  dark: false,
  colors: {
    text: '#000',
    background: '#fff',
    tint: tintLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintLight,
    lightGray: '#0000004E',
    border: '#0000004D',
    lightBorder: '#0F4C7533',
    white: '#fff',
    mutedText: '#00000072',
  }
}

const dark: any = {
  dark: true,
  colors: {
    text: '#fff',
    background: '#000',
    tint: tintLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintLight,
    lightGray: '#0000004E',
    border: '#0000004D',
    lightBorder: '#0F4C7533',
    white: '#fff',
    mutedText: '#00000072',
  }
}

export default {
  light,
  dark
};
