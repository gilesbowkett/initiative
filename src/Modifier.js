import React, { useState } from 'react'
import { connect } from 'react-redux'
import { dec, inc } from './actions'

const Modifier = ({ dec, inc, modifier }) => {
  const format = (num) => {
    if (0 <= num) {
      return `+ ${num}`
    }
    return num
  }

  return(
    <div className="modifier">
      <span className="modifier-control" onClick={dec}>
        &lt;&lt;&nbsp;
      </span>
      <span>
        {format(modifier)}
      </span>
      <span className="modifier-control" onClick={inc}>
        &nbsp;&gt;&gt;
      </span>
    </div>
  )
}

export default connect(s => s, { dec, inc })(Modifier)
