import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Terminal,
    Code2,
    Globe,
    MessageSquare,
    Mail,
    Github,
    Linkedin,
    ArrowRight,
    ChevronDown,
    CheckCircle2,
    Cpu,
    Layers,
    Zap,
    Shield
} from 'lucide-react';

// VIBE Ecosystem Products
const vibeProducts = [
    {
        name: 'VIBE CLI',
        tagline: 'Multi-agent AI coding tool',
        description: 'Single-command TUI, multi-LLM router, execution modes, security-first approvals.',
        icon: Terminal,
        status: 'In Development'
    },
    {
        name: 'VIBE VS Code',
        tagline: 'Multi-agent IDE assistant',
        description: 'CLI parity, state-machine orchestration, real-time streaming chat.',
        icon: Code2,
        status: 'Planned'
    },
    {
        name: 'VIBE Web',
        tagline: 'Documentation hub',
        description: 'Documentation and onboarding hub for the entire ecosystem.',
        icon: Globe,
        status: 'Live'
    },
    {
        name: 'VIBE Chat',
        tagline: 'AI website builder',
        description: 'AI web app & website builder powered by generative agents.',
        icon: MessageSquare,
        status: 'Planned'
    }
];

// Selected Projects
const selectedProjects = [
    { name: 'Country Explorer', category: 'Web', tech: 'React', description: 'Country data exploration dashboard' },
    { name: 'Recipe Finder', category: 'Web', tech: 'Vue', description: 'Recipe discovery application' },
    { name: 'Meme Generator', category: 'Web', tech: 'React', description: 'Custom meme creation tool' },
    { name: 'Mini Games', category: 'Game', tech: 'React', description: 'Collection of mini-games' }
];

