import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
    const { logout } = useAuth0();
    return (
        <nav style={{ backgroundColor: '#A50E06' }} className="px-12 py-5 flex justify-between items-center">
            <Link to="/dashboard">
                <span style={{ color: '#FAF9F2' }} className="text-2xl font-light tracking-wide">
                    JustLanded
                </span>
            </Link>
            <div className="flex gap-10 items-center">
                <Link to="/checklist" style={{ color: '#FAF9F2' }} className="text-sm font-light tracking-widest uppercase hover:opacity-70 transition-opacity">Checklist</Link>
                <Link to="/chatbot" style={{ color: '#FAF9F2' }} className="text-sm font-light tracking-widest uppercase hover:opacity-70 transition-opacity">Chatbot</Link>
                <Link to="/map" style={{ color: '#FAF9F2' }} className="text-sm font-light tracking-widest uppercase hover:opacity-70 transition-opacity">Service Map</Link>
                <button
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                    style={{ border: '1px solid #FAF9F2', color: '#FAF9F2' }}
                    className="px-5 py-2 rounded-xl text-sm font-light tracking-widest uppercase hover:opacity-70 transition-opacity"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}