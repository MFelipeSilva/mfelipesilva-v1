import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typeTheme: string, 

    COLORS: {
      BACKGROUND: string,
      BACKGROUNDTWO: string,
      
      COLORTHEME: string,
      PRIMARY: string,
      SECONDARY: string,
      TERTIARY: string,

      TEXTCARD: string,
      COLORCARD: string,
    },

    FONTS: {
      RUBIK: string,
      KARLA: string,
    }
  }
};