import React from 'react'
import { Loading, Loader, PleaseWait } from './style'
import Popcorn from '../../assets/popcorn.gif'
import waiting from '../../assets/loading.gif'

const LoaderScreen = () => {
  return (
    <Loading>
      <Loader src={Popcorn} />
      <PleaseWait src={waiting} />
    </Loading>
  )
}

export default LoaderScreen
