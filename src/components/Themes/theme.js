import theme from 'styled-theming';
import { colors } from '../Helpers/colors';
import backImage from '../../assets/background.jpg'

export const backgroundColor = theme('mode', {
    light: `url(${backImage})`,
    dark: `${colors.black}`
});

export const textColor = theme('mode', {
    light: `${colors.gray}`,
    dark: `${colors.white}`
});

export const invertColor = theme('mode', {
    light: `${colors.white}`,
    dark: `${colors.darkGray}`
});

export const textShadow = theme('mode', {
    light: `1px 1px 0px ${colors.white}`,
    dark: '0px'
});

export const buttonBackgroundColor = theme('mode', {
    light: `${colors.black}`,
    dark: `${colors.white}`
});

export const buttonTextColor = theme('mode', {
    light: `${colors.white}`,
    dark: `${colors.black}`
});