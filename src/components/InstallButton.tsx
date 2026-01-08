'use client';

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallButton() {
    const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsInstalled(true);
            return;
        }

        const handler = (e: Event) => {
            e.preventDefault();
            setInstallPrompt(e as BeforeInstallPromptEvent);
        };

        window.addEventListener('beforeinstallprompt', handler);

        window.addEventListener('appinstalled', () => {
            setIsInstalled(true);
            setInstallPrompt(null);
        });

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstall = async () => {
        if (!installPrompt) return;

        try {
            await installPrompt.prompt();
            const { outcome } = await installPrompt.userChoice;

            if (outcome === 'accepted') {
                console.log('User accepted the install prompt');
                setInstallPrompt(null);
            }
        } catch (error) {
            console.error('Error during installation:', error);
        }
    };

    if (isInstalled || !installPrompt) return null;

    return (
        <button
            onClick={handleInstall}
            className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-zinc-800 transition-all active:scale-95 group"
        >
            <span className="text-sm font-medium">Install App</span>
            <div className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
            </div>
        </button>
    );
}
