import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    // const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("isLoading:", isLoading, "isAuthenticated:", isAuthenticated);
        if(!isLoading && isAuthenticated) {
            navigate("/onboarding");
        }
    }, [isAuthenticated, isLoading]);

    console.log("domain:", import.meta.env.VITE_AUTH0_DOMAIN);
    console.log("clientId:", import.meta.env.VITE_AUTH0_CLIENT_ID);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-700 text-white">
            <h1 className="text-5xl font-bold mb-4">🍁 NewStart Canada</h1>
            <p className="text-xl mb-8 opacity-90">Your personalized guide to settling in Canada.</p>
            <button
                onClick={() => loginWithRedirect()}
                className="bg-white text-red-700 px-8 py-3 rounded-xl font-semibold text-lg hover:bg-red-50"
            >
                Get Started
            </button>
            <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="mt-4 text-white underline text-sm"
            >
                Log out (test)
            </button>
        </div>
    );
}