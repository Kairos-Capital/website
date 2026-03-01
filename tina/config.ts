import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        templates: [
          {
            name: "home",
            label: "Home Page",
            fields: [
              {
                type: "object",
                name: "hero",
                label: "Hero",
                fields: [
                  { type: "string", name: "eyebrow", label: "Eyebrow" },
                  { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
                  { type: "string", name: "sub", label: "Subheading", ui: { component: "textarea" } },
                  { type: "string", name: "primaryButtonText", label: "Primary Button Text" },
                  { type: "string", name: "primaryButtonHref", label: "Primary Button Link" },
                  { type: "string", name: "ghostButtonText", label: "Ghost Button Text" },
                  { type: "string", name: "ghostButtonHref", label: "Ghost Button Link" },
                  {
                    type: "object",
                    name: "stats",
                    label: "Stats",
                    list: true,
                    fields: [
                      { type: "string", name: "number", label: "Number" },
                      { type: "string", name: "label", label: "Label" },
                    ],
                  },
                ],
              },
              {
                type: "object",
                name: "about",
                label: "About",
                fields: [
                  { type: "string", name: "label", label: "Section Label" },
                  { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
                  {
                    type: "string",
                    name: "paragraphs",
                    label: "Paragraphs",
                    list: true,
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "object",
                name: "how",
                label: "How We Buy",
                fields: [
                  { type: "string", name: "label", label: "Section Label" },
                  { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  {
                    type: "object",
                    name: "steps",
                    label: "Steps",
                    list: true,
                    fields: [
                      { type: "string", name: "number", label: "Step Number" },
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
                    ],
                  },
                ],
              },
              {
                type: "object",
                name: "criteria",
                label: "Criteria",
                fields: [
                  { type: "string", name: "label", label: "Section Label" },
                  { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
                  {
                    type: "object",
                    name: "items",
                    label: "Criteria Items",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    ],
                  },
                ],
              },
              {
                type: "object",
                name: "promise",
                label: "Promise",
                fields: [
                  { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
                  {
                    type: "string",
                    name: "items",
                    label: "Promise Points",
                    list: true,
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "object",
                name: "cta",
                label: "CTA",
                fields: [
                  { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
                  { type: "string", name: "sub", label: "Subtext", ui: { component: "textarea" } },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "contactEmail", label: "Contact Email" },
                ],
              },
            ],
          },
          {
            name: "default",
            label: "Content Page",
            fields: [
              { type: "string", name: "title", label: "Title", isTitle: true, required: true },
              { type: "rich-text", name: "body", label: "Body", isBody: true },
            ],
          },
        ],
      },
    ],
  },
});
