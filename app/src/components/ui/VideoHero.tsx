import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Videos
import headerVideoWebm from '@/assets/videos/headervideo.webm';
import headerVideoMp4 from '@/assets/videos/headervideo.mp4';

export function VideoHero() {
    const { t, language } = useI18n();
    const getLink = (path: string) => `/${language}${path}`;

    const handleScrollDown = () => {
        const featuresSection = document.getElementById('features-section');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            className="relative h-screen w-full overflow-hidden"
            aria-labelledby="hero-title"
        >
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
                aria-hidden="true"
            >
                <source src={headerVideoWebm} type="video/webm" />
                <source src={headerVideoMp4} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl text-center">
                    {/* Hero Title */}
                    <h1
                        id="hero-title"
                        className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
                    >
                        {t.home.heroTitle}
                    </h1>

                    {/* Hero Subtitle */}
                    <p className="mb-8 text-xl text-white/90 sm:text-2xl lg:text-3xl leading-relaxed">
                        {t.home.heroSubtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        {/* Primary CTA - Filled Terracotta Pill */}
                        <Button
                            asChild
                            size="lg"
                            className="bg-terracotta-500 text-white hover:bg-terracotta-600 font-medium text-base px-8 py-6 rounded-full border-0 shadow-none transition-colors"
                        >
                            <Link to={getLink('/pane-naturale')}>
                                {t.home.ctaPrimary}
                                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                            </Link>
                        </Button>
                        {/* Secondary CTA - Ghost with Border */}
                        <Button
                            asChild
                            size="lg"
                            className="bg-transparent text-white hover:bg-white/10 font-medium text-base px-8 py-6 rounded-full border border-white/80 hover:border-white shadow-none transition-colors"
                        >
                            <Link to={getLink('/contatti')}>
                                {t.home.ctaSecondary}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={handleScrollDown}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
                aria-label={language === 'it' ? 'Scorri verso il basso' : 'Scroll down'}
            >
                <ChevronDown
                    className="h-10 w-10 animate-bounce"
                    aria-hidden="true"
                    style={{
                        animation: 'bounce 1.5s infinite',
                    }}
                />
            </button>

            {/* Custom bounce animation */}
            <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-bounce {
            animation: none;
          }
        }
      `}</style>
        </section>
    );
}
