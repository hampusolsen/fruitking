import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
const SetModalContext = createContext();

export function useModalContext() {
  return useContext(ModalContext);
}

export function useSetModalContext() {
  return useContext(SetModalContext);
}

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState();

  return (
    <ModalContext.Provider value={modal}>
      <SetModalContext.Provider value={setModal}>
        {children}
      </SetModalContext.Provider>
    </ModalContext.Provider>
  )
};
