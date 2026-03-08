import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div style={{ backgroundColor: '#FAF9F2' }} className="min-h-screen flex flex-col items-center justify-center px-6">
            <div className="flex flex-col items-start max-w-lg w-full gap-6">

                {/* iMessage bubble */}
                <div style={{ backgroundColor: '#B8C5D0' }} className="px-6 py-4 rounded-3xl rounded-tl-sm max-w-xs">
                    <p style={{ fontFamily: 'Jost, sans-serif', color: '#1a1a1a' }} className="text-lg font-light tracking-wide">
                        Just landed.
                    </p>
                </div>

                {/* Tagline */}
                <div className="pl-1">
                    <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a1a1a' }} className="text-5xl font-light leading-tight">
                        Your personalized guide<br />to settling in Canada.
                    </h1>
                </div>

                {/* CTA Button */}
                <button
                    onClick={() => loginWithRedirect()}
                    style={{ backgroundColor: '#A50E06', fontFamily: 'Jost, sans-serif' }}
                    className="mt-2 px-10 py-4 rounded-2xl text-white font-light tracking-widest text-sm uppercase hover:opacity-90 transition-opacity"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}