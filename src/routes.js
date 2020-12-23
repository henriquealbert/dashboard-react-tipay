import Home from 'pages/Home';
import Login from 'pages/Login';
import { Route, Switch, Redirect } from 'react-router-dom';

function CustomRoute({ isPrivate, ...rest }) {
  // const { loading, authenticated } = useContext(Context);
  const authenticated = false;

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}

const Routes = () => (
  <Switch>
    <CustomRoute isPrivate exact path="/" component={Home} />
    <CustomRoute exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
