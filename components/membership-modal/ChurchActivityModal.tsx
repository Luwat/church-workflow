"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import Modal from "../UI/Modal";
import IconComponent from "../UI/icons";
import { textColorPrimary } from "@/constants/colors";

export interface ChurchActivityData {
  membershipStatus: string;
  dateJoined: string;
  previousChurch: string;
  baptismStatus: string;
  ministryDepartment: string;
  volunteerPreferences: string;
  cellGroupStatus: string;
}

const initialChurchActivityData: ChurchActivityData = {
  membershipStatus: "",
  dateJoined: "",
  previousChurch: "",
  baptismStatus: "",
  ministryDepartment: "",
  volunteerPreferences: "",
  cellGroupStatus: "",
};

interface ChurchActivityModalProps {
  isOpen: boolean;
  onSubmit: (data: ChurchActivityData) => void;
  onClose: () => void;
}
const ChurchActivityModal = ({
  isOpen,
  onSubmit,
  onClose,
}: ChurchActivityModalProps) => {
  const [formState, setFormState] = useState<ChurchActivityData>(
    initialChurchActivityData
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
    setFormState(initialChurchActivityData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="mt-10 text-xs font-bold">
        <IconComponent />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className="font-bold text-2xl" style={textColorPrimary}>
              We are thrilled to welcome you!
            </h1>
            <p>Enter your details to join our community and stay informed</p>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 mb-3 w-3/6">
              <label htmlFor="membershipStatus">Membership Status </label>
              <select
                name="membershipStatus"
                id="membershipStatus"
                className="border-2 focus:outline-none py-2 px-4 rounded-md"
                required
              >
                <option value="">Select membership status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Visitor">Visitor</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 mb-3 w-3/6">
              <label htmlFor="dateJoined">Date joined the Church </label>
              <input
                type="date"
                id="dateJoined"
                name="dateJoined"
                placeholder="Enter the email address"
                value={formState.dateJoined}
                onChange={handleInputChange}
                className="border-2 focus:outline-none py-2 px-4 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 mb-3 w-3/6">
              <label htmlFor="previousChurch">Previous Church Membership </label>
              <input
                type="type"
                id="previousChurch"
                name="previousChurch"
                placeholder="Enter the previous church."
                value={formState.previousChurch}
                onChange={handleInputChange}
                className="border-2 focus:outline-none py-2 px-4 rounded-md"
                
              />
            </div>
            <div className="flex flex-col gap-1 mb-3 w-3/6">
              <label htmlFor="houseAddress">Are you baptized? </label>
              <input
                type="text"
                id="houseAddress"
                name="houseAddress"
                placeholder="If yes, which date?"
                value={formState.baptismStatus}
                onChange={handleInputChange}
                className="border-2 focus:outline-none py-2 px-4 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 mb-3 w-3/6">
              <label htmlFor="ministryDepartment">Ministry involved in </label>
              <select
                name="ministryDepartment"
                id="ministryDepartment"
                className="border-2 focus:outline-none py-2 px-4 rounded-md"
                required
              >
                <option value="">e.g.. Choir, Usher or none</option>
                <option value="Choir">Choir</option>
                <option value="Usher">Usher</option>
                <option value="none">none</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 mb-3 w-3/6">
              <label htmlFor="volunteerPreferences">Volunteer preferences </label>
              <input
                type="text"
                id="volunteerPreferences"
                name="volunteerPreferences"
                placeholder="Enter the email address"
                value={formState.dateJoined}
                onChange={handleInputChange}
                className="border-2 focus:outline-none py-2 px-4 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 mb-3 w-full">
              <label htmlFor="cellGroupStatus">Are you in a small Group/Cell Group?</label>
              <input
                type="text"
                id="cellGroupStatus"
                name="cellGroupStatus"
                placeholder="If yes, what's the group name?"
                value={formState.cellGroupStatus}
                onChange={handleInputChange}
                className="border-2 focus:outline-none py-2 px-4 rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-6 mt-5 justify-end">
            <button
              onClick={onClose}
              className="w-28 py-2 border-2 text-[#0C5FB3] border-[#0C5FB3] rounded-lg"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-28 py-2 border-2 text-white bg-[#0C5FB3] border-[#0C5FB3] rounded-lg"
            >
              Next step
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ChurchActivityModal;
