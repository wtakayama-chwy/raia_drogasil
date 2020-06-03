import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Assets
import logoDrogaRaia from '../../assets/logo_drogaraia.png';
import logoDrograsil from '../../assets/logo_drogasil.png';
import logoFarmasil from '../../assets/logo_farmasil.png';
import logoUnivers from '../../assets/logo_univers.png';
import logo4bio from '../../assets/logo_4bio.png';
import logoRaiaDrograsil from '../../assets/logo_small.png';
// Helpers
import { mediaQuery } from '../Helpers/mediaQuery';

const StyledFooter = styled.footer`
    display: block;
    clear: both;
    height: 50px;
    padding: 10px 0;
    width: 100%;
    small {
        float: left;
        margin-left: 2.5%;
        font-size: 80%;

        @media ${mediaQuery.mobile} {
            float:none;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        :last-child {
            float: right;
            @media ${mediaQuery.mobile} {
                float: none;
            }
        }
        p {
            font-weight: 300;
            letter-spacing: -0.05555555556em;
        }
    }

    ul {
        list-style: none;
        margin: 8px 0 0 30px;
        float: left;
        
        li {
            display: inline-block;
            margin-left: 5px;
            a {
                img {
                    max-width: 100%;
                }
            }            
        }
    }    
    figure {
        width: 100%;
        margin: 10px 0 0;   
        @media ${mediaQuery.mobile} {
            width: inherit;
        }     
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <small><p>RD 2017. Todos os direitos reservados</p></small>
            <ul>
                <li>
                    <Link to="https://www.drogaraia.com.br/">
                        <img src={logoDrogaRaia} alt="Droga Raia"/>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.drogasil.com.br/">
                        <img src={logoDrograsil} alt="Drogasil"/>
                    </Link>
                </li>
                <li>
                    <Link to="http://www.farmasil.com.br/">
                        <img src={logoFarmasil} alt="Farmasil"/>
                    </Link>
                </li>
                <li>
                    <Link to="https://univers-pbm.com.br/beneficioMedicamentos/">
                        <img src={logoUnivers} alt="Univers"/>
                    </Link>
                </li>
                <li>
                    <Link to="http://www.4bio.com.br/">
                        <img src={logo4bio} alt="4bio"/>
                    </Link>
                </li>
            </ul>
            <small>
                <figure>
                    <Link to="http://www.carloshps.com.br/blog">
                        <img src={logoRaiaDrograsil} alt="Raia Drogasil"/>
                    </Link>
                </figure>
            </small>
        </StyledFooter>
    )
}

export default Footer;