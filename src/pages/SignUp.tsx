import { AuthForm, AuthInput, Button } from 'components'
import Title from 'components/Title/Title'
import { useEffect, useState } from 'react'

const SignUp = () => {
  const [validState, setValidState] = useState({
    email: false,
    password: false,
  })
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if (validState.email && validState.password) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [validState])

  const handleValidState = (type: string, isValid: boolean) => {
    if (type === 'email') {
      setValidState(prev => ({ ...prev, email: isValid }))
    } else if (type === 'password') {
      setValidState(prev => ({ ...prev, password: isValid }))
    }
  }

  return (
    <div>
      <Title>회원가입</Title>
      <AuthForm type={'signup'} legend={'회원가입 폼'}>
        <AuthInput
          id={'signupEmail'}
          label={'Email'}
          placeholder={'이메일을 입력해주세요.'}
          type={'email'}
          dataTestId={'email-input'}
          handleValidState={handleValidState}
        />
        <AuthInput
          id={'signupPassword'}
          label={'Password'}
          placeholder={'비밀번호를 입력해주세요.'}
          type={'password'}
          dataTestId={'password-input'}
          handleValidState={handleValidState}
        />
        <Button type="submit" mode="auth" isValid={isValid}>
          회원가입
        </Button>
      </AuthForm>
    </div>
  )
}

export default SignUp
