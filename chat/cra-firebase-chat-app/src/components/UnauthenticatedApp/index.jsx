import {useAuth} from '../../hooks/useAuth';
import './styles.css';

const UnauthenticatedApp = () => {
  const {login} = useAuth();

  return (
    <>
      <h2>Log in to join a chat room!</h2>
      <div>
        <button onClick={login}>Log with Google</button>
      </div>
    </>
  );
};

export {UnauthenticatedApp};
