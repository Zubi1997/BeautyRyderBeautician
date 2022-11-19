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

        export  {
            Google_icon,
            Facebook_icon,
            Apple_icon
        };