import { useState } from 'react'

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
  warning,
}: AuthInputProps) => {
  const [value, setValue] = useState('')

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  console.log(value)

  return (
    <div className="relative flex flex-col">
      <label className="mb-1 font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="px-2 py-3 border-2 border-black shadow-wrap focus:outline-none focus:ring-1 focus:ring-teal-500"
        type={type}
        data-testid={dataTestId}
        id={id}
        value={value}
        onChange={handleOnchange}
        placeholder={placeholder}
      />
      <p className="absolute text-sm font-medium -bottom-6 text-rose-600">
        {warning}
      </p>
    </div>
  )
}

export default AuthInput
