import React, {Component} from 'react';
import { Image,Dimensions} from 'react-native';
import { SvgXml } from 'react-native-svg';
import Svg, {Path,Circle, Rect,Defs,Filter,FeBlend,FeComposite,FeGaussianBlur,FeFlood,G,ClipPath,SvgUri} from 'react-native-svg';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

  const Google_icon = ()=>{
    const xml = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="20" height="20" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_13_233" transform="scale(0.03125)"/>
    </pattern>
    <image id="image0_13_233" width="32" height="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARBSURBVFiFzZdbbBRVHMZ/58zutiClN6ClIELblHu8QBMUFCOV0lRMfJAmigZ9IRrRBzAmJpBSJEQNxheNvPCAYmKICZfSQCGFSNMHAQ2JbUoL1EIvUFtYoLS0u3P+PrAts8vMblsg+iWT7Dn/73zfN3P2nDkD/zHUaMiyaJGf7NtLUBQikg8qva0/XKgVNzW0Wxb7J6de+kntY/CRBpDSglyQTaDWAJnOWnNvCHG0LTDJlmrw+9T6rOqLdQ8VQN6cP4G+0A5gPeB348QGcAqPt9RfPp9akV19scvLQ3ual85dQF/oHPCRl3k8CHDHlgV9IbnStSKvbFQBpGT2UrBPAbmjNY5FyEig18ieEQeQ1QVz0HIQSHtY8yGMs9QBr1rUf0BK8pPQ+g9gXhy9OkT2YEkt/aYtGJA027aeCYfMmrtQOmBLqpOc4tf7c45ffMNLzBfVyhvYQMs4L/MeUO+rw+cPxvTfBFqBAwDXivI29YZlR1jEl8gcHE9AzjOJMC00TLjA3uzxhHSBg1ePrV9TRxr/jic2nKh4esbdUPLirJoL1Ym49wPUsxXYAoDBpibzN45lLkAYh6ZQHWpqHIn5mCH1NEs9EnWd0UHZmuW5hB4FVMQ8H2h2qXfQz0y1mNDjCuCLxFjsup0JuxOZp5W3pAVM4HOUSo3Hc0KJGgjb4S97tj/Z7osYzfLg1iYSC5D0CvCp6w14QBB82uoCvtCRHvdNx6IjoZhR1sitHdAqC4Z2QkXYlWQYm/gIICKWM0DQg/fU4wqguOc5NAXnPXhFiYRE5BKMfpUYkQv3AyhOe/DelUZS4gl1b8s569OkDQyGMmIvpXUW0OY2TlnmzD3roTup53eg0Em6i25a1/nsrl+Kzn4z0jtzYsqWzg9AvncptXZVTJ0FSpyv4x+Hw0DPd8GZJ2a0FOUe65/0VWZlccKpiEX25s75IF+71RT8DEoivyOmLSTLHZpOD6a2vXP1ubnddsC5NLuVSFnP69U1IzGfsrntaZQ+CmS5lPtF+3L/KZ9yNSoAwMLDy99rN8m7PXRthAp/kuy8Vlx9x40wY++y9Nu9yzb62z/eCCR76GzrqsjZMtSIPpQKKqNy1RGQlR6DAXoQ9atoTolRV9TtgYViyxwlstwMmnmAClz7NqgGs9Ndxv45Wd9YUl8+f/jY/sCpeOKR4gxfiDpgdpwQwzCd/UjMNqwDae3+lh+mRfeqDsuWFzq357RGcWMFb606el2wVwJjfv+bUHCaSam97Ohq1ZpXY81dAwDcWH38ctjPUpCqMSUQCGfuSgcQ4aQJ+5+/Wj61wY0a/8tIUBmVxeuACmC6G8VtCgDQGKuv7LPrn3y4c2jJjT5ABDNPvJx8qzdprULWCupFHE/ugQB+dQu/VfWEZTZ0vHWyO5H2qD5OATKqSiZqYxYZIV8gXYKDL4G6oTXnDOwLvl3zwDz/r/EvM/OuWFzHrR4AAAAASUVORK5CYII="/>
    </defs>
    </svg>    
    `
      return(
      <SvgXml xml={xml}  />
  
    )}
const Facebook_icon = ()=>{
    const xml = `
    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.34452 10.6103L9.86411 7.19464H6.6187V4.98215C6.6187 4.04547 7.07434 3.1411 8.52118 3.1411H9.99201V0.234169C9.99201 0.234169 8.65707 0 7.3781 0C4.71623 0 2.96563 1.63111 2.96563 4.59456V7.19464H0V10.6103H2.96563V18.8627C3.55715 18.9596 4.17266 19.0081 4.78817 19.0081C5.41167 19.0081 6.01919 18.9596 6.61071 18.8627V10.6103H9.34452Z" fill="#3B5998"/>
    </svg>   
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Apple_icon = ()=>{
    const xml = `
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="19" height="19" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_13_297" transform="scale(0.03125)"/>
    </pattern>
    <image id="image0_13_297" width="32" height="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAATcwAAE3MBK5fYhAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH1SURBVFiFtdc7aBZBEAfw3ybGV4jis7BR0oiNIoLWwcrCTgnaibVgYykGe8HKykIsAoKISrCIjZ2VRdDCF4KFDwKGEBRiEM/iLnrfsV72+7I3MHC3ezP//87szs4pikIuxV5cxnOcTrHZIJOEECZwD3uqoQ9JhplWfga/UFT6G1uSbDOA78J8DbzAdLJ9BgI3G+BL2JdqP5Qh/cdrzz9wriiKz8nWGSLwTZnzlzjWt30iSMAO7EeojQ9jAttqYzsxjqPYvi4ClfNHenf4PO5ichUAh3GtikJ9PyzjAc5iJJkANuJ2w1lMV/Al4bsCM9i0JoEq3E8Snfars00SsVNwCafiW3bd8l4ZtX/SWP0oFhNWMojeUtvA0RTgYkfg92PgMQIzHRE4kXQMqxzlBv+aVIpDCMM4IL8stE3WT8GIsrLllp9tk6EKvRBCwHdszUxgWVkxV2KTfyNQlEzeZgaHzXpvzDiBSt50QACmUgm86ojAyRDC1SrNvdI4hkd0UwdW9aHGFR27jN51TGJurctouq/g9i+zPW+RCIzhk25Wv4TdKQ3JZEcErie3ZHiaGXxBpEdsI3BQWUZzEbgySFM6lQn8MYYGIRCUncz/HC/iGT62fDOHsaR+oIXEebyoUjKr7BsP6f1HGMcF3FH+Gb/GDYy2+f8DfZwNQWnG6OgAAAAASUVORK5CYII="/>
    </defs>
    </svg>    
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Map_tab_icon = ()=>{
    const xml = `
    <svg width="100%" height="100%" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0003 4.82471L11.4196 15.0939C11.0965 15.8093 11.0965 16.617 11.4196 17.3324L16.0003 27.6132L20.5811 17.3324C20.8926 16.617 20.8926 15.8093 20.5811 15.0939L16.0003 4.82471ZM16.0003 17.9324C15.0426 17.9324 14.2696 17.1593 14.2696 16.2016C14.2696 15.2555 15.0426 14.4709 16.0003 14.4709C16.958 14.4709 17.7311 15.2555 17.7311 16.2016C17.7311 17.1709 16.958 17.9324 16.0003 17.9324Z" stroke="url(#paint0_linear_49_413)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M16 31.2131C24.2843 31.2131 31 24.4974 31 16.2131C31 7.92886 24.2843 1.21313 16 1.21313C7.71573 1.21313 1 7.92886 1 16.2131C1 24.4974 7.71573 31.2131 16 31.2131Z" stroke="url(#paint1_linear_49_413)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_49_413" x1="15.996" y1="4.82471" x2="15.996" y2="27.6132" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_49_413" x1="16" y1="1.21313" x2="16" y2="31.2131" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>    
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Map_tab_grey_icon = ()=>{
    const xml = `
    <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.053 13.1606L19.5525 17.1829C18.8182 17.4603 18.247 18.0314 17.9696 18.7657L13.9391 29.2744L24.4478 25.2439C25.174 24.9584 25.7451 24.3872 26.0307 23.6611L30.053 13.1606ZM20.7845 22.4291C20.1073 21.7519 20.1073 20.6586 20.7845 19.9814C21.4535 19.3124 22.555 19.3042 23.2321 19.9814C23.9093 20.6586 23.9012 21.7601 23.2321 22.4291C22.5468 23.1144 21.4617 23.1063 20.7845 22.4291Z" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M11.3934 31.8198C17.2513 37.6777 26.7487 37.6777 32.6066 31.8198C38.4645 25.9619 38.4645 16.4645 32.6066 10.6066C26.7487 4.74874 17.2513 4.74874 11.3934 10.6066C5.53553 16.4645 5.53553 25.9619 11.3934 31.8198Z" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    </svg>
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Graph_tab_icon = ()=>{
    const xml = `
    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.94629 24.6401V31.0001" stroke="url(#paint0_linear_52_608)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M30.6797 3.10474V30.9848" stroke="url(#paint1_linear_52_608)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M19.8047 14.8484V30.9846" stroke="url(#paint2_linear_52_608)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M1 31V22.3981L12.6675 16.3737L23.0081 1" stroke="url(#paint3_linear_52_608)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M15.1992 1.4881L23.0081 1.09155L24.9603 8.25983" stroke="url(#paint4_linear_52_608)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_52_608" x1="9.44629" y1="24.6401" x2="9.44629" y2="31.0001" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_52_608" x1="31.1797" y1="3.10474" x2="31.1797" y2="30.9848" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint2_linear_52_608" x1="20.3047" y1="14.8484" x2="20.3047" y2="30.9846" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint3_linear_52_608" x1="12.0041" y1="1" x2="12.0041" y2="31" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint4_linear_52_608" x1="20.0797" y1="1.09155" x2="20.0797" y2="8.25983" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Graph_tab_grey_icon = ()=>{
    const xml = `
    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.94629 24.6401V31.0001" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M30.6797 3.10474V30.9848" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M19.8047 14.8484V30.9846" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M1 31V22.3981L12.6675 16.3737L23.0081 1" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M15.1992 1.4881L23.0081 1.09155L24.9603 8.25983" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    </svg>
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Setting_tab_icon = ()=>{
    const xml = `
    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.2252 17.9632L27.0436 17.8654C26.3729 17.4881 25.9677 16.7755 25.9677 16.021V15.993C25.9677 15.2245 26.3729 14.5119 27.0436 14.1486L27.2252 14.0508C28.8461 13.1425 29.419 11.1025 28.5108 9.4816L27.6025 7.86074C26.6943 6.23987 24.6542 5.66698 23.0334 6.57522L22.8657 6.67303C22.195 7.0503 21.3845 7.03633 20.7278 6.64509C20.5881 6.56125 20.4483 6.47741 20.3086 6.40755C19.6519 6.04425 19.2327 5.3456 19.2327 4.59106V4.35352C19.2327 2.49511 17.7236 1 15.8792 1H14.0208C12.1624 1 10.6673 2.49511 10.6673 4.35352V4.57708C10.6673 5.33163 10.2481 6.03028 9.59134 6.39357C9.45161 6.47741 9.31188 6.54728 9.17215 6.63111C8.54336 7.03633 7.73293 7.03633 7.06223 6.67303L6.89455 6.57522C5.28766 5.66698 3.23363 6.23987 2.33936 7.86074L1.43112 9.4816C0.522871 11.1025 1.09576 13.1425 2.71663 14.0508L2.89828 14.1486C3.56898 14.5259 3.9742 15.2385 3.9742 15.993V16.021C3.9742 16.7895 3.56898 17.5021 2.89828 17.8654L2.71663 17.9632C1.09576 18.8714 0.522871 20.9115 1.43112 22.5324L2.33936 24.1532C3.2476 25.7741 5.28766 26.347 6.90853 25.4388L7.0762 25.3409C7.7469 24.9637 8.55734 24.9776 9.21407 25.3689C9.3538 25.4527 9.49353 25.5366 9.63326 25.6064C10.29 25.9697 10.7092 26.6684 10.7092 27.4229V27.6465C10.7092 29.5049 12.2043 31 14.0627 31H15.9211C17.7795 31 19.2746 29.5049 19.2746 27.6465V27.4229C19.2746 26.6684 19.6938 25.9697 20.3505 25.6064C20.4903 25.5226 20.63 25.4527 20.7697 25.3689C21.4125 24.9637 22.2369 24.9637 22.9076 25.3409L23.0753 25.4388C24.6961 26.347 26.7362 25.7741 27.6444 24.1532L28.5527 22.5324C29.419 20.9255 28.8461 18.8714 27.2252 17.9632ZM14.9709 20.2687C12.6235 20.2687 10.7092 18.3684 10.7092 16.007C10.7092 13.6595 12.6095 11.7452 14.9709 11.7452C17.3324 11.7452 19.2327 13.6456 19.2327 16.007C19.2327 18.3544 17.3184 20.2687 14.9709 20.2687Z" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    </svg>
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Setting_tab_grey_icon = ()=>{
    const xml = `
    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.2252 17.9632L27.0436 17.8654C26.3729 17.4881 25.9677 16.7755 25.9677 16.021V15.993C25.9677 15.2245 26.3729 14.5119 27.0436 14.1486L27.2252 14.0508C28.8461 13.1425 29.419 11.1025 28.5108 9.4816L27.6025 7.86074C26.6943 6.23987 24.6542 5.66698 23.0334 6.57522L22.8657 6.67303C22.195 7.0503 21.3845 7.03633 20.7278 6.64509C20.5881 6.56125 20.4483 6.47741 20.3086 6.40755C19.6519 6.04425 19.2327 5.3456 19.2327 4.59106V4.35352C19.2327 2.49511 17.7236 1 15.8792 1H14.0208C12.1624 1 10.6673 2.49511 10.6673 4.35352V4.57708C10.6673 5.33163 10.2481 6.03028 9.59134 6.39357C9.45161 6.47741 9.31188 6.54728 9.17215 6.63111C8.54336 7.03633 7.73293 7.03633 7.06223 6.67303L6.89455 6.57522C5.28766 5.66698 3.23363 6.23987 2.33936 7.86074L1.43112 9.4816C0.522871 11.1025 1.09576 13.1425 2.71663 14.0508L2.89828 14.1486C3.56898 14.5259 3.9742 15.2385 3.9742 15.993V16.021C3.9742 16.7895 3.56898 17.5021 2.89828 17.8654L2.71663 17.9632C1.09576 18.8714 0.522871 20.9115 1.43112 22.5324L2.33936 24.1532C3.2476 25.7741 5.28766 26.347 6.90853 25.4388L7.0762 25.3409C7.7469 24.9637 8.55734 24.9776 9.21407 25.3689C9.3538 25.4527 9.49353 25.5366 9.63326 25.6064C10.29 25.9697 10.7092 26.6684 10.7092 27.4229V27.6465C10.7092 29.5049 12.2043 31 14.0627 31H15.9211C17.7795 31 19.2746 29.5049 19.2746 27.6465V27.4229C19.2746 26.6684 19.6938 25.9697 20.3505 25.6064C20.4903 25.5226 20.63 25.4527 20.7697 25.3689C21.4125 24.9637 22.2369 24.9637 22.9076 25.3409L23.0753 25.4388C24.6961 26.347 26.7362 25.7741 27.6444 24.1532L28.5527 22.5324C29.419 20.9255 28.8461 18.8714 27.2252 17.9632ZM14.9709 20.2687C12.6235 20.2687 10.7092 18.3684 10.7092 16.007C10.7092 13.6595 12.6095 11.7452 14.9709 11.7452C17.3324 11.7452 19.2327 13.6456 19.2327 16.007C19.2327 18.3544 17.3184 20.2687 14.9709 20.2687Z" stroke="url(#paint0_linear_78_1596)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_78_1596" x1="14.9776" y1="1" x2="14.9776" y2="31" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Dummy4 = ()=>{
    const xml = `
    
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Dummy5 = ()=>{
    const xml = `
    
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
        export  {
            Google_icon,
            Facebook_icon,
            Apple_icon,
            Map_tab_icon,
            Map_tab_grey_icon,
            Graph_tab_icon,
            Graph_tab_grey_icon,
            Setting_tab_icon,
            Setting_tab_grey_icon
        };