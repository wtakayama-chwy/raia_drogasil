import styled from 'styled-components';
import { colors } from './Helpers/colors';
import { mediaQuery } from './Helpers/mediaQuery';
import { buttonTextColor } from './Themes/theme';

const getStyle = type => {
    switch (type) {
        case 'primary': return `
            background: ${colors.primary}
        `
        case 'secondary': return `
            background: ${colors.secondary}
        `
        case 'tertiary': return `
            background: ${colors.tertiary}
        `
        default: return ``
    }    
}

const getSize = size => {
    switch (size) {
        case 'sm': return `
            height: 27px;
            padding: 0.8em 3.333333333333333%;
        `
        case 'md': return `
            padding: 0.6rem 1.6rem;
        `
        case 'bg': return `
            padding: 0.9rem 2.4rem;
        `
        default: return ``
    }
}

const Button = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    right: 0.3em;
    border: none;
    cursor: pointer;
    color: ${buttonTextColor};
    font-size: 1.1111111111em;
    font-weight: 400;
    letter-spacing: -0.1em;
    text-shadow: none !important;
    text-align: center;
    ${({ type }) => getStyle(type) };
    ${({ size }) => getSize(size) };
    @media ${mediaQuery.tablet} {
        font-size: 1.1111111111em; /* 20px Ã· 18px = 1.1111111111em */
        letter-spacing: -0.1em; /* -2px Ã· 20px = -0.1em */
        height: 22px;
        margin-top: 20px;
        position: absolute;
        width: 50%;
        padding: 2px 3.333333333333333%; /* 4px Ã· 120px */
    }
`;

export default Button;