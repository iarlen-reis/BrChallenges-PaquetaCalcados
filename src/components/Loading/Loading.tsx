import React from 'react'

import { LoadingStyled } from './styles'
import { Triangle } from 'react-loader-spinner'

const Loading = () => {
  return (
    <LoadingStyled>
      <Triangle
        height="80"
        width="80"
        color="#000"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </LoadingStyled>
  )
}

export default Loading
