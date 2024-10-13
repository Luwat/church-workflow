'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ModalProps {
    isOpen: boolean;
    // hasCloseBtn?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
  };
  
const Modal = ({isOpen, onClose, children}: ModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen)
    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        setIsModalOpen(isOpen)
    }, [isOpen])

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal()
            } else {
                modalElement.close()
            }
        }
    }, [isModalOpen])

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setIsModalOpen(false)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            handleCloseModal()
        }
    }

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className=' rounded-lg backdrop:bg-neutral-700 backdrop:bg-opacity-75'>
        {children}
    </dialog>
  )
}

export default Modal
