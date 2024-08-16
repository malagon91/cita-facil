import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: {
        // styles for the `body`
        body: {
            bg: 'body',
            color: '#333535',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
        },
        // styles for `a`
        a: {
            color: 'primary.500',
            _hover: {
                textDecoration: 'underline'
            }
        },
        // styles for MantineTable
        '.mantine-Paper-root': {
            boxShadow: 'none',
            border: '0!important',
            '.mantine-Indicator-root': {
                marginLeft: '6px',
            },
            '.mantine-TableBodyCell-DetailPanel': {
                padding: '0!important'
            },
            th: {
                textTransform: 'uppercase',
                fontSize: '10px!important',
            },
            td: {
                fontSize: '13px!important',
            },
            '&>div:nth-child(2)': {
                paddingBottom: '20px'
            },
            '&>div:nth-child(3)': {
                display: 'none'
            },
            '.header-fixed': {
                tbody: {
                    overflowY: 'scroll',
                    display: 'block',
                    tr: {
                        display: 'table',
                        width: '100%',
                        tableLayout: 'fixed',
                    },
                },
                thead: {
                    display: 'table',
                    width: '100%',
                    tableLayout: 'fixed'
                },
            },
            '.mantine-Text-root': {
                maxWidth: '100%',
            },
        },
        '.mantine-UnstyledButton-root': {
            color: '#339dd7',
        },
    }
};

const colors = {
    primary: {
        50: '#fbe9eb',
        100: '#f4c8cd',
        200: '#ec9aa3',
        300: '#e36c79',
        400: '#db4958',
        500: '#a02334', // base color
        600: '#8e1f2f',
        700: '#7b1a28',
        800: '#681522',
        900: '#56111b'
    },
    secondary: {
        50: '#fff4e6',
        100: '#ffe4bf',
        200: '#ffd199',
        300: '#ffbd73',
        400: '#ffad60',
        500: '#e6954d',
        600: '#cc7d3a',
        700: '#b36626',
        800: '#994f13',
        900: '#803800'
    },
    black: '#101010',
    gray: {
        50: '#fafafa',
        100: '#f1f1f1',
        200: '#e7e7e7',
        300: '#d4d4d4',
        400: '#adadad',
        500: '#7f7f7f',
        600: '#545454',
        700: '#373737',
        800: '#202020',
        900: '#191919'
    },
    body: '#fbfbfb',
    white: '#FFFFFF',
}

const CustomTheme = extendTheme({ colors, styles });

export default CustomTheme;
