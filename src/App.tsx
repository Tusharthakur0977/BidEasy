import { AuthProvider } from './Context/AuthContext';
import Routing from './Routes';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </div>
  );
}

export default App;
