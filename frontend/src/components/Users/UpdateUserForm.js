import '../SessionForms/SessionForm.css'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup, clearSessionErrors } from '../../store/session';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { fetchUser, getUser, updateUser } from '../../store/users';
import { useHistory, useParams } from 'react-router-dom';

function UpdateUserForm () {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const errors = useSelector(state => state.errors.session);
    const dispatch = useDispatch();
    const { userId } = useParams();
    const history = useHistory();
    const date = new Date();
    const limit = new Date(date.setFullYear(date.getFullYear() - 18));
    const start =  new Date(limit - (24 * 60 * 60 * 1000));

    useEffect(()=> {
        dispatch(fetchUser(userId))
    }, [userId])
    const user = useSelector(getUser(userId))

    useEffect(()=> {
        if (!user) return
        setEmail(user.email);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setBirthDay(user.birthDay);
    }, [user])

    

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
      password,
      _id: userId

    };

    dispatch(updateUser(user)).then(res => history.push(`/users/${userId}`)); 
  }

  if(!user) return null
  return (
    <div className='session-form-container'>
    <form className="session-form" onSubmit={usernameSubmit}>
      <h2 id="session-form-title">Update Profile</h2>
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
            defaultValue={birthDay}
          />
        </div>
        <input
          id="session-form-submit-button"
          type="submit"
          value="Update Profile"
          // disabled={!email || !firstName || !lastName || !birthDay || !password || password !== password2}
        />
        <input
          id="session-form-submit-button"
          type="button"
          value="Cancel"
          onClick={() => history.push(`/users/${userId}`)}
          // disabled={!email || !firstName || !lastName || !birthDay || !password || password !== password2}
        />
    </form>
    </div>
  );
}

export default UpdateUserForm;