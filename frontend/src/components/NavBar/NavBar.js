import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import { FcMenu } from 'react-icons/fc'
import { ImExit } from 'react-icons/im'
import { useHistory } from 'react-router-dom';


function NavBar () {
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const history = useHistory();

  const logoutUser = e => {
      e.preventDefault();
      dispatch(logout());
      history.push(`/`)
  }

  const handleProfileClick = () => {
    history.push(`/users/${sessionUser._id}`)
  }

  const handleHomeClick = () => {
    history.push(`/events`)
  }

  // const getLinks = () => {
  //   if (loggedIn) {
  //     return (
  //       <div className="links-nav">
  //         <Link to={'/events'}>All Events</Link>
  //         <Link to={'/profile'}>Profile</Link>
  //         <Link to={'/tweets/new'}>Write a Tweet</Link>
  //         <button onClick={logoutUser}>Logout</button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="links-auth">
  //         <Link to={'/signup'}>Signup</Link>
  //         <Link to={'/login'}>Login</Link>
  //       </div>
  //     );
  //   }
  // }
if (loggedIn) {
  return (
    <>
      {/* <h1>Chirper</h1>
      { getLinks() } */}

      <div className="nav-bar">
        {/* <div id="nav-bar-hamburger-subdiv" className="nav-bar-subdiv">
          <FcMenu className="nav-bar-hamburger" onClick={logoutUser}/>
        </div> */}
        <div className="nav-bar-text-container">
          <div id="nav-bar-subdiv-logo" className="nav-bar-subdiv">
            <img className="nav-logo" src="/logo.svg" alt="logo" />
          </div>
          <div id="nav-bar-subdiv-profpic" className="nav-bar-subdiv">
            <button className='nav-bar-profpic'><img className="nav-bar-huey" src="/demoprofpic.png" alt="prof" /></button>
          </div>
          <div className="nav-bar-links-container">
            {/* <div className="nav-bar-links-spacer"></div>
            <div className="nav-bar-links-spacer"></div>
            <div className="nav-bar-links-spacer"></div> */}

            <div className="nav-bar-links" onClick={handleHomeClick}>Home</div>
            <div className="nav-bar-links" onClick={handleProfileClick}>Profile</div>
            <div className="nav-bar-links">Inbox</div>
          </div>
          <div className="nav-bar-logout">
            <div id="nav-bar-logout" onClick={logoutUser}><button className='nav-bar-logout-button'><ImExit /></button>Log Out</div>
          </div>
        </div>
      </div>
    </>
  );
          } else {
            return (
              null
            )
          }
}

export default NavBar;