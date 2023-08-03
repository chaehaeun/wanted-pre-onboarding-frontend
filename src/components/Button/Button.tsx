import React from 'react'

interface AuthButtonProps {
  type: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  onClick?: () => void
  mode?: 'auth' | 'cancel' | 'add'
  dataTestId: 'signup-button' | 'signin-button' | 'new-todo-add-button'
  isValid?: boolean
}

let className = ''

const Button = ({
  type,
  children,
  onClick,
  mode,
  isValid,
  dataTestId,
}: AuthButtonProps) => {
  switch (mode) {
    case 'auth':
      className =
        'w-full py-3 mt-4 font-semibold text-white bg-teal-500 border-2 border-black shadow-wrap hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed'
      break
    case 'add':
      className =
        'px-3 bg-teal-500 border-2 border-l-0 border-black cursor-pointer shrink-0 hover:bg-teal-600'
      break
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      data-testid={dataTestId}
      disabled={isValid === null ? false : !isValid}
    >
      {children}
    </button>
  )
}

export default Button
