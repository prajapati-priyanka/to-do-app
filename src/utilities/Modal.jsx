import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as SvgX } from "../assets/x.svg";

const ModalContent = ({ children, onClose, title }) => {
  const closeModalHandler = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="xl:text-base sm:text-sm text-xs fixed bg-slate-600/[.2] w-full h-full z-40 grid place-items-center px-2 text-slate-600"
      onClick={closeModalHandler}
    >
      <section className="relative bg-slate-200 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start">
        <button
          aria-label="close alert"
          className="absolute right-3 sm:right-4"
          onClick={onClose}
        >
          <SvgX />
        </button>
        <h2 className="font-medium mb-5 text-lg md:text-2xl">{title}</h2>
        {children}
      </section>
    </div>
  );
};

const modalElement = document.getElementById("modal")

const Modal = ({ children, onClose, title }) => {
  return ReactDOM.createPortal(
    <ModalContent children={children} onClose={onClose} title={title} />,
    modalElement
  );
};

export default Modal;
