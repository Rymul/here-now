import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SessionForm.css';
import { signup, clearSessionErrors } from '../../store/session';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function SignupForm () {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDay, setBirthDay] = useState(new Date());
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

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
    setBirthDay(nextValue)
  }

  const usernameSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      firstName,
      lastName,
      birthDay,
      password
    };

    dispatch(signup(user)); 
  }

  return (
    <form className="session-form" onSubmit={usernameSubmit}>
      <h2>Sign Up Form</h2>
      <div className="errors">{errors?.firstName}</div>
      <label>
        {/* <span>First Name</span> */}
        <input type="text"
          value={firstName}
          onChange={update('firstName')}
          placeholder="First Name"
        />
      </label>
      <div className="errors">{errors?.lastName}</div>
      <label>
        {/* <span>Last Name</span> */}
        <input type="text"
          value={lastName}
          onChange={update('lastName')}
          placeholder="Last Name"
        />
      </label>
      <div className="errors">{errors?.email}</div>
      <label>
        {/* <span>Email</span> */}
        <input type="text"
          value={email}
          onChange={update('email')}
          placeholder="Email"
        />
      </label>
      <div className='birthday'></div>
      <label>
        <span>Birthday</span>
        <Calendar 
          onChange={handleDate}
        />
      </label>
      <div className="errors">{errors?.password}</div>
      <label>
        {/* <span>Password</span> */}
        <input type="password"
          value={password}
          onChange={update('password')}
          placeholder="Password"
        />
      </label>
      <div className="errors">
        {password !== password2 && 'Confirm Password field must match'}
      </div>
      <label>
        {/* <span>Confirm Password</span> */}
        <input type="password"
          value={password2}
          onChange={update('password2')}
          placeholder="Confirm Password"
        />
      </label>
      <input
        type="submit"
        value="Sign Up"
        disabled={!email || !firstName || !lastName || !birthDay || !password || password !== password2}
      />
    </form>
  );
}

export default SignupForm;