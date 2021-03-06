import {Route,BrowserRouter as Router,Switch,withRouter} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import NavBar from "./Components/NavBar";
import ContactUs from "./Components/ContactUs";
import UserDashboard from "./Components/UserDashboard";
import AboutUs from "./Components/AboutUs";
import { formContext } from "./Contexts";
import { useContext, useEffect } from "react";

// import { EmptyLayout, LayoutRoute, MainLayout } from './Components/Layout';

const App = () => {
  const {isSignedIn} = useContext(formContext);
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={withRouter(LandingPage)} />
          <Route exact path="/LandingPage" component={withRouter(LandingPage)} />
          <Route exact path="/contact" component={withRouter(ContactUs)}/>
          <Route exact path="/login" component={withRouter(Login)} />
          <Route exact path="/aboutUs" component={withRouter(AboutUs)} />
          {isSignedIn ? (<Route exact path="/UserDashboard" component={withRouter(UserDashboard)} />) : ( <Route exact path="/UserDashboard" component={withRouter(LandingPage)} />)}
          {isSignedIn && <Route exact path="/home" component={withRouter(UserDashboard)} />}
        </Switch>
      </Router>
    </>
  );
};
export default App;