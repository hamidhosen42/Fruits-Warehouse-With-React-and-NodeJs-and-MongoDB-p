import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { Card } from "react-bootstrap";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
        return (
          <div className="bg-info p-5">
            <Card className="text-center mx-auto w-50 bg-black p-5">
              <h3 className="text-danger">Your Email is not verified!!</h3>
              <h5 className="text-white mt-3">
                {" "}
                Please Verify your email address
              </h5>
              <button
                className="btn btn-info fw-bold text-dark mt-3"
                onClick={async () => {
                  await sendEmailVerification();
                  toast("Sent email");
                }}
              >
                Send Verification Email Again
              </button>
            </Card>
            <ToastContainer></ToastContainer>
          </div>
        );
    }

    return children;
};

export default RequireAuth;