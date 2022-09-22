
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';

import SplashPage from './components/SplashPage/SplashPage';
import LoginForm from './components/SessionForms/LoginForm';
import SignupForm from './components/SessionForms/SignupForm';
import EventsIndex from './components/Events/EventsIndex';

import { getCurrentUser } from './store/session';
import UserShow from './components/Users/UserShow';
import { NewEventForm } from './components/Events/NewEventForm';
import UpdateUserForm from './components/Users/UpdateUserForm';
import EventShow from './components/Events/EventShow';
import CommentsForm from './components/Comments/CommentsForm';
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
        <ProtectedRoute exact path="/events/new" component={NewEventForm} />
        <ProtectedRoute exact path="/events" component={EventsIndex} />
        <ProtectedRoute exact path="/events/:eventId" component={EventShow} />
        <ProtectedRoute exact path="/events/:eventId/comment" component={CommentsForm} />
        {/* <ProtectedRoute exact path="/feed" component={EventsIndex}/>
        <ProtectedRoute exact path="/events/new" component={NewEventForm} /> */}
        <ProtectedRoute exact path="/users/:userId" component={UserShow} />
        <ProtectedRoute exact path="/users/update/:userId" component={UpdateUserForm} />
        {/* <ProtectedRoute exact path="/users/:userId/messages" component={UserMessages} />
        {/* <ProtectedRoute exact path="/users/:userId/messages/:senderId" component={Conversation} /> */}
        <Redirect to="/" />
      </Switch>
    </>
  );
}


export default App;