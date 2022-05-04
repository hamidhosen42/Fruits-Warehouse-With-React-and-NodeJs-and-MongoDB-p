import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';
import { Card } from 'react-bootstrap';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { toast } from 'react-toastify';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    const [token] = useToken(user);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate("/home");

        toast("Register Complete.");
    }

    return (
      <div className="register-form bg-info pt-5 pb-5">
        <PageTitle title="Register"></PageTitle>
        <Card className="container w-50 mx-auto shadow-lg rounded-3 bg-dark text-white p-4">
          <h2 className="text-white text-center mt-4 mb-4">PLEASE REGISTER</h2>
          <form onSubmit={handleRegister}>
            <input
              className="p-2"
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
            />
            <input
              className="p-2"
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
              required
            />

            <input
              className="p-2"
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />
            <input
              className="bg-info mt-3 text-white  w-50 mx-auto d-block mb-3 fw-bold"
              type="submit"
              value="REGISTER"
            />
          </form>
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="btn btn-link text-info pe-auto text-decoration-none"
              onClick={navigateLogin}
            >
              Please Login
            </Link>{" "}
          </p>
          <SocialLogin></SocialLogin>
        </Card>
      </div>
    );
};

export default Register;