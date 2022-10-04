import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import { FcMenu } from 'react-icons/fc'
import { ImExit } from 'react-icons/im'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPeople, BsPerson } from 'react-icons/bs'
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


  const handleLogoClick = () => {
    history.push(`/events`)
  }

  const handleProfPicClick = () => {
    history.push(`/users/${sessionUser._id}`)
  }

  const handleOwnerClick = () => {
    history.push('/events/hosting')
  }

  const handleAttendingClick = () => {
    history.push('/events/attending')
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
if (!sessionUser) return null
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
            <img className="nav-logo" src="/logo.svg" alt="logo"onClick={handleLogoClick}/>
          </div>
          <div id="nav-bar-subdiv-profpic" className="nav-bar-subdiv">
            {/* <button className='nav-bar-profpic' onClick={handleProfPicClick}><img className="nav-bar-huey" src="/demoprofpic.png" alt="prof" /></button> */}
            <button className='nav-bar-profpic' onClick={handleProfPicClick}><img className="nav-bar-huey" src={sessionUser.photoUrl} alt="prof" /></button>

            <span className="nav-bar-profpic-name">{sessionUser.firstName}</span>
          </div>
          <div className="nav-bar-links-container">
            {/* <div className="nav-bar-links-spacer"></div>
            <div className="nav-bar-links-spacer"></div>
            <div className="nav-bar-links-spacer"></div> */}
            <div className='nav-bar-links-laptop'>
              <NavLink className="nav-bar-links" to='/events'>Home</NavLink>
            </div>
            <div className='nav-bar-links-laptop'>
              <NavLink className="nav-bar-links" to={`/users/${sessionUser._id}`}>Profile</NavLink>
            </div>
            <div className='nav-bar-links-laptop'>
              <NavLink className="nav-bar-links" to={"/events/hosting"}>Hosting</NavLink>
            </div>
            <div className='nav-bar-links-laptop'>
              <NavLink className="nav-bar-links" to={"/events/attending"}>Attending</NavLink>
            </div>
            <div className='nav-bar-links-phone'>
              <button className='nav-bar-links-phone-home' onClick={handleLogoClick}><AiOutlineHome className='nav-bar-phone-icon'/></button>
            </div>
            <div className='nav-bar-links-phone'>
              <button className='nav-bar-links-phone-owner' onClick={handleOwnerClick}><BsPerson className='nav-bar-phone-icon'/></button>
            </div>
            <div className='nav-bar-links-phone'>
              <button className='nav-bar-links-phone-attending' onClick={handleAttendingClick}><BsPeople className='nav-bar-phone-icon'/></button>
            </div>
          </div>
          <div className="nav-bar-logout">
            <div id="nav-bar-logout" onClick={logoutUser}><button className='nav-bar-logout-button'><RiLogoutBoxRLine /></button>Log Out</div>
          </div>
          <div className='nav-bar-links-phone'>
            <button className='nav-bar-logout-button' onClick={logoutUser}><RiLogoutBoxRLine className='nav-bar-phone-icon'/></button>
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