import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

export interface VendorContextType {
  panNumber: string;
  setPanNumber: Dispatch<SetStateAction<string>>;
  gstClassification: string;
  setGstClassification: Dispatch<SetStateAction<string>>;
  typesOfSupply: string;
  setTypesOfSupply: Dispatch<SetStateAction<string>>;
  buisnessAddress: string;
  setBuisnessAddress: Dispatch<SetStateAction<string>>;
  gstNumber: string;
  setGstNumber: Dispatch<SetStateAction<string>>;
  legalBusinessName: string;
  setLegalBusinessName: Dispatch<SetStateAction<string>>;
  companyAddress: string;
  setCompanyAddress: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  pinCode: string;
  setPinCode: Dispatch<SetStateAction<string>>;
  contactPersonName: string;
  setContactPersonName: Dispatch<SetStateAction<string>>;
  contactPersonEmail: string;
  setContactPersonEmail: Dispatch<SetStateAction<string>>;
  contactPersonNumber: string;
  setContactPersonNumber: Dispatch<SetStateAction<string>>;
  accountDeptEmail: string;
  setAccountDeptEmail: Dispatch<SetStateAction<string>>;
  salesDeptEmail: string;
  setSalesDeptEmail: Dispatch<SetStateAction<string>>;
  bankName: string;
  setBankName: Dispatch<SetStateAction<string>>;
  accountHolder: string;
  setAccountHolder: Dispatch<SetStateAction<string>>;
  accountNumber: string;
  setAccountNumber: Dispatch<SetStateAction<string>>;
  ifscCode: string;
  setIfscCode: Dispatch<SetStateAction<string>>;
  bankBranch: string;
  setBankBranch: Dispatch<SetStateAction<string>>;
  chequePhoto: any;
  setChequePhoto: Dispatch<SetStateAction<any>>;
  msmeType: string;
  setMsmeType: Dispatch<SetStateAction<any>>;
  msmeNumber: string;
  setMsmeNumber: Dispatch<SetStateAction<any>>;
  msmeCertificate: any;
  setMsmeCertificate: Dispatch<SetStateAction<any>>;
  cinNumber: string;
  setCinNumber: Dispatch<SetStateAction<any>>;
  companyRegsCertificate: any;
  setCompanyRegsCertificate: Dispatch<SetStateAction<any>>;
  authorisedDist: any;
  setAuthorisedDist: Dispatch<SetStateAction<any>>;
  drugLicense: any;
  setDrugLicense: Dispatch<SetStateAction<any>>;
  additionalLicenses: any;
  setAdditionalLicenses: Dispatch<SetStateAction<any>>;
  additionalNotes: string;
  setAdditionalNotes: Dispatch<SetStateAction<string>>;
  additionalAttachement: any;
  setadditionalAttachement: Dispatch<SetStateAction<any>>;
}

const VendorContext = createContext<VendorContextType | undefined>(undefined);

interface VendorProviderProps {
  children: ReactNode;
}

export const VendorProvider: React.FC<VendorProviderProps> = ({ children }) => {
  // Tax Info
  const [panNumber, setPanNumber] = useState('123JHJA');
  const [gstClassification, setGstClassification] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [typesOfSupply, setTypesOfSupply] = useState('');
  const [buisnessAddress, setBuisnessAddress] = useState('');

  // Basic Company Info
  const [legalBusinessName, setLegalBusinessName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [contactPersonName, setContactPersonName] = useState('');
  const [contactPersonEmail, setContactPersonEmail] = useState('');
  const [contactPersonNumber, setContactPersonNumber] = useState('');
  const [accountDeptEmail, setAccountDeptEmail] = useState('');
  const [salesDeptEmail, setSalesDeptEmail] = useState('');

  // Bank Details
  const [bankName, setBankName] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [bankBranch, setBankBranch] = useState('');
  const [chequePhoto, setChequePhoto] = useState(null);

  // Certification Section
  const [msmeType, setMsmeType] = useState('');
  const [msmeNumber, setMsmeNumber] = useState('');
  const [msmeCertificate, setMsmeCertificate] = useState(null);
  const [cinNumber, setCinNumber] = useState('');
  const [companyRegsCertificate, setCompanyRegsCertificate] = useState(null);

  // License Upload Section
  const [authorisedDist, setAuthorisedDist] = useState(null);
  const [drugLicense, setDrugLicense] = useState(null);
  const [additionalLicenses, setAdditionalLicenses] = useState(null);

  // Additional Information
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [additionalAttachement, setadditionalAttachement] = useState(null);

  return (
    <VendorContext.Provider
      value={{
        panNumber,
        setPanNumber,
        gstClassification,
        setGstClassification,
        typesOfSupply,
        setTypesOfSupply,
        buisnessAddress,
        setBuisnessAddress,
        gstNumber,
        setGstNumber,
        legalBusinessName,
        setLegalBusinessName,
        companyAddress,
        setCompanyAddress,
        city,
        setCity,
        state,
        setState,
        pinCode,
        setPinCode,
        contactPersonName,
        setContactPersonName,
        contactPersonEmail,
        setContactPersonEmail,
        contactPersonNumber,
        setContactPersonNumber,
        accountDeptEmail,
        setAccountDeptEmail,
        salesDeptEmail,
        setSalesDeptEmail,
        accountNumber,
        setAccountNumber,
        bankBranch,
        setBankBranch,
        accountHolder,
        setAccountHolder,
        bankName,
        setBankName,
        ifscCode,
        setIfscCode,
        chequePhoto,
        setChequePhoto,
        msmeType,
        setMsmeType,
        msmeNumber,
        setMsmeNumber,
        msmeCertificate,
        setMsmeCertificate,
        cinNumber,
        setCinNumber,
        companyRegsCertificate,
        setCompanyRegsCertificate,
        authorisedDist,
        setAuthorisedDist,
        drugLicense,
        setDrugLicense,
        additionalLicenses,
        setAdditionalLicenses,
        additionalNotes,
        setAdditionalNotes,
        additionalAttachement,
        setadditionalAttachement,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};

export const useVendor = () => {
  const context = useContext(VendorContext);
  if (context === undefined) {
    throw new Error('useVendor must be used within an VendorProvider');
  }
  return context;
};
