import styled from 'styled-components';
import { mediaQuery } from '../Helpers/mediaQuery';
import { colors } from '../Helpers/colors';

const CardWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    width: 95%;
    height: 350px;    
    padding: 2.5%;
    @media ${mediaQuery.desktop} {
        height: 23em;
    }
    @media ${mediaQuery.tabletBig} {
        height: 425px;
        padding: 3.125%; /* 30px Ã· 960px */
        width: 93.75%; /* 100% (960px) - 6.25% de padding (direita e esquerda) = 92.1875%*/
    }
    @media ${mediaQuery.tablet} {
        background-color: ${colors.secondary};
		height: 380px;
		padding: 3.90625%; /* 30px Ã· 768px = 0.025 x 100 = 2.5%*/
		width: 92.1875%; /* 100% (768px) - 7.8125% de padding (direita e esquerda) = 92.1875%*/
    }
    @media ${mediaQuery.mobile} {
        background-color: ${colors.tertiary};
        margin: 0;
        padding: 0;
        width: 100vw;
        display: block;
    }
`

export default CardWrapper;