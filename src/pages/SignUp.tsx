import { AuthForm, AuthInput } from 'components'
import Title from 'components/Title/Title'

const SignUp = () => {
  return (
    <div>
      <Title>회원가입</Title>
      <AuthForm legend={'회원가입 폼'}>
        <AuthInput
          id={'signupEmail'}
          label={'Email'}
          placeholder={'이메일을 입력해주세요.'}
          type={'email'}
          dataTestId={'email-input'}
          warning="이메일 형식이 올바르지 않습니다."
        />
        <AuthInput
          id={'signupPassword'}
          label={'Password'}
          placeholder={'비밀번호를 입력해주세요.'}
          type={'password'}
          dataTestId={'password-input'}
          warning="비밀번호는 8자 이상이어야 합니다."
        />
      </AuthForm>
    </div>
  )
}

export default SignUp
