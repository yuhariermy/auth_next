import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";

import { images } from "../../constants";
// import achievement from "../../public/assets/achievement.png"

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const TestModals: React.FC<Props> = ({ title, isOpen, onClose, children }) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };
// const TestModals = () => {
  return (
    <>
            {
                isOpen ? (
                    <div className={'modal'}>
                        <div
                            ref={outsideRef}
                            className={'modal__overlay'}
                            onClick={handleCloseOnOverlay}
                        />
                        <div className={'modal__box'}>
                            <button
                                className={'modal__close'}
                                onClick={onClose}
                            >
                                <AiFillCloseCircle />
                            </button>
                            <div className={'modal__title'}>
                                {title}
                            </div>
                            <div className={'modal__content'}>
                                {children}
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
  );
};

export default TestModals;
