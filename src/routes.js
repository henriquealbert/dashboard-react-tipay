import { Route, Switch, Redirect } from 'react-router-dom';

// pages
import Home from 'pages/Home';
import Login from 'pages/Login';
import Vendas from 'pages/Vendas';
import Boletos from 'pages/Boletos';
import LinkQRcode from 'pages/LinkQRcode';
import Transferencias from 'pages/Transferencias';
import Calendario from 'pages/Calendario';
import MeuPerfil from 'pages/MeuPerfil';
import MeuPlano from 'pages/MeuPlano';
import Atendimento from 'pages/Atendimento';
import ClientesAmigos from 'pages/ClientesAmigos';
import Documentos from 'pages/Documentos';
import TermosContrato from 'pages/TermosContrato';
import Sobre from 'pages/Sobre';
import GerarBoleto from 'pages/Boletos/GerarBoleto';

// auth
import { useAuthContext } from 'hooks/useAuthContext';
import GerarCobranca from 'pages/LinkQRcode/GerarCobranca';

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
    <CustomRoute isPrivate exact path="/dashboard" component={Home} />
    <CustomRoute isPrivate exact path="/vendas" component={Vendas} />
    <CustomRoute isPrivate exact path="/boletos" component={Boletos} />
    <CustomRoute
      isPrivate
      exact
      path="/boletos/gerar-boleto"
      component={GerarBoleto}
    />
    <CustomRoute isPrivate exact path="/link-qrcode" component={LinkQRcode} />
    <CustomRoute
      isPrivate
      exact
      path="/link-qrcode/gerar-cobranca"
      component={GerarCobranca}
    />
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
    <CustomRoute
      isPrivate
      exact
      path="/clientes-amigos"
      component={ClientesAmigos}
    />
    <CustomRoute isPrivate exact path="/documentos" component={Documentos} />
    <CustomRoute
      isPrivate
      exact
      path="/termos-e-contrato"
      component={TermosContrato}
    />
    <CustomRoute isPrivate exact path="/sobre" component={Sobre} />
    <CustomRoute exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
