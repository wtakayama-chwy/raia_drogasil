import styled from 'styled-components';
import { colors } from '../Helpers/colors';
import { mediaQuery } from '../Helpers/mediaQuery';

const getStyle = color => {
    switch (color) {
        case 'desktop': return `
            color: ${colors.green};
        `
        default: return ``
    }
}

const getWeight = weight => {
    switch (weight) {
        case 'bold': return `
            font-weight: bold;
        `
        case 'bolder': return `
            font-weight: 800;
        `
        default: return `
            font-weight: normal;
        `
    }
}

const Title = styled.h2`
    font-size: 3.33em;
    letter-spacing: -0.05em;
    line-height: 1em;
    text-align: center;
    ${({ weight }) => getWeight(weight)};
    ${({ color }) => getStyle(color) };

    @media ${mediaQuery.tabletBig} {
        font-size: 2.6666666667em; /*48px Ã· 18px*/
    }
    @media ${mediaQuery.tablet} {
        font-size: 2.2222222222em;
        color: ${colors.secondary};
    }
    @media ${mediaQuery.mobile} {
        font-size: 1.4444444444em;
		letter-spacing: -0.0769230769230769em;
        margin-bottom: 15px;
        color: ${colors.tertiary};
    }
    @media ${mediaQuery.mobileSmall} {
        font-size: 1.1111111111em;
        margin-bottom: 15px;
        color: ${colors.lightBlue};
    }

    span {
        font-size: 1em;
        font-weight: 300;
        letter-spacing: -0.0333333333em;
        line-height: 1em;
    }
`

export default Title;