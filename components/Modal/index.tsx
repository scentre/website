import React from 'react'
import { classNames } from '../../utils/classnames';

interface ModalProps {
  children?: any;
  isOpen?: boolean;
}

export default function Modal({ children, isOpen }: ModalProps) {
  return (
    <div className={classNames(!isOpen ? "hidden" : "block")}>
      <div className="fixed h-screen w-full left-0 top-0 bg-bgAsh modal z-50 flex items-center justify-center">
        <div className="fixed">{children}</div>
      </div>
    </div>
  );
}

