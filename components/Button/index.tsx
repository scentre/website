import Image from 'next/image'
import React from 'react'

interface Prop {
  child?: any
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: any
  icon?: any
}

export default function Button({child, type, className, onClick, icon}: Prop ) {
  return (
   <button className={className} onClick={onClick} type={type}>
      <div className="flex justify-center items-center">
        {child}
        {icon ? <Image src={icon} alt="icons" height={14} width={20} className="mx-[10.5px] lg:mx-3" /> : null}
      </div>
    </button>
  )
}
