import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './Context/AuthContext';
import { VendorProvider } from './Context/VendorContext';
import Routing from './Routes';

const queryClient = new QueryClient();
function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <VendorProvider>
            <Routing />
          </VendorProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
