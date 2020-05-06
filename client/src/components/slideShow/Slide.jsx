/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ content }) => (
  // <img src={content}/>
  <div
    css={css`
      height: 100%;
      width: 100%;
      background-image: url('${content}');
      background-size: 900px 100%;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)

export default Slide