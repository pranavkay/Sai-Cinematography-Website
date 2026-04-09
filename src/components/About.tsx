import Image from "next/image";
import { Camera, Film, Award } from "lucide-react";
import { SiteSettings } from "@/lib/types";

export function About({ settings }: { settings: SiteSettings }) {
  const paragraphs = settings.bio.split("\n\n").filter(Boolean);

  return (
    <section id="about" className="py-24 bg-cinema-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cinema-950 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700 ease-out">
              <Image
                src={settings.profilePhotoUrl}
                alt={`Portrait of ${settings.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-900 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-cinema-950/80 backdrop-blur-md p-4 border-l-2 border-cinema-accent">
                  <p className="text-cinema-accent text-xs font-bold tracking-widest uppercase mb-1">
                    Current Base
                  </p>
                  <p className="text-white font-serif">{settings.location}</p>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-6 -left-6 w-full h-full border border-cinema-accent/30 rounded-lg" />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-cinema-accent font-sans font-bold tracking-widest text-sm uppercase mb-4">
              About Me
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              {settings.aboutHeading}
            </h3>

            <div className="space-y-4 mb-8">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-gray-400 text-lg leading-relaxed font-light">
                  {p}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-4 bg-cinema-800/50 rounded border border-white/5">
                <Camera className="w-6 h-6 text-cinema-accent mb-3" aria-hidden="true" />
                <h4 className="text-white font-medium mb-1">Cinematography</h4>
                <p className="text-xs text-gray-500">Events, Ads, Films</p>
              </div>
              <div className="p-4 bg-cinema-800/50 rounded border border-white/5">
                <Film className="w-6 h-6 text-cinema-accent mb-3" aria-hidden="true" />
                <h4 className="text-white font-medium mb-1">Direction</h4>
                <p className="text-xs text-gray-500">Visual Storytelling</p>
              </div>
              <div className="p-4 bg-cinema-800/50 rounded border border-white/5">
                <Award className="w-6 h-6 text-cinema-accent mb-3" aria-hidden="true" />
                <h4 className="text-white font-medium mb-1">Quality</h4>
                <p className="text-xs text-gray-500">Premium Grading</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded transition-colors text-sm font-medium tracking-wide"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
