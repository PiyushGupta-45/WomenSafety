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
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg w-80 md:w-96 text-center">
                <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
                <GoogleOAuthProvider clientId={clientId}>
                    <div className="pt-4">
                        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
                    </div>
                </GoogleOAuthProvider>
            </div>
        </div>
    );
}

export default Signin;
