import { useState } from 'react'

interface AuthInputProps {
  id: string
  label: string
  placeholder: string
  type: 'email' | 'password'
  dataTestId: 'email-input' | 'password-input'
}

const AuthInput = ({
  id,
  label,
  placeholder,
  type,
  dataTestId,
}: AuthInputProps) => {
  const [value, setValue] = useState('')

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        data-testid={dataTestId}
        id={id}
        value={value}
        onChange={handleOnchange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default AuthInput
