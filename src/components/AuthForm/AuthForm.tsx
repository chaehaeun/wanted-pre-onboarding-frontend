import { authService } from 'api'
import Modal from 'components/Modal/Modal'
import React from 'react'
import { useModal } from 'hooks'
import { makeModalContent } from 'utils'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'context/AuthContext'

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
  const navigate = useNavigate()
  const { showModal, content, openModal, closeModal } = useModal()
  const { setToken } = useAuth()

  const handleSignIn = async () => {
    try {
      if (value) {
        const accessToken = await authService.signIn(value)
        localStorage.setItem('accessToken', accessToken)
        setToken(accessToken)

        navigate('/todo')
      }
    } catch (error: any) {
      openModal(makeModalContent('auth', error.response.status))
    }
  }

  const handleSignUp = async () => {
    try {
      if (value) {
        await authService.signUp(value)
        navigate('/signin')
      }
    } catch (error: any) {
      openModal(makeModalContent('auth', error.response.status))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    type === 'signin' ? handleSignIn() : handleSignUp()
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
