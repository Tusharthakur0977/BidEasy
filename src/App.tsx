import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './Context/AuthContext';
import { VendorProvider } from './Context/VendorContext';
import Routing from './Routes';
import { ModalProvider } from './Context/ModalContext';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();
function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ModalProvider>
            <VendorProvider>
              <Routing />
              <Toaster />
            </VendorProvider>
          </ModalProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
