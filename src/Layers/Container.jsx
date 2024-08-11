import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`max-w-[1300px] mx-auto sm:p-0 px-3 ${className}`}>
        {children}
    </div>
  )
}

export default Container