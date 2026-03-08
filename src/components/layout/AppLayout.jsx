import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function AppLayout() {
    return (
        <div style={{ backgroundColor: '#FAF9F2' }} className="min-h-screen">
            <Navbar />
            <main className="max-w-5xl mx-auto px-12 pt-24 pb-16">
                <Outlet />
            </main>
        </div>
    );
}