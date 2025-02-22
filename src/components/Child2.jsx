import React, { useContext } from 'react'
import Child3 from './Child3'

import { nameContext } from '../App'

function Child2() {

  const surname = useContext(nameContext);

  return (
    <div>
      This is my Surname - { surname }
      <Child3/>
    </div>
  )
}

export default Child2
