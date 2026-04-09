import { Play, ChevronDown } from "lucide-react";
import { SiteSettings } from "@/lib/types";

export function Hero({ settings }: { settings: SiteSettings }) {
  return (
    <section
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 scale-105"
          role="img"
          aria-label={`Cinematic background for ${settings.name}`}
          style={{
            backgroundImage: `url('${settings.heroImageUrl}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,rgba(5,5,5,0.2),rgba(5,5,5,1))] opacity-80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-cinema-accent font-sans font-medium tracking-[0.2em] text-sm md:text-base uppercase mb-6 border-b border-cinema-accent/30 pb-2">
          {settings.location}
        </h2>

        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white font-bold mb-6 leading-none tracking-tight">
          {settings.name.toUpperCase()}
        </h1>

        <p className="text-gray-300 italic text-xl md:text-3xl max-w-2xl mx-auto mb-12 font-light tracking-wide">
          {settings.tagline}
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a
            href={`https://www.youtube.com/watch?v=${encodeURIComponent(settings.heroVideoId)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-black hover:bg-cinema-accent transition-all duration-500 rounded-sm"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-black/20 group-hover:border-black/40 transition-colors">
              <Play className="w-3 h-3 ml-0.5 fill-current" aria-hidden="true" />
            </span>
            <span className="font-sans font-semibold tracking-widest text-sm uppercase">
              Watch Reel
            </span>
          </a>
          <a
            href="#portfolio"
            className="text-white/70 hover:text-cinema-accent transition-colors font-sans text-sm tracking-widest uppercase border-b border-transparent hover:border-cinema-accent pb-1"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-widest text-white/50">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-white/50" />
      </div>
    </section>
  );
}
