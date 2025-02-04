import React, {ReactNode} from 'react'

const layout = ({children}:{children : ReactNode}) => {
  return (
    <div className='flex justify-center pt-40 pb-4'>{children}</div>
  )
}

export default layout