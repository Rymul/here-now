import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SessionForm.css';
import { signup, clearSessionErrors } from '../../store/session';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Link } from 'react-router-dom';
import { calcAge } from '../../utils/utils';

function SignupForm () {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDay, setBirthDay] = useState(new Date());
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();
  const date = new Date();
  const limit = new Date(date.setFullYear(date.getFullYear() - 18));
  const start =  new Date(limit - (24 * 60 * 60 * 1000));
  
  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = field => {
    let setState;

    switch (field) {
      case 'email':
        setState = setEmail;
        break;
      case 'firstName':
        setState = setFirstName;
        break;
      case 'lastName':
        setState = setLastName;
        break;
      // case 'birthDay':
      //   setState = setBirthDay;
      case 'password':
        setState = setPassword;
        break;
      case 'password2':
        setState = setPassword2;
        break;
      default:
        throw Error('Unknown field in Signup Form');
    }

    return e => setState(e.currentTarget.value);
  }

  const handleDate = (nextValue) => {
    
    // if (calcAge(nextValue) < 18) {
    //   alert("Age can't be below 18")
    //   return null
    // }
    setBirthDay(nextValue)
  }

  const userSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      firstName,
      lastName,
      birthDay,
      password,
      photoUrl: '/blank_user.png'
    };

    dispatch(signup(user)); 
  }
  
  

  return (
    <div className='session-form-container'>
    <form className="session-form" onSubmit={userSubmit}>
      <h2 id="session-form-title">Sign Up</h2>
      <div className="errors">{errors?.firstName}</div>
      
      
        {/* <span>First Name</span> */}
        <input 
          id="signin-form-input"
          type="text"
          value={firstName}
          onChange={update('firstName')}
          placeholder="First Name"
        />
      <div className="errors">{errors?.lastName}</div>
      
      
        {/* <span>Last Name</span> */}
        <input 
          id="signin-form-input"
          type="text"
          value={lastName}
          onChange={update('lastName')}
          placeholder="Last Name"
        />
      <div className="errors">{errors?.email}</div>
      
      
        {/* <span>Email</span> */}
        <input 
          id="signin-form-input"
          type="text"
          value={email}
          onChange={update('email')}
          placeholder="Email"
        />
      
      <div className="errors">{errors?.password}</div>
      
      
        {/* <span>Password</span> */}
        <input 
          id="signin-form-input"
          type="password"
          value={password}
          onChange={update('password')}
          placeholder="Password"
        />
      <div className="errors">
        {password !== password2 && 'Confirm Password field must match'}
      </div>
      
      
        {/* <span>Confirm Password</span> */}
        <input 
          id="signin-form-input"
          type="password"
          value={password2}
          onChange={update('password2')}
          placeholder="Confirm Password"
        />
        <div className='birthday'>
          <span id="birthday-text">Select your Birthday</span>
          <Calendar 
            onChange={handleDate}
            maxDate={limit}
            defaultActiveStartDate={start}
            id="calendar"
          />
        </div>
        <input
          id="session-form-submit-button"
          type="submit"
          value="Sign Up"
          disabled={!email || !firstName || !lastName || !birthDay || !password || password !== password2}
        />
    </form>
    <div className="session-form-footer">
        <span className='session-form-footer-title'>Have an account?</span>
        <Link className="to-signup-button" to={'/login'}> Log in!</Link>
    </div>
    </div>
  );
}

export default SignupForm;