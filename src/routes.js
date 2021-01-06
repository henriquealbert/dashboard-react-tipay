import { Route, Switch, Redirect } from 'react-router-dom';

// pages
import Home from 'pages/Home';
import Login from 'pages/Login';
import Vendas from 'pages/Vendas';
import Boletos from 'pages/Boletos';
import LinkQRcode from 'pages/LinkQRcode';
import Transferencias from 'pages/Transferencias';
import Calendario from 'pages/Calendario';

// auth
import { useAuthContext } from 'hooks/useAuthContext';
import MeuPerfil from 'pages/MeuPerfil';
import MeuPlano from 'pages/MeuPlano';
import Atendimento from 'pages/Atendimento';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useAuthContext();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}

const Routes = () => (
  <Switch>
    <CustomRoute isPrivate exact path="/" component={Home} />
    <CustomRoute isPrivate exact path="/vendas" component={Vendas} />
    <CustomRoute isPrivate exact path="/boletos" component={Boletos} />
    <CustomRoute isPrivate exact path="/link-qrcode" component={LinkQRcode} />
    <CustomRoute
      isPrivate
      exact
      path="/transferencias"
      component={Transferencias}
    />
    <CustomRoute isPrivate exact path="/calendario" component={Calendario} />
    <CustomRoute isPrivate exact path="/meu-perfil" component={MeuPerfil} />
    <CustomRoute isPrivate exact path="/meu-plano" component={MeuPlano} />
    <CustomRoute isPrivate exact path="/atendimento" component={Atendimento} />
    <CustomRoute exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
