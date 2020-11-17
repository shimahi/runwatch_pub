import React, { ReactNode } from 'react'
import { useIsMobile } from 'lib'
import 'twin.macro'
import ReactModal from 'react-modal'
import closeIcon from 'assets/close_modal_icon.svg'

type ModalProps = {
  children: ReactNode
  isModal: boolean
  closeFunc: (isModal: boolean) => void
}

ReactModal.setAppElement('#root')

export const Modal = ({ children, isModal, closeFunc }: ModalProps) => {
  const isMobile = useIsMobile()

  const handleClose = () => closeFunc(false)

  if (!isModal) return <></>

  return (
    <ReactModal isOpen={isModal} style={modalStyle(isMobile)} onRequestClose={handleClose}>
      <div onClick={handleClose} tw="hover:opacity-75 cursor-pointer flex justify-end -mt-3 -mr-3">
        <img src={closeIcon} alt="" width="40px" height="40px" />
      </div>
      {children}
    </ReactModal>
  )
}

const modalContentSmall = {
  top: '2rem',
  left: '1.2rem',
  right: '1.2rem',
  bottom: '3.5rem',
  backgroundColor: '#F7FAFC',
  borderRadius: '0.2rem',
  padding: '1.5rem',
  overflow: 'scroll',
}

const modalContentLarge = {
  top: '5rem',
  left: '5rem',
  right: '5rem',
  bottom: '5rem',
  backgroundColor: '#F7FAFC',
  borderRadius: '0.2rem',
  padding: '1.5rem',
  maxWidth: '1024px',
  margin: 'auto',
}

const modalStyle = (isMobile: boolean) => ({
  overlay: {
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,8,32,0.75)',
    zIndex: 10000000,
  },
  content: isMobile ? modalContentSmall : modalContentLarge,
})
