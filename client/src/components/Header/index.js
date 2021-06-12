import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import image from "../../assets/logo.png";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className=" mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>
            <img src={image} height={50} width={50} alt="logo" />
            BARTERMART
          </h1>
        </Link>
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/">Barter</Link>
              <Link to="/profile">Account</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/profile">Profile</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Header;
