import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "Full URL to the video (YouTube, Instagram, or Google Drive)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "videoId",
      title: "Video ID",
      type: "string",
      description: "YouTube video ID, Instagram reel ID, or Google Drive file ID",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: [
          { title: "YouTube", value: "youtube" },
          { title: "Instagram", value: "instagram" },
          { title: "Google Drive", value: "drive" },
        ],
      },
      initialValue: "youtube",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. Brand Film, Event Aftermovie, Podcast",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Events", value: "Events" },
          { title: "Brand Films", value: "Brand Films" },
          { title: "Documentary", value: "Documentary" },
          { title: "Podcast", value: "Podcast" },
          { title: "Instagram", value: "Instagram" },
        ],
      },
    }),
    defineField({
      name: "priority",
      title: "Priority",
      type: "number",
      description: "1 = highest priority, 3 = lowest. Controls display order.",
      initialValue: 2,
      validation: (rule) => rule.min(1).max(3),
    }),
    defineField({
      name: "thumbnail",
      title: "Custom Thumbnail",
      type: "image",
      description: "Optional. If not set, YouTube thumbnail will be used automatically.",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show this project prominently",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Priority",
      name: "priorityAsc",
      by: [{ field: "priority", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "thumbnail",
    },
  },
});
