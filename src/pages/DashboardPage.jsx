import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserData } from "../hooks/useUserData";

const features = [
    { title: "Checklist", path: "/checklist" },
    { title: "Chatbot", path: "/chatbot" },
    { title: "Service Map", path: "/map" },
];

export default function DashboardPage() {
    const { user } = useAuth0();
    const { userData } = useUserData();
    const navigate = useNavigate();

    const city = userData?.city || "Canada";
    const firstName = user?.given_name || user?.name?.split(" ")[0] || "there";

    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
                <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a1a1a' }} className="text-6xl font-light leading-tight">
                    Welcome to {city},<br />{firstName}.
                </h1>
                <p style={{ fontFamily: 'Jost, sans-serif', color: '#6b6b6b' }} className="text-lg font-light tracking-wide">
                    What can we help you with today?
                </p>
            </div>

            <div className="flex flex-row gap-4">
                {features.map(f => (
                    <button
                        key={f.path}
                        onClick={() => navigate(f.path)}
                        style={{
                            border: '1px solid #d4cfc4',
                            fontFamily: 'Jost, sans-serif',
                            color: '#1a1a1a',
                            backgroundColor: '#FAF9F2'
                        }}
                        className="px-10 py-5 rounded-2xl text-sm font-light tracking-widest uppercase hover:border-red-800 hover:text-red-800 transition-all"
                    >
                        {f.title}
                    </button>
                ))}
            </div>
        </div>
    );
}