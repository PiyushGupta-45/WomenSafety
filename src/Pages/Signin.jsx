import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


    
  

const Signin = () => {
    if (!clientId) {
      console.error("Google Client ID is missing! Check .env file.");
      return <p style={{ color: "red" }}>Error: Missing Google Client ID</p>;
    }
    
    const handleSuccess = (response) => {
      console.log("Login Success:", response);
    };
    
    const handleFailure = (error) => {
      console.error("Login Failed:", error);
    };
  return (
    <>
    <div>Signin</div>
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex justify-center items-center min-h-screen">
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </div>
    </GoogleOAuthProvider>
    </>
  )
}

export default Signin