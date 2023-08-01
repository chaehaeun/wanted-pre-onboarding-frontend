import React from 'react'

interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="text-2xl font-semibold text-center mt-7">{children}</h1>
}

export default Title
