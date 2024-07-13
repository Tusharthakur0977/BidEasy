import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './Context/AuthContext';
import { ModalProvider } from './Context/ModalContext';
import Routing from './Routes';

const queryClient = new QueryClient();
function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ModalProvider>
            <Routing />
            <Toaster />
          </ModalProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
