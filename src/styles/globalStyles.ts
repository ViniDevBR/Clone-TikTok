import { createGlobalStyle } from 'styled-components'

import ProximaNovaThin from '../assets/Fonts/proximanova-thin.otf'
import ProximaNovaLight from '../assets/Fonts/proximanova-light.otf'
import ProximaNovaRegular from '../assets/Fonts/proximanova-regular.otf'
import ProximaNovaMedium from '../assets/Fonts/proximanova-medium.otf'
import ProximaNovaSemiBold from '../assets/Fonts/proximanova-semibold.otf'
import ProximaNovaBold from '../assets/Fonts/proximanova-bold.otf'
import ProximaNovaExtraBold from '../assets/Fonts/proximanova-extrabold.otf'
import ProximaNovaBlack from '../assets/Fonts/proximanova-black.otf'


export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'ProximaNova';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${ProximaNovaRegular}') format('otf'),
  }
  @font-face {
    font-family: 'ProximaNova';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${ProximaNovaMedium}') format('otf'),
  }
  @font-face {
    font-family: 'ProximaNova';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${ProximaNovaSemiBold}') format('otf'),
  }

   *, *::after, *::before {
    font-family: ProximaNova, sans-serif;
    font-size: 62.5%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #FFFFFF14;
    border-radius: 20px;
  }

  body {
    background-color: #121212;
    color: #FFFFFF;
  }
`