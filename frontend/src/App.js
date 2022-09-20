
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import SplashPage from './components/SplashPage/SplashPage';
import LoginForm from './components/SessionForms/LoginForm';
import SignupForm from './components/SessionForms/SignupForm';

import { getCurrentUser } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />
        {/* <ProtectedRoute exact path="/feed" component={EventsIndex}/>
        <ProtectedRoute exact path="/events/:eventId" component={EventShow} />
        <ProtectedRoute exact path="/events/new" component={NewEventForm} />
        <ProtectedRoute exact path="/users/:userId" component={UserShow} />
        <ProtectedRoute exact path="/users/:userId/messages" component={UserMessages} />
        <ProtectedRoute exact path="/users/:userId/messages/:senderId" component={Conversation} /> */}
        <Redirect to="/" />
      </Switch>
    </>
  );
}


export default App;