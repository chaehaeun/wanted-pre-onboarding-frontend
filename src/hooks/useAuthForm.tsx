import { useState, useEffect, useCallback } from 'react'

const useAuthForm = () => {
  const [validState, setValidState] = useState({
    // 입력 필드의 유효성 상태
    email: false,
    password: false,
  })
  const [isValid, setIsValid] = useState(false) // 폼 전체의 유효성 상태
  const [value, setValue] = useState({
    // 입력 필드의 값
    email: '',
    password: '',
  })

  useEffect(() => {
    // 입력 필드의 유효성 상태를 모두 확인
    if (validState.email && validState.password) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [validState])

  const handleValidState = useCallback((type: string, isValid: boolean) => {
    // 입력 필드의 유효성 상태 변경
    setValidState(prev => ({ ...prev, [type]: isValid }))
  }, [])

  const combineValue = useCallback((type: string, value: string) => {
    // 입력 필드의 값 변경
    setValue(prev => ({ ...prev, [type]: value }))
  }, [])

  // 커스텀 훅의 반환 값
  return { isValid, handleValidState, combineValue, value }
}

export default useAuthForm
