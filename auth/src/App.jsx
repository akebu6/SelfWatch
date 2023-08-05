import { useAuth0 } from '@auth0/auth0-react';
// import LoginButton from './components/login';
// import LogoutButton from './components/Logout';
// import Profile from './components/Profile';

function App() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div>
      <header>
        <h1>My Vite React App</h1>
        {isAuthenticated ? (
          <>
            <div>
              Welcome, {user.name}!{' '}
              <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
            </div>
          </>
        ) : (
          <button onClick={loginWithRedirect}>Log In</button>
        )}
      </header>
      <main>
        {/* Your main content goes here */}
      </main>
    </div>
  );
}

export default App;
