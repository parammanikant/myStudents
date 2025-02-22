import React, { useContext } from 'react'
import Child5 from './Child5'

import { nameContext } from '../App'

function Child4() {

  const surname = useContext(nameContext)

  return (
    <div>
      Child 4 - {surname}
      <Child5/>
    </div>
  )
}

export default Child4
