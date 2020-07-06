import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInAndSignUp from "./pages/signin-and-sign-up/signin-and-sign-up.component";
import HomePage from "./pages/home/homepage.component";
import University from "./pages/university/university.component";
import Header from "./components/header/header.component";
import { createUserProfileDocument, auth } from "./firebase/firebase.util";
import Profile from "./pages/profile/profile.component";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import NotePage from "./pages/note/note.component";

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
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/university/:id" component={University}></Route>
          <Route exact path="/module/:id" component={NotePage}></Route>
          <Route exact path="/note/:id" component={NotePage}></Route>
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          ></Route>
          <Route
            exact
            path="/profile"
            render={() =>
              this.props.currentUser ? <Profile /> : <Redirect to="/" />
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
