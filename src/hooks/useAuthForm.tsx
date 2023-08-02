import { useState, useEffect } from 'react'

const useAuthForm = () => {
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
    setValidState(prev => ({ ...prev, [type]: isValid }))
  }

  return { isValid, handleValidState }
}

export default useAuthForm
