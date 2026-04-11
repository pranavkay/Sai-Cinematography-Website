import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { getContent } from "@/lib/r2";

// Revalidate at most once per minute (ISR safety net)
export const revalidate = 60;

export default async function Home() {
  const content = await getContent();
  const { settings, hero, projects, testimonials, filters } = content;

  const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: settings.name,
    jobTitle: settings.role,
    description: settings.bio.slice(0, 200),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
    sameAs: [
      settings.socials.instagram,
      settings.socials.youtube,
      settings.socials.linkedin,
    ].filter((url) => url && url !== "#"),
  };

  const videoLd = sortedProjects
    .filter((p) => p.platform === "youtube")
    .map((p) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: p.title,
      description: `${p.category} by ${settings.name}`,
      thumbnailUrl: `https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${p.videoId}`,
      contentUrl: `https://youtu.be/${p.videoId}`,
    }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }}
      />
      <main id="main-content" className="selection:bg-cinema-accent selection:text-black">
        <Navigation settings={settings} />
        <Hero settings={settings} hero={hero} />
        <About settings={settings} />
        <Portfolio projects={sortedProjects} filters={filters} />
        <Testimonials testimonials={testimonials} />
        <ContactCTA settings={settings} />
        <Footer settings={settings} />
      </main>
    </>
  );
}
