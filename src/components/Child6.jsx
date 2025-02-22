import React from 'react'
import useName from '../Hooks/useName'

function Child6() {
    const name = useName();
  return (
    <div>
      Hi {name}
    </div>
  )
}

export default Child6
