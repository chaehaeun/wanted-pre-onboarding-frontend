import { AuthForm, AuthInput, Button, Title } from 'components'
import { useAuthForm } from 'hooks'

const SignUp = () => {
  const { isValid, handleValidState } = useAuthForm()

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
