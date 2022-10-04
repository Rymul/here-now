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

  const handleDemoLogin = (e) => {
    e.preventDefault()
    dispatch(login({email: 'demo@user.io',password: 'password'}))
  }

  return (
    <div className='session-form-container'>
    <form className="session-form" onSubmit={handleSubmit}>
      <h2 id="session-form-title">Log In</h2>
      {/* { errors ? <div className="errors">{errors?.email}</div> : null } */}
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

      <input type="button" value='Demo Log In' id="session-form-submit-button" onClick={handleDemoLogin}/>
    </form>
    <br />
    <br />
    <div className="session-form-footer">
        <span className='session-form-footer-title'>Don't have an account? </span>
        <Link className="to-signup-button" to={'/signup'}>Sign up!</Link>
    </div>
    <div className='errors-div'>
      { errors ? <div className="errors">{errors?.email}</div> : null }
      { errors ? <div className="errors">{errors?.password}</div> : null }

    </div>
    </div>
  );
}

export default LoginForm;