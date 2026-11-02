
const nav = [
    {
        name: "Minecraft Server",
        description: "Gerencie e acompanhe seu servidor Minecraft.",
        link: "/minecraft-server",
        icon: "🎮",
    },
    {
        name: "Chatbot",
        description: "Acesse seu assistente virtual.",
        link: "/chatbot",
        icon: "🤖",
    },
    {
        name: "Anotações",
        description: "Organize suas ideias e anotações.",
        link: "/notes",
        icon: "📝",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <header className="mb-12">
                    <span className="text-sm font-medium text-violet-400 uppercase tracking-widest">
                        Dashboard
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold mt-3">
                        Bem-vindo de volta.
                    </h1>
                </header>

                {/* Navigation */}
                <nav>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {nav.map((item) => (
                            <li key={item.link}>
                                <a
                                    href={item.link}
                                    className="group block h-full rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:bg-slate-900 hover:shadow-xl hover:shadow-violet-950/20"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-3xl">
                                            {item.icon}
                                        </div>

                                        <span className="text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-violet-400">
                                            →
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-semibold group-hover:text-violet-400 transition-colors">
                                        {item.name}
                                    </h2>

                                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                        {item.description}
                                    </p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer */}
                <footer className="mt-16 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
                    Personal Dashboard © {new Date().getFullYear()}
                </footer>

            </div>
        </main>
    );
}
