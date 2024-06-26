import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export interface ModalContextType {
  inviteVendorModal: boolean;
  setInviteVendorModal: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [inviteVendorModal, setInviteVendorModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        inviteVendorModal,
        setInviteVendorModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within an ModalProvider');
  }
  return context;
};
