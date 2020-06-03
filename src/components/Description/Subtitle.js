import styled from 'styled-components';
import { mediaQuery } from '../Helpers/mediaQuery';

const Subtitle = styled.h3`
    font-size: 1.7777777778em;
    /* font-size: 1.66666666667em; */
    margin: 0 auto;
    width: 75%;
    font-weight: 300;
    letter-spacing: -0.0625em;
    line-height: 1.1875em;

    @media ${mediaQuery.desktop} {
        font-size: 1.66666666667em;
    }
    @media ${mediaQuery.tabletBig} {
        font-size: 1.5em;
        width: 88.54166666666667%;
    }
    @media ${mediaQuery.tablet} {
        font-size: 1.1111111111em;
    }
    @media ${mediaQuery.mobile} {
        font-size: 0.7777777778em;
    }
    @media ${mediaQuery.mobileSmall} {
        font-size: 0.7777777778em;
    }
`

export default Subtitle;