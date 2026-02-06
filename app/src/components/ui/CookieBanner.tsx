import { useState, useEffect } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'labpro-cookie-consent';

export function CookieBanner() {
    const { t, language } = useI18n();
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a decision
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
            <div className="bg-gradient-to-r from-stone-900 to-stone-800 border-t border-stone-700 shadow-2xl">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-terracotta-500 rounded-lg flex items-center justify-center">
                                <Cookie className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm sm:text-base text-white leading-relaxed">
                                {t.cookies.message}{' '}
                                <a
                                    href={`#/${language}/privacy`}
                                    className="text-terracotta-300 hover:text-terracotta-200 underline font-medium transition-colors"
                                >
                                    {t.cookies.privacyLink}
                                </a>
                                .
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button
                                onClick={handleDecline}
                                className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-stone-300 hover:text-white border border-stone-600 hover:border-stone-500 rounded-lg transition-all"
                                aria-label={t.cookies.decline}
                            >
                                {t.cookies.decline}
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 sm:flex-none px-6 py-2 text-sm font-semibold bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white rounded-lg hover:shadow-lg hover:from-terracotta-500 hover:to-terracotta-500 transition-all"
                                aria-label={t.cookies.accept}
                            >
                                {t.cookies.accept}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
