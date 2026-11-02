import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import MinecraftServer from './pages/minecraftServer';

export default function App() {
    const path = window.location.pathname;

    return (
        <BrowserRouter>
            {path !== '/' && (
                <button
                    onClick={() => window.history.back()}
                    className="py-16 fixed top-4 left-4 z-50 rounded-full bg-slate-900/70 p-2 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:shadow-xl hover:shadow-violet-950/20"
                >
                    ←
                </button>
            )}

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/minecraft-server" element={<MinecraftServer />} />
            </Routes>
        </BrowserRouter>
    )
}