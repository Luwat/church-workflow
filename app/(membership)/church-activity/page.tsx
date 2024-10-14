"use client";

import React, { useState } from "react";
import ChurchActivityModal, { ChurchActivityData } from "@/components/membershipModal/ChurchActivityModal";

const ChurchActivityPage = () => {
  const [isChurchActivityModalOpen, setIsChurchActivityModalOpen] =
    useState<boolean>(false);
  const [churchActivityFormData, setChurchActivityFormData] =
    useState<ChurchActivityData | null>(null);

  const handleOpenChurchActivityModal = () => {
   setIsChurchActivityModalOpen(true);
  };

  const handleCloseChurchActivityModal = () => {
    setIsChurchActivityModalOpen(false);
  };
  
  const successMessage = (
    <div>
      Welcome member, click the next button to proceed.
    </div>
  );
  const handleChurchActivityFormSubmit = (data: ChurchActivityData): void => {
    setChurchActivityFormData(data);
    setTimeout(() => successMessage, 2000);
    handleCloseChurchActivityModal();
  };


  return (
    <section>
      <div>
        <button onClick={handleOpenChurchActivityModal}>Join us</button>
      </div>

      {churchActivityFormData && churchActivityFormData.membershipStatus && 
      successMessage}
      <ChurchActivityModal
        isOpen={isChurchActivityModalOpen}
        onSubmit={handleChurchActivityFormSubmit}
        onClose={handleCloseChurchActivityModal}
      />
    </section>
  );
};

export default ChurchActivityPage;
