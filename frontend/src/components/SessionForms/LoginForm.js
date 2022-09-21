import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SessionForm.css';

import { login, clearSessionErrors } from '../../store/session';
import { Link } from 'react-router-dom';


function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    const setState = field === 'email' ? setEmail : setPassword;
    return e => setState(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })); 
  }

  return (
    <div className='session-form-container'>
    <form className="session-form" onSubmit={handleSubmit}>
      <h2 id="session-form-title">Log In</h2>
      { errors ? <div className="errors">{errors?.email}</div> : null }
      {/* <label>
        <span>Email</span> */}
        <input 
          id="session-form-input"
          type="text"
          value={email}
          onChange={update('email')}
          placeholder="Email"
        />
      {/* </label> */}
      { errors ? <div className="errors">{errors?.password}</div> : null }
      {/* <label> */}
        {/* <span>Password</span> */}
        <input 
          id="session-form-input"
          type="password"
          value={password}
          onChange={update('password')}
          placeholder="Password"
        />
      {/* </label> */}
      <input
        id="session-form-submit-button"
        type="submit"
        value="Log In"
        disabled={!email || !password}
      />
    </form>
    <div className="session-form-footer">
        <span className='session-form-footer-title'>Don't have an account?</span>
        <Link className="to-signup-button" to={'/signup'}> Sign up!</Link>
    </div>
    </div>
  );
}

export default LoginForm;