import Logo from '@/components/shared/Logo'
import React from 'react'

const loading = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen'>
        <Logo className='pointer-events-none scale-125' span='hidden' />
        loading
    </div>
  )
}

export default loading