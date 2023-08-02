import { AuthForm, AuthInput, Button, Title } from 'components'
import { useState, useEffect } from 'react'

const SignIn = () => {
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
      <Title>로그인</Title>
      <AuthForm legend={'로그인 폼'} type="signin">
        <AuthInput
          id={'signinEmail'}
          label={'Email'}
          placeholder={'이메일을 입력해주세요.'}
          type={'email'}
          dataTestId={'email-input'}
          handleValidState={handleValidState}
        />
        <AuthInput
          id={'signinPassword'}
          label={'Password'}
          placeholder={'비밀번호를 입력해주세요.'}
          type={'password'}
          dataTestId={'password-input'}
          handleValidState={handleValidState}
        />
        <Button type="submit" mode="auth" isValid={isValid}>
          로그인
        </Button>
      </AuthForm>
    </div>
  )
}

export default SignIn
