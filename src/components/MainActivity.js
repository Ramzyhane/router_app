import React from 'react'

const MainActivity = ({children}) => {
  return (
    <div className='col-lg-10 d-flex-column' style={{height:'100vh'}}>
         {children}
     </div>
  )
}

export default MainActivity