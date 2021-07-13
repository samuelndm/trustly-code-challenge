import React, { useEffect, useState } from 'react'
import * as S from './styles'

type ModalProps = {
  isModalOpen: boolean
  closeModal: (isOpen: null) => void
  children: React.ReactNode
  size?: string
}

const Modal = ({ isModalOpen, closeModal, children, size }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(isModalOpen)
  }, [isModalOpen])

  const handleCloseModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    setIsOpen(false)

    const timeOut = setTimeout(() => {
      closeModal(null)
    }, 400)

    return () => clearTimeout(timeOut)
  }

  if (!isModalOpen) return null
  return (
    <S.Container>
      <S.Content size={size} isOpen={isOpen}>
        <S.CloseButton
          aria-label="close modal"
          onClick={(e) => handleCloseModal(e)}
        >
          X
        </S.CloseButton>

        {children}
      </S.Content>

      <S.Background onClick={(e) => handleCloseModal(e)} />
    </S.Container>
  )
}

export default Modal
