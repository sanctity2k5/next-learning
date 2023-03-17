import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../components/Layout";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    buttonText: "Register",
    success: "",
  });

  const { name, email, password, error, buttonText, success } = state;
  
  const handleChange = (name) => (e) => {
    setState({...state, [name]: e.target.value, error: '', success:'', buttonText: 'Register' })
  }

  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault()
    router.push('/login')
  }
  
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input onChange={handleChange('name')} type="text" className="form-control" value={name} placeholder="Name" />
      </div>
      <div className="form-group">
        <input onChange={handleChange('email')} type="text" className="form-control" value={email} placeholder="Email" />
      </div>
      <div className="form-group">
        <input onChange={handleChange('password')} type="text" className="form-control" value={password} placeholder="Password" />
      </div>
      <div className="form-group">
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>
    </form>
  );

  return (
  <Layout>
  <div className="col-md-6 offset-md-3">
    <h1>Register</h1> <br /> {registerForm()}
  </div>
</Layout>
  );
};


export default Register;
