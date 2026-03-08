import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
    const { logout } = useAuth0();
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Menu button — always visible top right */}
            <button
                onClick={() => setOpen(!open)}
                style={{ fontFamily: 'Jost, sans-serif', color: '#1a1a1a' }}
                className="fixed top-6 right-8 z-50 text-sm font-light tracking-widest uppercase hover:opacity-50 transition-opacity"
            >
                {open ? "Close" : "Menu"}
            </button>

            {/* JustLanded logo — always visible top left */}
            <Link to="/dashboard" className="fixed top-5 left-8 z-50">
                <span style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a1a1a' }} className="text-2xl font-light tracking-wide">
                    JustLanded
                </span>
            </Link>

            {/* Slide-down menu overlay */}
            {open && (
                <div
                    style={{ backgroundColor: '#FAF9F2', borderBottom: '1px solid #e8e4d9' }}
                    className="fixed top-0 left-0 w-full z-40 flex flex-col items-start px-12 pt-24 pb-10 gap-6"
                >
                    <Link
                        to="/checklist"
                        onClick={() => setOpen(false)}
                        style={{ color: '#1a1a1a', fontFamily: 'Cormorant Garamond, serif' }}
                        className="text-4xl font-light hover:opacity-50 transition-opacity"
                    >
                        Checklist
                    </Link>
                    <Link
                        to="/chatbot"
                        onClick={() => setOpen(false)}
                        style={{ color: '#1a1a1a', fontFamily: 'Cormorant Garamond, serif' }}
                        className="text-4xl font-light hover:opacity-50 transition-opacity"
                    >
                        Chatbot
                    </Link>
                    <Link
                        to="/map"
                        onClick={() => setOpen(false)}
                        style={{ color: '#1a1a1a', fontFamily: 'Cormorant Garamond, serif' }}
                        className="text-4xl font-light hover:opacity-50 transition-opacity"
                    >
                        Service Map
                    </Link>
                    <button
                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        style={{ color: '#A50E06', fontFamily: 'Jost, sans-serif' }}
                        className="text-sm font-light tracking-widest uppercase mt-4 hover:opacity-50 transition-opacity"
                    >
                        Logout
                    </button>
                </div>
            )}
        </>
    );
}