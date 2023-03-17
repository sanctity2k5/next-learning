import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { signIn, signOut, useSession } from "next-auth/react";



Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };
  
  Router.onRouteChangeError = () => {
    // hanlde the error
    NProgress.done();
  };
  

const Layout = ({ children }) => {
  const { data: session } = useSession()
  
  const head = () => (
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
        crossOrigin="anonymous"
      />
  );
  const nav = () => (
    <ul className="nav nav-tabs bg-warning">
      <li className="nav-item">
        <Link className="nav-link text-dark" href="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" href="/">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" href="/courses">
          Courses
        </Link>
      </li>
      {session && (
        <li className="nav-item mr-auto">
        <Link className="nav-link text-dark" href="/dashboard">
          Dashboard
        </Link>
      </li>
      )}
     
      {!session && (
        <li className="nav-item ml-auto">
        <Link className="nav-link text-dark" href="/api/auth/signin" onClick={(e) => {e.preventDefault(); signIn('github')}}>
          Login
        </Link>
      </li>
      )}
     {session && (
      <li className="nav-item">
        <Link className="nav-link text-dark" href="/api/auth/signout" onClick={(e) => {e.preventDefault(); signOut('github')}}>
          Logout
        </Link>
      </li>
     )}
      
    </ul>
  );

  return (
    <React.Fragment>
      {head()} {nav()} <div className="container pt-5 pb-5"> {children} </div>
    </React.Fragment>
  );
};

export default Layout;
