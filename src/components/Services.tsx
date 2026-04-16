import { Film, Camera, Sparkles, PlayCircle } from "lucide-react";

const services = [
  {
    title: "Commercials & Product Films",
    description:
      "High-craft product advertisements and commercial spots. From tabletop product reveals to multi-day shoots across locations, I shape light, lens, and movement to make the product the hero of every frame.",
    icon: Sparkles,
  },
  {
    title: "Brand Films",
    description:
      "Story-driven brand films that sell feeling before fact. I work closely with founders and creative teams to translate brand values into cinematic language — pacing, tone, and visual hierarchy that stays with the viewer.",
    icon: Film,
  },
  {
    title: "Event Aftermovies",
    description:
      "Corporate launches, conferences, inaugurations, and experiential events. Energetic, observational cinematography that captures the scale, the people, and the details — cut into a film you'll actually want to share.",
    icon: PlayCircle,
  },
  {
    title: "Documentary & Long-form",
    description:
      "Corporate documentaries and long-form narratives for when you need depth. Patient shooting, honest framing, and post-driven storytelling that respects the subject and the audience.",
    icon: Camera,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-24 px-4 md:px-8 bg-cinema-900 border-y border-white/5"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cinema-accent font-sans font-bold tracking-widest text-xs uppercase mb-3">
            What I Do
          </p>
          <h2
            id="services-heading"
            className="font-serif text-3xl md:text-5xl text-white leading-tight"
          >
            Cinematography, shaped for the brief.
          </h2>
          <div className="h-1 w-20 bg-cinema-accent mx-auto mt-6" />
          <p className="max-w-2xl mx-auto mt-8 text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Every project starts with the same questions — what are we trying to
            make the viewer feel, and how do light, lens, and movement get us there?
            Below are the kinds of work I take on most often. Every brief is different;
            the craft is consistent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group relative bg-cinema-950 border border-white/5 rounded-lg p-8 hover:border-cinema-accent/30 transition-colors"
            >
              <Icon
                className="w-8 h-8 text-cinema-accent mb-5"
                aria-hidden="true"
              />
              <h3 className="font-serif text-2xl text-white mb-3">{title}</h3>
              <p className="text-gray-400 text-base leading-relaxed font-light">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
