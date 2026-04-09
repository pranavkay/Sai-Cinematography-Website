import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { siteSettings, projects, filters } from "@/lib/data";
import { sanityClient } from "@/lib/sanity/client";
import { SITE_SETTINGS_QUERY, PROJECTS_QUERY } from "@/lib/sanity/queries";
import type { SiteSettings, Project } from "@/lib/types";

async function getData(): Promise<{
  settings: SiteSettings;
  projectList: Project[];
}> {
  if (sanityClient) {
    try {
      const [sanitySettings, sanityProjects] = await Promise.all([
        sanityClient.fetch(SITE_SETTINGS_QUERY),
        sanityClient.fetch(PROJECTS_QUERY),
      ]);

      if (sanitySettings && sanityProjects?.length) {
        return {
          settings: {
            name: sanitySettings.name || siteSettings.name,
            role: sanitySettings.role || siteSettings.role,
            tagline: sanitySettings.tagline || siteSettings.tagline,
            location: sanitySettings.location || siteSettings.location,
            bio: sanitySettings.bio || siteSettings.bio,
            heroImageUrl: sanitySettings.heroImageUrl || siteSettings.heroImageUrl,
            heroVideoId: sanitySettings.heroVideoId || siteSettings.heroVideoId,
            profilePhotoUrl: sanitySettings.profilePhotoUrl || siteSettings.profilePhotoUrl,
            aboutHeading: sanitySettings.aboutHeading || siteSettings.aboutHeading,
            phone: sanitySettings.phone || "",
            whatsapp: sanitySettings.whatsapp || "",
            email: sanitySettings.email || siteSettings.email,
            socials: {
              instagram: sanitySettings.instagram || "#",
              youtube: sanitySettings.youtube || "#",
              linkedin: sanitySettings.linkedin || "#",
            },
          },
          projectList: sanityProjects,
        };
      }
    } catch (e) {
      console.error("Failed to fetch from Sanity, using local data:", e);
    }
  }

  return { settings: siteSettings, projectList: projects };
}

export default async function Home() {
  const { settings, projectList } = await getData();

  const sortedProjects = [...projectList].sort(
    (a, b) => a.priority - b.priority
  );

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
        <Hero settings={settings} />
        <About settings={settings} />
        <Portfolio projects={sortedProjects} filters={filters} />
        <ContactCTA settings={settings} />
        <Footer settings={settings} />
      </main>
    </>
  );
}
