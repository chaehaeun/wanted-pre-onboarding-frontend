import React from 'react'

type DataTestId =
  | 'signup-button'
  | 'signin-button'
  | 'new-todo-add-button'
  | 'modify-button'
  | 'delete-button'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  dataTestId: DataTestId
  onClick?: () => void
  mode?: 'auth' | 'cancel' | 'add' | 'edit' | 'delete'
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
}: ButtonProps) => {
  switch (mode) {
    case 'auth':
      className =
        'w-full py-3 mt-4 font-semibold bg-teal-500 border-2 border-black shadow-wrap hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed'
      break
    case 'add':
      className =
        'px-3 bg-teal-500 border-2 border-l-0 border-black cursor-pointer shrink-0 hover:bg-teal-600'
      break
    case 'edit':
      className =
        'px-2 py-1 bg-teal-500 border-2 border-black cursor-pointer shrink-0 shadow-wrap-sm hover:bg-teal-600'
      break
    case 'delete':
      className =
        'px-2 py-1 bg-gray-400 border-2 border-black cursor-pointer shrink-0 shadow-wrap-sm hover:bg-rose-600'
      break
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} transition-colors duration-200 ease-out`}
      data-testid={dataTestId}
      disabled={isValid === undefined ? false : !isValid}
    >
      {children}
    </button>
  )
}

export default Button
