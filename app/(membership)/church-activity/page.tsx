"use client";

import React, { useState } from "react";
import ChurchActivityModal, {
  ChurchActivityData,
} from "@/components/membership-modal/ChurchActivityModal";
import OpenModalButton from "@/components/membership-modal/OpenModalButton";

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
    <div>Welcome member, click the next button to proceed.</div>
  );
  const handleChurchActivityFormSubmit = (data: ChurchActivityData): void => {
    setChurchActivityFormData(data);
    setTimeout(() => successMessage, 2000);
    handleCloseChurchActivityModal();
  };

  return (
    <section>
      <OpenModalButton onOpenModal={handleOpenChurchActivityModal} />
      {churchActivityFormData &&
        churchActivityFormData.membershipStatus &&
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
