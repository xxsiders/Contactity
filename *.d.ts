import '@react-navigation/native';

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
    export type ExtendedTheme = {
        dark: boolean;
        colors: {
            text: string;
            background: string;
            tint: string;
            tabIconDefault: string;
            tabIconSelected: string;
            lightGray: string;
            border: string;
            lightBorder: string;
            white: string;
            mutedText: string;
        };
    };
    export function useTheme(): ExtendedTheme;
}
