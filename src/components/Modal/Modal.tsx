import React from 'react'
import ReactDOM from 'react-dom'

interface BackdropProps {
  onClose: () => void
}

interface ModalOverlayProps {
  children: React.ReactNode
  onClose: () => void
}

// 모달 컴포넌트의 속성을 정의하는 인터페이스
interface ModalProps extends BackdropProps, ModalOverlayProps {}

const Backdrop = ({ onClose }: BackdropProps) => {
  return (
    <div
      className="fixed top-0 left-0 z-20 w-full h-screen bg-modalBackDrop"
      onClick={onClose}
    ></div>
  )
}

const ModalOverlay = ({ children, onClose }: ModalOverlayProps) => {
  return (
    <div className="fixed z-30 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black top-1/2 left-1/2 w-80 shadow-wrap">
      <div className="w-full py-6 text-center">
        <p>{children}</p>
      </div>
      <button
        className="w-full py-4 transition-colors duration-200 ease-in bg-teal-500 border-t-2 border-black hover:bg-teal-600 focus:bg-teal-600 "
        onClick={onClose}
        type="button"
      >
        확인
      </button>
    </div>
  )
}

// 모달을 렌더링하기 위한 포털 요소
const portalElement: HTMLElement | null = document.getElementById('overlays')

const Modal = ({ onClose, children }: ModalProps) => {
  if (portalElement) {
    return (
      <>
        {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
        {ReactDOM.createPortal(
          <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
          portalElement,
        )}
      </>
    )
  }

  return null
}

export default Modal
