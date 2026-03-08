import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div style={{ backgroundColor: '#FAF9F2' }} className="min-h-screen flex flex-col items-center justify-center px-6">
            <div className="flex flex-col items-center max-w-xl w-full gap-8 text-center">

                {/* iMessage bubble */}
                <div style={{ backgroundColor: '#B8C5D0' }} className="px-12 py-8 rounded-3xl rounded-tl-sm inline-block">
                    <p style={{ color: '#1a1a1a' }} className="text-4xl font-semibold tracking-wide">
                        Just landed.
                    </p>
                </div>

                {/* Tagline */}
                <p style={{ color: '#6b6b6b' }} className="text-xl font-light leading-relaxed">
                    Your personalized guide to settling in Canada.
                </p>

                {/* CTA Button */}
                <button
                    onClick={() => loginWithRedirect()}
                    style={{ backgroundColor: '#A50E06' }}
                    className="px-10 py-4 rounded-2xl text-white font-light tracking-widest text-sm uppercase hover:opacity-90 transition-opacity"
                >
                    Get Started
                </button>

            </div>
        </div>
    );
}