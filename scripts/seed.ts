import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "x52019fp",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  name: "Sai Vaibhav",
  role: "Cinematographer",
  tagline: "Cinematographer & Visual Storyteller",
  location: "Bangalore, India",
  bio: `I'm someone who's always drawn to challenges—creative or technical. The more something pushes me, the more intentional I become in how I approach it.

I started out as an editor, and over the past 6+ years, that's shaped how I see everything I shoot today. I don't just think in shots—I think in the final film. Most of the time, I already have a clear sense of how something will come together even before we step onto set.

Over time, I've moved into cinematography and worked across a range of projects—from indie setups to more scaled commercial work. What stays constant for me is the focus on how an image feels—how light, framing, and movement come together to serve the idea.

I keep my process grounded. I value clear communication, honest feedback, and working closely with the people involved to get the best out of a project.

I'm selective about what I take on now. I'd rather work on fewer projects that challenge me and demand a certain level of craft.

If you have something that needs that kind of attention, I'm always open to building it.`,
  heroVideoId: "2M3c8id9_oI",
  phone: "",
  whatsapp: "",
  email: "contact@saivaibhav.com",
  metaTitle: "Sai Vaibhav | Cinematographer - Bangalore",
  metaDescription:
    "Professional cinematographer based in Bangalore, India. Specializing in brand films, corporate events, documentaries, and visual storytelling.",
};

const projects = [
  {
    title: "Ford TIC Launch Event",
    videoUrl: "https://youtu.be/L4Cs1JafgY4",
    videoId: "L4Cs1JafgY4",
    platform: "youtube",
    category: "Corporate Event + Architecture",
    tags: ["Events"],
    priority: 1,
  },
  {
    title: "Ola MoveOS2 Launch",
    videoUrl: "https://youtu.be/iVQxxEQVH-E",
    videoId: "iVQxxEQVH-E",
    platform: "youtube",
    category: "Event Aftermovie / Product Ad",
    tags: ["Events", "Brand Films"],
    priority: 2,
  },
  {
    title: "FIL Bangalore Aftermovie",
    videoUrl: "https://youtu.be/fQGhOKNUhls",
    videoId: "fQGhOKNUhls",
    platform: "youtube",
    category: "Event Aftermovie",
    tags: ["Events"],
    priority: 2,
  },
  {
    title: "The Estates Club Inauguration",
    videoUrl: "https://youtu.be/y41W82NXqYc",
    videoId: "y41W82NXqYc",
    platform: "youtube",
    category: "Event Aftermovie",
    tags: ["Events"],
    priority: 3,
  },
  {
    title: "GrowthSchool Party Aftermovie",
    videoUrl: "https://youtu.be/WXDwRjA1Im4",
    videoId: "WXDwRjA1Im4",
    platform: "youtube",
    category: "Event Aftermovie",
    tags: ["Events"],
    priority: 3,
  },
  {
    title: "YogiFi Product Ad",
    videoUrl: "https://youtu.be/zavY5Lx36o4",
    videoId: "zavY5Lx36o4",
    platform: "youtube",
    category: "Product Ad",
    tags: ["Brand Films"],
    priority: 1,
  },
  {
    title: "Futurense Leadership Council Film",
    videoUrl: "https://youtu.be/2M3c8id9_oI",
    videoId: "2M3c8id9_oI",
    platform: "youtube",
    category: "Brand Film",
    tags: ["Brand Films"],
    priority: 1,
  },
  {
    title: "Wolves by UpGrad",
    videoUrl: "https://youtu.be/bgTRGqeFkHk",
    videoId: "bgTRGqeFkHk",
    platform: "youtube",
    category: "Brand Film",
    tags: ["Brand Films"],
    priority: 2,
  },
  {
    title: "Palo Alto GPTW",
    videoUrl: "https://youtu.be/ff6PgH2U8N8",
    videoId: "ff6PgH2U8N8",
    platform: "youtube",
    category: "Brand Film",
    tags: ["Brand Films"],
    priority: 1,
  },
  {
    title: "Scaler Brand Film",
    videoUrl: "https://youtu.be/9tjVxmUJkWU",
    videoId: "9tjVxmUJkWU",
    platform: "youtube",
    category: "Brand Film",
    tags: ["Brand Films"],
    priority: 2,
  },
  {
    title: "Care Clean Documentary",
    videoUrl: "https://youtu.be/DQMv4CObusc",
    videoId: "DQMv4CObusc",
    platform: "youtube",
    category: "Corporate Documentary",
    tags: ["Documentary"],
    priority: 1,
  },
  {
    title: "Arihant Group of Institutions",
    videoUrl: "https://youtu.be/gzbe-qFFmOE",
    videoId: "gzbe-qFFmOE",
    platform: "youtube",
    category: "Presenter Style Ads",
    tags: ["Brand Films"],
    priority: 3,
  },
  {
    title: "The Other Side Podcast Ft. Shwethambri Shetty",
    videoUrl: "https://www.youtube.com/watch?v=NyVnGXhTvUg&t=3858s",
    videoId: "NyVnGXhTvUg",
    platform: "youtube",
    category: "Podcast",
    tags: ["Podcast"],
    priority: 2,
  },
  {
    title: "Zerodha Varsity Ft. Nithin Kamath",
    videoUrl: "https://www.youtube.com/watch?v=Q1PCq9mrPI8",
    videoId: "Q1PCq9mrPI8",
    platform: "youtube",
    category: "Podcast",
    tags: ["Podcast"],
    priority: 3,
  },
  {
    title: "Network School",
    videoUrl:
      "https://www.instagram.com/reel/DTZ23yAEdO2/?igsh=MWJsZjlhY2VvZnp4MQ==",
    videoId: "DTZ23yAEdO2",
    platform: "instagram",
    category: "Instagram",
    tags: ["Instagram"],
    priority: 1,
  },
  {
    title: "EIMR",
    videoUrl:
      "https://drive.google.com/file/d/1P4X8zmtd_utPyeQsZrjoMVf4YZYqaXPB/view",
    videoId: "1P4X8zmtd_utPyeQsZrjoMVf4YZYqaXPB",
    platform: "drive",
    category: "Instagram",
    tags: ["Instagram"],
    priority: 2,
  },
];

async function seed() {
  console.log("Seeding site settings...");
  await client.createOrReplace(siteSettings);
  console.log("  ✓ Site settings created");

  console.log("\nSeeding projects...");
  for (const project of projects) {
    const slug = project.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const doc = {
      _type: "project",
      ...project,
      slug: { _type: "slug", current: slug },
      featured: false,
    };

    const result = await client.create(doc);
    console.log(`  ✓ ${project.title} (${result._id})`);
  }

  console.log("\n✓ Done! All content seeded.");
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
