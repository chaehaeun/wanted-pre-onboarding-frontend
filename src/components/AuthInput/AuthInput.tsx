import { useDebounce } from 'hooks'
import React, { useState, useEffect } from 'react'

interface AuthInputProps {
  id: string
  label: string
  placeholder: string
  type: 'email' | 'password'
  dataTestId: 'email-input' | 'password-input'
  warning?: string
}

const AuthInput = ({
  id,
  label,
  placeholder,
  type,
  dataTestId,
}: AuthInputProps) => {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 300)

  const [isValid, setIsValid] = useState(true)
  const [errorText, setErrorText] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (type === 'email') {
      const isValidEmail = debouncedValue.includes('@')
      setIsValid(isValidEmail)
      setErrorText(isValidEmail ? '' : '이메일 형식이 올바르지 않습니다.')
    } else if (type === 'password') {
      const isValidPassword = debouncedValue.length >= 8
      setIsValid(isValidPassword)
      setErrorText(isValidPassword ? '' : '비밀번호는 8자 이상이어야 합니다.')
    }
  }, [debouncedValue, type])

  return (
    <div className="relative flex flex-col">
      <label className="mb-1 font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className={`px-2 py-3 border-2 border-black shadow-wrap focus:outline-none focus:ring-1 ${
          isValid ? 'focus:ring-teal-500' : 'focus:ring-red-500'
        }`}
        type={type}
        data-testid={dataTestId}
        id={id}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
      <p className={'absolute text-sm font-medium -bottom-6 text-rose-600'}>
        {isValid ? '' : errorText}
      </p>
    </div>
  )
}

export default AuthInput
