import React from 'react'
import * as Styles from './styles'

import LogoAnimated from "../../assets/logo-animate.gif"

export const LoadingPageAnimate = () => {
  return (
    <Styles.Container>
      <Styles.ImgAnimate src={LogoAnimated}/>
    </Styles.Container>
    )
}
