import { createGlobalStyle } from 'styled-components';
import { mediaQuery } from './Helpers/mediaQuery'
import { backgroundColor, textColor, textShadow } from './Themes/theme';

export default createGlobalStyle`
    body {
        font-family: "Open Sans", Helvetica, sans-serif, arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        font-size: 18px;
        font-weight: 300;
        line-height: 1.2222222222em;
        text-align: left;
        text-shadow: ${textShadow};            
        background: ${backgroundColor};
        color: ${textColor};
        @media ${mediaQuery.mobile} {    
            margin: 0;
            padding: 0;
            width: 100%;    
        }
    }
`