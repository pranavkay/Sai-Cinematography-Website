import { Quote } from "lucide-react";
import { Testimonial } from "@/lib/types";

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials || testimonials.length === 0) return null;

  const sorted = [...testimonials].sort((a, b) => a.order - b.order);

  return (
    <section
      id="testimonials"
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto"
      aria-label="Testimonials"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Kind Words</h2>
        <div className="h-1 w-20 bg-cinema-accent mx-auto" />
      </div>

      <div
        className={`grid gap-8 ${
          sorted.length === 1
            ? "max-w-2xl mx-auto"
            : sorted.length === 2
              ? "md:grid-cols-2 max-w-4xl mx-auto"
              : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {sorted.map((t) => (
          <figure
            key={t.id}
            className="relative bg-cinema-900 border border-white/5 rounded-lg p-8 hover:border-cinema-accent/30 transition-colors"
          >
            <Quote
              className="absolute top-6 right-6 w-8 h-8 text-cinema-accent/20"
              aria-hidden="true"
            />
            <blockquote className="text-gray-300 text-lg leading-relaxed font-light italic mb-6">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-4">
              {t.avatarUrl && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-cinema-accent/30"
                />
              )}
              <div>
                <p className="text-white font-medium">{t.name}</p>
                {t.role && (
                  <p className="text-xs text-cinema-accent tracking-widest uppercase mt-1">
                    {t.role}
                  </p>
                )}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
