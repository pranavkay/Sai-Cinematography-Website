import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Displayed below your name on the hero section",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 8,
      description: "Your about section text",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      description: "Background image for the hero section",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroVideoId",
      title: "Hero Showreel Video ID",
      type: "string",
      description: "YouTube video ID for the showreel played from the hero section",
    }),
    defineField({
      name: "profilePhoto",
      title: "Profile Photo",
      type: "image",
      description: "Your photo for the About section",
      options: { hotspot: true },
    }),
    defineField({
      name: "aboutHeading",
      title: "About Section Heading",
      type: "string",
      description: 'e.g. "Crafting visual narratives with intention."',
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "Phone number for the call button (e.g. +919876543210)",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      description: "WhatsApp number without + (e.g. 919876543210)",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "youtube",
      title: "YouTube URL",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "metaTitle",
      title: "SEO Title",
      type: "string",
      description: "Title shown in search results",
    }),
    defineField({
      name: "metaDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Description shown in search results",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
