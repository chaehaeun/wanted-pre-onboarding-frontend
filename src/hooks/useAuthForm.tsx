import { useState, useEffect, useCallback } from 'react'

const useAuthForm = () => {
  const [validState, setValidState] = useState({
    email: false,
    password: false,
  })
  const [isValid, setIsValid] = useState(false)
  const [value, setValue] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (validState.email && validState.password) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [validState])

  const handleValidState = useCallback((type: string, isValid: boolean) => {
    setValidState(prev => ({ ...prev, [type]: isValid }))
  }, [])

  const combineValue = useCallback((type: string, value: string) => {
    setValue(prev => ({ ...prev, [type]: value }))
  }, [])

  return { isValid, handleValidState, combineValue, value }
}

export default useAuthForm
