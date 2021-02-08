import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom';
import { Spinner, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';

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
import GerarCobranca from 'pages/LinkQRcode/GerarCobranca';
import ForgotPassword from 'pages/ForgotPassword';

// auth
import { useAuth } from 'hooks/useAuth';
import api from 'api';
import Cookies from 'js-cookie';
import { SalesProvider } from 'pages/Vendas/SalesContext';
import { TransfersProvider } from 'pages/Transferencias/TransfersContext';
import { BoletoProvider } from 'pages/Boletos/BoletoContext';
import { LinkProvider } from 'pages/LinkQRcode/LinkContext';
import { HomeProvider } from 'pages/Home/HomeContext';

function CustomRoute({ isPrivate, ...rest }) {
  const {
    loading,
    authenticated,
    handleLogout,
    setAuthenticated,
    setLoading
  } = useAuth();
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    // redirect if status code is 401
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          handleLogout();
        }
        return error;
      }
    );

    // get token from cookies & set authenticated
    const token = Cookies.get('tipay_token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      setLoading(false);

      if (pathname === '/login') history.push('/dashboard');
      if (pathname !== '/login') history.push(pathname);
    }
    if (!token) {
      setAuthenticated(false);
      setLoading(false);
    }
  }, [setLoading, setAuthenticated, handleLogout, history, pathname]);

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" h="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (isPrivate && !authenticated) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          search: `?redirected=true`,
          state: { ref: pathname }
        }}
      />
    );
  }

  return <Route {...rest} />;
}

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/dashboard" />
    <CustomRoute
      isPrivate
      exact
      path="/dashboard"
      component={() => (
        <HomeProvider>
          <Home />
        </HomeProvider>
      )}
    />

    <CustomRoute
      isPrivate
      exact
      path="/vendas"
      component={() => (
        <SalesProvider>
          <Vendas />
        </SalesProvider>
      )}
    />

    <CustomRoute
      isPrivate
      exact
      path="/boletos"
      component={() => (
        <BoletoProvider>
          <Boletos />
        </BoletoProvider>
      )}
    />
    <CustomRoute
      isPrivate
      exact
      path="/boletos/gerar-boleto"
      component={GerarBoleto}
    />
    <CustomRoute
      isPrivate
      exact
      path="/link-qrcode"
      component={() => (
        <LinkProvider>
          <LinkQRcode />
        </LinkProvider>
      )}
    />
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
      component={() => (
        <TransfersProvider>
          <Transferencias />
        </TransfersProvider>
      )}
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
    <CustomRoute exact path="/esqueci-minha-senha" component={ForgotPassword} />
  </Switch>
);

export default Routes;
