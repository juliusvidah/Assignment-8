import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div align='center'>
        Oops! looks like you mistyped the url! <Link to='/'>Home</Link>
    </div>
  )
}

export default Error