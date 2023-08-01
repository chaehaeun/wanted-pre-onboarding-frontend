import React from 'react'

interface AuthFormProps {
  legend: string
  children: React.ReactNode
}

const AuthForm = ({ legend, children }: AuthFormProps) => {
  return (
    <form className="w-4/5 mx-auto ">
      <fieldset>
        <legend className="sr-only">{legend}</legend>
        <div className="flex flex-col gap-8">{children}</div>
      </fieldset>
    </form>
  )
}

export default AuthForm
