export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  name,
  role,
  tagline,
  location,
  bio,
  "heroImageUrl": heroImage.asset->url,
  heroVideoId,
  "profilePhotoUrl": profilePhoto.asset->url,
  aboutHeading,
  phone,
  whatsapp,
  email,
  instagram,
  youtube,
  linkedin,
  metaTitle,
  metaDescription
}`;

export const PROJECTS_QUERY = `*[_type == "project"] | order(priority asc, _createdAt desc){
  "id": _id,
  title,
  "slug": slug.current,
  videoUrl,
  videoId,
  platform,
  category,
  tags,
  priority,
  thumbnail,
  featured
}`;
