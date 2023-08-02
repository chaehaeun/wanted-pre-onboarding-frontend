import React from 'react'

interface AuthFormProps {
  legend: string
  children: React.ReactNode
  type: 'signin' | 'signup'
}

const AuthForm = ({ legend, children, type }: AuthFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (type === 'signin') {
      console.log('로그인 폼 제출')
    }
    if (type === 'signup') {
      console.log('회원가입 폼 제출')
    }
  }

  return (
    <form className="w-4/5 mx-auto" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="sr-only">{legend}</legend>
        <div className="flex flex-col gap-6">{children}</div>
      </fieldset>
    </form>
  )
}

export default AuthForm
