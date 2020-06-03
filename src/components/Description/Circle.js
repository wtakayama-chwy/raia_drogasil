import styled from 'styled-components';
import { colors } from '../Helpers/colors';

const getColor = color => {
    switch(color) {
        case 'green': return `
            background: ${colors.green}
        `
        case 'gray': return `
            background: ${colors.gray}
        `
        case 'lightred': return `
            background: ${colors.primary}
        `
        case 'lightyellow': return `
            background: ${colors.secondary}
        `
        case 'lightpurple': return `
            background: ${colors.tertiary}
        `
        default: return ``
    }
}

const Circle = styled.span`
    ${({ color }) => getColor(color)};
    width: 15px;
    border-radius: 100%;
    height: 15px;
    display: inline-block;
    margin-bottom: 5px;
    margin-left: 3px;
    
`;

export default Circle;