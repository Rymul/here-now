import { Link } from 'react-router-dom';


function SplashPage() {
    return (
      <>
        <p>SplashPage Log in or LEAVE!</p>
        <div className="links-auth">
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
        <footer>
          What should we put here?
        </footer>
      </>
    );
  }
  
  export default SplashPage;