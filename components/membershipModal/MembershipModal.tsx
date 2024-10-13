'use client'

import React, {useState, useEffect, useRef, FormEvent} from 'react'
import Modal from '../UI/Modal';

export interface MembershipData{
    fullName: string;
    email: string;
    phoneNumber: string;
    houseAddress: string;
}

const initialMembershipData: MembershipData = {
    fullName: '',
    email: '',
    phoneNumber: '',
    houseAddress: '',
}

interface MembershipModalProps {
    isOpen: boolean;
  onSubmit: (data: MembershipData) => void;
  onClose: () => void;
}
const MembershipModal = ({isOpen, onSubmit, onClose}: MembershipModalProps) => {

    const [formState, setFormState] = useState<MembershipData>(initialMembershipData)
    const inputFocusRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (inputFocusRef.current && isOpen) {
            setTimeout(() => {
                inputFocusRef.current!.focus()
            }, 0);
        }
    }, [isOpen])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value } = event.target;

        setFormState(prevFormState => ({
            ...prevFormState,
            [name]: value,
        }))
    }

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        onSubmit(formState);
        setFormState(initialMembershipData);
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='fullName'>Full name: </label>
                <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    placeholder='Enter the full name'
                    value={formState.fullName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter the email address'
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor='phoneNumber'>Phone number: </label>
                <input
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    placeholder='Enter the phone number'
                    value={formState.phoneNumber}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor='houseAddress'>House address: </label>
                <input
                    type='text'
                    id='houseAddress'
                    name='houseAddress'
                    placeholder='Enter the address'
                    value={formState.houseAddress}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <button onClick={onClose}>Back</button>
                <button type='submit'>Next</button>
            </div>
        </form>
    </Modal>
  )
}

export default MembershipModal
