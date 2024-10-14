"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import Modal from "../UI/Modal";
import IconComponent from "../UI/icons";
import { textColorPrimary } from "@/constants/colors";

export interface MembershipData {
  fullName: string;
  email: string;
  phoneNumber: string;
  houseAddress: string;
}

const initialMembershipData: MembershipData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  houseAddress: "",
};

interface MembershipModalProps {
  isOpen: boolean;
  onSubmit: (data: MembershipData) => void;
  onClose: () => void;
}
const ChurchActivityModal = ({
  isOpen,
  onSubmit,
  onClose,
}: MembershipModalProps) => {
  const [formState, setFormState] = useState<MembershipData>(
    initialMembershipData
  );
  const inputFocusRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputFocusRef.current && isOpen) {
      setTimeout(() => {
        inputFocusRef.current!.focus();
      }, 0);
    }
  }, [isOpen]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    onSubmit(formState);
    setFormState(initialMembershipData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="mt-10 text-xs font-bold">
        <IconComponent />
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <h1 className="font-bold text-2xl" style={textColorPrimary}>We are thrilled to welcome you!</h1>
            <p>Enter your details to join our community and stay informed</p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2 mb-4 w-3/6">
              <label htmlFor="fullName">Full name: </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter the full name"
                value={formState.fullName}
                onChange={handleInputChange}
                className="border-2 focus:outline-none py-2 px-4 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2 mb-4 w-3/6">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter the email address"
                value={formState.email}
                onChange={handleInputChange}
                className="border-2 focus:outline-none py-2 px-4 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2 mb-4 w-3/6">
              <label htmlFor="phoneNumber">Phone number: </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter the phone number"
                value={formState.phoneNumber}
                onChange={handleInputChange}
                className="border-2 focus:outline-none py-2 px-4 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2 mb-4 w-3/6">
              <label htmlFor="houseAddress">House address: </label>
              <input
                type="text"
                id="houseAddress"
                name="houseAddress"
                placeholder="Enter the address"
                value={formState.houseAddress}
                onChange={handleInputChange}
                className="border-2 focus:outline-none py-2 px-4 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex gap-6 mt-10 justify-end">
            <button onClick={onClose} className="w-28 py-2 border-2 text-[#0C5FB3] border-[#0C5FB3] rounded-lg">Back</button>
            <button type="submit" className="w-28 py-2 border-2 text-white bg-[#0C5FB3] border-[#0C5FB3] rounded-lg">Next step</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ChurchActivityModal;
