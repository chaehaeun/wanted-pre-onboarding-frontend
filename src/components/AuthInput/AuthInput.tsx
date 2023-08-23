import { useDebounce } from 'hooks'
import React, { useState, useEffect } from 'react'

interface AuthInputProps {
  id: string
  label: string
  placeholder: string
  type: 'email' | 'password'
  dataTestId: 'email-input' | 'password-input'
  handleValidState: (type: string, isValid: boolean) => void
  combineValue: (type: string, value: string) => void
}

const AuthInput = ({
  id,
  label,
  placeholder,
  type,
  dataTestId,
  handleValidState,
  combineValue,
}: AuthInputProps) => {
  // 입력 값과 디바운스 된 입력 값을 관리하는 상태
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 300)
  // 유효성 검사 결과와 에러 텍스트 관리하는 상태
  const [isValid, setIsValid] = useState(false)
  const [errorText, setErrorText] = useState('')
  // 첫 번째 입력 여부를 관리하는 상태
  const [isFirstInput, setIsFirstInput] = useState(false)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    //첫 번째 입력 이후부터 유효성 검사 및 에러 텍스트 렌더링이 시작
    setIsFirstInput(true)
  }

  useEffect(() => {
    if (!isFirstInput) return

    let isValid = false
    let errorText = ''

    if (type === 'email') {
      isValid = debouncedValue.includes('@')
      errorText = isValid ? '' : '이메일 형식이 올바르지 않습니다.'
    } else if (type === 'password') {
      isValid = debouncedValue.length >= 8
      errorText = isValid ? '' : '비밀번호는 8자 이상이어야 합니다.'
    }

    // 상태 업데이트 및 외부로 유효성 정보 전달
    setIsValid(isValid)
    setErrorText(errorText)
    handleValidState(type, isValid) // 페이지 컴포넌트로 유효성 정보 전달
    combineValue(type, debouncedValue) // 페이지 컴포넌트로 각 인풋 입력 값 전달
  }, [debouncedValue, type, isFirstInput, handleValidState, combineValue])

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
      {errorText && isFirstInput && (
        <p className="absolute text-sm font-medium -bottom-6 text-rose-600">
          {errorText}
        </p>
      )}
    </div>
  )
}

export default AuthInput
