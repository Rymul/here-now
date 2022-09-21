import './SplashPage.css'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/session';


function SplashPage() {
  const history = useHistory();
  const loggedIn = useSelector(state => !!state.session.user);
  if (loggedIn) {
    history.push('/events')
  }
    return (
      <div className='splash-page-container'>
        {/* <p>SplashPage Log in or LEAVE!</p>
        <div className="links-auth">
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
        <footer>
          What should we put here?
        </footer> */}
        <img src="/logo.svg" alt="logo" className="splash-page-logo" onClick={() => {history.push(`/login`)}} />
      </div>
    );
  }
  
  export default SplashPage;