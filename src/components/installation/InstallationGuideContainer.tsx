import React, { useState } from 'react';
import FloatingButton from './FloatingButton';
import Modal from './Modal';
import InstallationGuide from './InstallationGuide';

export default function InstallationGuideContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingButton onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <InstallationGuide />
      </Modal>
    </>
  );
}