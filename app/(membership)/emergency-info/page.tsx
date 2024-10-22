"use client";

import React, { useState } from "react";
import MembershipModal, {
  MembershipData,
} from "@/components/membership-modal/MembershipModal";
import OpenModalButton from "@/components/membership-modal/OpenModalButton";

const EmergencyInfoPage = () => {
  const [isMembershipModalOpen, setIsMembershipModalOpen] =
    useState<boolean>(false);
  const [membershipFormData, setMembershipFormData] =
    useState<MembershipData | null>(null);

  const handleOpenMembershipModal = () => {
    setIsMembershipModalOpen(true);
  };

  const handleCloseMembershipModal = () => {
    setIsMembershipModalOpen(false);
  };
  
  const successMessage = (
    <div>
      Welcome {membershipFormData?.fullName}, click the next button to proceed.
    </div>
  );
  const handleMembershipFormSubmit = (data: MembershipData): void => {
    setMembershipFormData(data);
    setTimeout(() => successMessage, 2000);
    handleCloseMembershipModal();
  };


  return (
    <section>
      <OpenModalButton onOpenModal={handleOpenMembershipModal}/>
      {membershipFormData && membershipFormData.fullName && 
      successMessage}
      <MembershipModal
        isOpen={isMembershipModalOpen}
        onSubmit={handleMembershipFormSubmit}
        onClose={handleCloseMembershipModal}
      />
    </section>
  );
};

export default EmergencyInfoPage;
