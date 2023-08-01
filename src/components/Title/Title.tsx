import React from 'react'

interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="my-5 text-2xl font-semibold text-center">{children}</h1>
}

export default Title
