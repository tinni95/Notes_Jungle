import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInAndSignUp from "./pages/signin-and-sign-up/signin-and-sign-up.component";
import HomePage from "./pages/home/homepage.component";
import Header from "./components/header/header.component";
import { createUserProfileDocument, auth } from "./firebase/firebase.util";
import Profile from "./pages/profile/profile.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route
            exact
            path="/sign"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          ></Route>
          <Route
            exact
            path="/profile"
            render={() =>
              this.state.currentUser ? <Profile /> : <Redirect to="/" />
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
