import { authService } from 'api'
import Modal from 'components/Modal/Modal'
import React from 'react'
import { useModal } from 'hooks'

interface AuthFormProps {
  legend: string
  children: React.ReactNode
  type: 'signin' | 'signup'
  value: {
    email: string
    password: string
  } | null
}

const AuthForm = ({ legend, children, type, value }: AuthFormProps) => {
  const { showModal, content, openModal, closeModal } = useModal()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (type === 'signin') {
      try {
        if (value) {
          const accessToken = await authService.signIn(value)
          console.log('Access Token:', accessToken)
          console.log('로그인 폼 제출 성공!')
        }
      } catch (error) {
        console.error('SignIn Error:', error)
      }
    }
    if (type === 'signup') {
      try {
        if (value) {
          await authService.signUp(value)
          console.log('회원가입 폼 제출 성공!')
        }
      } catch (error) {
        console.error('SignUp Error:', error)
      }
    }
  }

  return (
    <form className="w-4/5 mx-auto" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="sr-only">{legend}</legend>
        <div className="flex flex-col gap-6">{children}</div>
      </fieldset>
      {showModal && <Modal onClose={closeModal}>{content}</Modal>}
    </form>
  )
}

export default AuthForm
