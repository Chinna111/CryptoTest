import * as S from './styles';

import Logo from '../../assets/logo.png';
import IconReact from '../../assets/react.svg';
import IconMegamen from '../../assets/megamen.png';
import IconMario from '../../assets/mario.png';
import IconTurtle from '../../assets/turtle.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import Home from '../../Screens/Home/Home';
import LoginScreen from '../../Screens/Auth/Login/login';
import SignUpScreen from '../../Screens/Auth/SignUp/signUp';
import MarketData from '../../Screens/MarketData/marketdata';


type Props = {
  open: boolean;
};

function RightNav(props: Props) {
  return (
    <Router>
      <S.Ul open={props.open}>
        <S.LogoUl src={Logo} alt={'Gustavo Scarpim'} />


        <NavLink
          to='/'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <S.Li>Home</S.Li>
        </NavLink>


        <NavLink
          to='/login'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <S.Li>Login</S.Li>
        </NavLink>


        <NavLink
          to='/signUp'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <S.Li>SignUp</S.Li>
        </NavLink>

        <NavLink
          to='/marketdata'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <S.Li>MarketData</S.Li>
        </NavLink>
      </S.Ul>

      <Switch>
        <Route exact path='/' component = {Home}>
          <Home />
        </Route>

        <Route exact path='/login' component = {LoginScreen}>
          <LoginScreen />
        </Route>

        <Route exact path='/signUp'>
          <SignUpScreen />
        </Route>

        <Route exact path='/marketdata'>
          <MarketData/>
        </Route>

        <Redirect to='/home' />
      </Switch>
    </Router>
  );
}

export default RightNav;
