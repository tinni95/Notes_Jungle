import React from "react";
import "./header.style.jsx";

import {
  OptionContainer,
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionDiv,
} from "./header.style";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.util.js";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionContainer>
        {currentUser ? (
          <>
            <OptionLink to="/profile">Profile</OptionLink>
            <OptionDiv onClick={() => auth.signOut()}>Logout</OptionDiv>
          </>
        ) : (
          <OptionLink to="/sign">Log In</OptionLink>
        )}
      </OptionContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
