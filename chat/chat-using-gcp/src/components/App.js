import {useAuth} from '../hooks/useAuth';
import {AuthenticatedApp} from './AuthenticatedApp';
import {UnauthenticatedApp} from './UnauthenticatedApp';

const App = () => {
  const {user} = useAuth();

  return (
    <div className="container">
      <h1>💬 Chat Room</h1>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
};

export default App;
