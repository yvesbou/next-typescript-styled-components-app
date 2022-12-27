import { builtinModules } from 'module';
import { DefaultTheme } from 'styled-components';

const standardTheme: DefaultTheme = {
    colors: {
        primary: '#1B1938',
        secondary: '#090B1A',
        text: '#FFFFFF',
        accent: '#AA5CDB',
    },
    screenWidth: {
        mobile: '300x',
        tablet: '768px',
        desktop: '1024px'
    },
    typography: {
        smallHeader: '2rem',
        biggerText: '1.4rem',
        body: '0.7rem'
    },
    font: {
        main: {
            name: 'Inter',
        },
        other: {
            name: 'Lexend Deca',
        },
        weight: {
            normal: 400,
            bold: 700
        }
    }
}

export default standardTheme;