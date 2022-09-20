import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import { FcMenu } from 'react-icons/fc'


function NavBar () {
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  
  const logoutUser = e => {
      e.preventDefault();
      dispatch(logout());
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

  return (
    <>
      {/* <h1>Chirper</h1>
      { getLinks() } */}

      <div className="nav-bar">
        <div id="nav-bar-hamburger-subdiv" className="nav-bar-subdiv">
          <FcMenu className="nav-bar-hamburger" />
        </div>
        <div id="nav-bar-subdiv-logo" className="nav-bar-subdiv">
          <img className="nav-logo" src="/logo.svg" alt="logo" />
        </div>
        <div id="nav-bar-subdiv-profpic" className="nav-bar-subdiv">
          <button className='nav-bar-profpic'><img className="nav-bar-huey" src="/demoprofpic.png" alt="prof" /></button>
        </div>
      </div>
    </>
  );
}

export default NavBar;