const skillsByCategory = {
    'AI & Agents': ['RAG', 'H-RAG', 'Multi-Agent Systems', 'Tooling', 'LLM Routing'],
    'Developer Platforms': ['CLI Tools', 'VS Code Extensions', 'Automation', 'DX'],
    'Engineering & Stack': ['Python', 'Node.js', 'React', 'TypeScript', 'APIs', 'Cloud'],
    'LLM Ecosystem': ['OpenAI', 'Claude', 'Gemini', 'OpenRouter', 'Ollama']
};

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200' : 'bg-transparent'
            }`}>
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <span className="text-lg font-bold tracking-tight">MK</span>
                    <div className="flex items-center gap-8">
                        {['about', 'vibe', 'work', 'skills', 'contact'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollTo(section)}
                                className="text-sm text-stone-600 hover:text-stone-900 transition-colors capitalize"
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center pt-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="inline-block px-4 py-1 bg-stone-200 rounded-full text-sm text-stone-700 mb-6">
                        AI Engineer & Indie Builder
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-stone-900">
                        MUSHARRAF KAZI
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                        Building the <span className="text-indigo-600 font-medium">VIBE Ecosystem</span> —
                        a multi-product AI developer platform focused on AI-powered coding workflows,
                        multi-agent orchestration, and production-grade tooling.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => scrollTo('vibe')}
                            className="px-8 py-4 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors flex items-center gap-2"
                        >
                            Explore VIBE <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => scrollTo('work')}
                            className="px-8 py-4 bg-white border border-stone-300 text-stone-900 rounded-xl font-medium hover:bg-stone-100 transition-colors"
                        >
                            View Projects
                        </button>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-6 h-6 text-stone-400" />
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-6 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-8 text-stone-900">About</h2>
                    <div className="prose prose-lg text-stone-600">
                        <p className="mb-6 leading-relaxed">
                            AI Engineer and Indie Product Builder specializing in <strong className="text-stone-900">Agentic AI</strong>,
                            <strong className="text-stone-900"> Developer Tools</strong>,
                            <strong className="text-stone-900"> Multi-LLM Routing</strong>, and
                            <strong className="text-stone-900"> SaaS Automation</strong>.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            Building the <span className="text-indigo-600 font-medium">VIBE Ecosystem</span> — a multi-product AI
                            developer platform (CLI, VS Code Extension, Web SaaS, and Agents) focused on AI-powered coding workflows,
                            multi-agent orchestration, and production-grade developer tooling.
                        </p>
                        <p className="leading-relaxed">
                            Experienced in <strong className="text-stone-900">system architecture</strong>,
                            <strong className="text-stone-900"> product strategy</strong>,
                            <strong className="text-stone-900"> execution</strong>,
                            <strong className="text-stone-900"> research</strong>, and
                            <strong className="text-stone-900"> full-stack implementation</strong>.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-stone-200">
                        <div>
                            <div className="text-4xl font-bold text-stone-900">60+</div>
                            <div className="text-sm text-stone-500 mt-1">Projects</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-stone-900">4</div>
                            <div className="text-sm text-stone-500 mt-1">Products</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-indigo-600">AI</div>
                            <div className="text-sm text-stone-500 mt-1">Focus</div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* VIBE Ecosystem Section */}
            <section id="vibe" className="py-32 px-6 bg-stone-100">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium w-fit">
                            Flagship Project
                        </span>
                        <h2 className="text-3xl font-bold text-stone-900">VIBE Ecosystem</h2>
                    </div>
                    <p className="text-stone-600 mb-12 text-lg">
                        Founder & AI Engineer — A multi-product AI developer platform
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {vibeProducts.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-white rounded-xl border border-stone-200 hover:border-indigo-200 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-stone-100 rounded-lg">
                                        <product.icon className="w-5 h-5 text-stone-700" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-stone-900">{product.name}</h3>
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                                                product.status === 'Live'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-stone-100 text-stone-600'
                                            }`}>
                                                {product.status}
                                            </span>
                                        </div>
                                        <p className="text-indigo-600 text-sm mb-2">{product.tagline}</p>
                                        <p className="text-stone-500 text-sm">{product.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Technical Highlights */}
                    <div className="p-8 bg-white rounded-xl border border-stone-200">
                        <h3 className="font-semibold text-stone-900 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            Technical Highlights
                        </h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                'Hierarchical RAG (H-RAG) + Decision Agents + Orchestrator',
                                'Multi-provider LLM routing with fallback and evaluation',
                                '55-feature roadmap with 4-tier system prompt strategy',
                                'Competitive analysis across 60 AI coding tools',
                                'Monorepo strategy with ecosystem boundaries',
                                'Security-first architecture'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                                    <span className="text-indigo-600">→</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Work Section */}
            <section id="work" className="py-32 px-6 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-4 text-stone-900">Selected Projects</h2>
                    <p className="text-stone-600 mb-12 text-lg">A showcase of recent work across web, games, and tools.</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {selectedProjects.map((project, index) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-300 transition-colors group cursor-pointer"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                                        {project.category}
                                    </span>
                                    <span className="px-2 py-1 bg-stone-200 text-stone-600 rounded text-xs">
                                        {project.tech}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-stone-500 text-sm">{project.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <a
                        href="https://github.com/mk-knight23?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-12 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                    >
                        View all 60 projects <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-32 px-6 bg-stone-100">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-4 text-stone-900">Skills & Expertise</h2>
                    <p className="text-stone-600 mb-12 text-lg">Core competencies across AI, development, and product.</p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {Object.entries(skillsByCategory).map(([category, skills], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-white rounded-xl border border-stone-200"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    {category.includes('AI') ? (
                                        <Cpu className="w-5 h-5 text-indigo-600" />
                                    ) : category.includes('Developer') ? (
                                        <Layers className="w-5 h-5 text-indigo-600" />
                                    ) : category.includes('LLM') ? (
                                        <Zap className="w-5 h-5 text-indigo-600" />
                                    ) : (
                                        <Shield className="w-5 h-5 text-indigo-600" />
                                    )}
                                    <h3 className="font-semibold text-stone-900">{category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 px-6 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-6 text-stone-900">Get In Touch</h2>
                    <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        Actively building the VIBE Ecosystem and open to opportunities in AI Engineering,
                        Applied AI, Agent Systems, Developer Tools, SaaS Platforms, and Cloud AI roles.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <span className="px-4 py-2 bg-stone-100 rounded-lg text-sm">
                            <span className="text-stone-500">Location:</span>{' '}
                            <span className="text-stone-900">India</span>
                        </span>
                        <span className="px-4 py-2 bg-stone-100 rounded-lg text-sm">
                            <span className="text-stone-500">Available:</span>{' '}
                            <span className="text-green-700 font-medium">Remote & Hybrid</span>
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="mailto:mk.knight970@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors"
                        >
                            <Mail className="w-5 h-5" /> Email
                        </a>
                        <a
                            href="https://github.com/mk-knight23"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 text-stone-900 rounded-xl font-medium hover:bg-stone-50 transition-colors"
                        >
                            <Github className="w-5 h-5" /> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 text-stone-900 rounded-xl font-medium hover:bg-stone-50 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" /> LinkedIn
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-stone-50 border-t border-stone-200">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
                    <p>&copy; 2025 MUSHARRAF KAZI. All rights reserved.</p>
                    <p>Part of a 60-project portfolio ecosystem</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
