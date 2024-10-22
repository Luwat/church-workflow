import React from 'react'

const OpenModalButton = ({onOpenModal}: {onOpenModal: () => void}) => {
  return (
    <div>
      <div className="flex flex-col items-center mt-8 text-xl">
        <p className="mb-4">Click the button below to view Membership modal</p>
        <button
          className="w-28 h-10 bg-violet-800 text-violet-50 hover:text-violet-300 rounded-md"
          onClick={onOpenModal}
        >
          Join us
        </button>
      </div>
    </div>
  )
}

export default OpenModalButton
