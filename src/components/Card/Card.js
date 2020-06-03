import React from 'react';
import styled, { withTheme } from 'styled-components';
// Components & Helpers
import { colors } from '../Helpers/colors';
import { mediaQuery } from '../Helpers/mediaQuery';
import CardWrapper from './CardWrapper';
import Button from '../Button';
// Assets
import imgDesktop from '../../assets/desktop-responsive-design.png';
import imgTablet from '../../assets/tablets-responsive-design.png';
import imgMobile from '../../assets/mobile-responsive-design.png';

import { useTheme } from '../Themes/ThemeContext';
import { invertColor } from '../Themes/theme'; 


const getStyle = type => {
    switch (type) {
        case 'desktop': return `
            background: ${colors.primary}
        `
        case 'tablet': return `
            background: ${colors.secondary}
        `
        case 'mobile': return `
            background: ${colors.tertiary}
        `
        default: return ``
    }
}

const StyledCard = styled.div`
    position: relative;
    height: 14em;
    float: left;
    width: 31.57894736842105%;
    text-align: center;        
    ${({ type }) => getStyle(type)};
    
    @media ${mediaQuery.tabletBig} {
        width: 31.45833333333333%; /* 302px Ã· 960px */
    }
    @media ${mediaQuery.tablet} {
        width: 31.25%; /* 240px Ã· 768px */
    }
    @media ${mediaQuery.mobile} {
        float: none;
		height: 160px;
		width: 100%;
    }
    @media ${mediaQuery.mobileSmall} {
        float: none;
		height: 160px;
		width: 100%;
    }
    figure {
        margin: 15px auto 0px auto;
        width: 69.44444444444444%;
        
        @media ${mediaQuery.tabletBig} {
            width: 66.22516556291391%; /* 200px Ã· 302px %*/
        }
        @media ${mediaQuery.tablet} {
            width: 62.25%; /* 150px Ã· 240px %*/
        }
        @media ${mediaQuery.mobile} {
            float: left;
            height: 160px;
            margin: 0;
            padding: 0;
            width: 53.125%; /*255px Ã· 480px*/
        }
        @media ${mediaQuery.mobileSmall} {
            float: left;
		    width: 100%;
        }
        img {
            max-width: 100%;
            border: 0;
            height: 125px;
            @media ${mediaQuery.tabletBig} {
                height: 100px;
            }
            @media ${mediaQuery.tablet} {
                height: 80px;
            }
            @media ${mediaQuery.mobile} {
                height: 125px;
                margin-top: 15px;
                width: 86.2745098040%; /*220px Ã· 255px*/
            }
        }
    }

    h3 {
        font-size: 1.77777777778em;
        color: white;
        letter-spacing: -0.0625em;
        margin-bottom: 0.3em;
        text-shadow: none;
        font-weight: 300;
        line-height: 1.1875em;
        @media ${mediaQuery.desktop} {
            font-size: 1.55555555556em;
        }
        @media ${mediaQuery.tabletBig} {
            font-size: 1.6666666667em; /*30px Ã· 18px*/
        }
        @media ${mediaQuery.tablet} {
            font-size: 1.6666666667em; /*30px Ã· 18px*/
        }
        @media ${mediaQuery.mobile} {
            float: left;
            margin-top: 40px;
            width: 46.875%; /*225px Ã· 480px*/
        }
        @media ${mediaQuery.mobileSmall} {
            display: none;
        } 
    }
    p {
        position: relative;
        max-width: 100%;
        height: 112px;
        /* height: 170px; */
        background-color: ${invertColor};
        float: inherit;
        padding: 1.9444444444444445%;
        text-align: justify;
        font-weight: 300;
        letter-spacing: -0.05555555556em;
        strong {
            font-weight: 700;
        }
        @media ${mediaQuery.desktop} {
            height: 170px;
		    /* top: 217px; */
        }
        @media ${mediaQuery.tabletBig} {
            font-size: 0.8333333333em; /*15px Ã· 18px*/
			/* top: 230px; */
        }
        @media ${mediaQuery.tablet} {
            font-size: 0.7777777778em; /*14px Ã· 18px*/
			height: 140px;
			line-height: 1.1428571428em; /*16px Ã· 14px*/
			padding: 2.9166666667%; /* 7px Ã· 240px */
			/* top: 215px; */
        }
        @media ${mediaQuery.mobile} {
            display: none; /*oculta o parÃ¡grafo*/
        }
        @media ${mediaQuery.mobileSmall} {
            display: none; /*oculta o parÃ¡grafo*/
        }
    }
    
`

const Card = (props) => {    

    const themeToggle = useTheme();

    return (
        <CardWrapper>
            <StyledCard type="desktop">
                <figure>
                    <img src={imgDesktop} alt="" />
                </figure>
                <h3>Site Responsivo DESKTOP</h3>
                <p>
                    Quando pressionado o botão
                    <strong> Leia mais... </strong>
                    o restante da informação deverá aparecer em scroll down.
                    <Button type="primary" size="sm">Leia mais...</Button>
                    {/* <Button type="secondary" size="sm">Leia mais...</Button>
                    <Button type="tertiary" size="sm">alterar tema</Button> */}
                </p>
            </StyledCard>
            <StyledCard type="tablet">
                <figure>
                    <img src={imgTablet} alt="" />
                </figure>
                <h3>Site Responsivo TABLET</h3>
                <p>
                    Quando pressionado o botão
                <strong> Leia mais... </strong>
                informação deverá aparecer completa em um popup na tela.
                <Button type="secondary" size="sm">Leia mais...</Button>
                </p>
            </StyledCard>
            <StyledCard type="mobile">
                <figure>
                    <img src={imgMobile} alt="" />
                </figure>
                <h3>Site Responsivo MOBILE</h3>
                <p>
                    Quando pressionado o botão
                <strong> alterar tema </strong>
                modifique o tema do site para blackfriday a seu gosto.
                <Button 
                    onClick={() => themeToggle.toggle()} 
                    type="tertiary" size="sm"
                >alterar tema
                    {props.theme.mode === 'dark' ? "" : ""}
                </Button>
                </p>
            </StyledCard>
        </CardWrapper>          
    )
}

export default withTheme(Card);