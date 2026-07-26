// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  ui: {
    previewUrl: () => ({
      url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    })
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
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
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") return "/";
            return `/${document._sys.filename}`;
          }
        },
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
                  { type: "string", name: "primaryButtonHref", label: "Primary Button Link" }
                ]
              },
              {
                type: "object",
                name: "philosophyTabs",
                label: "Our Philosophy Tabs",
                fields: [
                  {
                    type: "object",
                    name: "rightMoment",
                    label: "Tab 1 \u2014 The Right Moment (Yellow)",
                    fields: [
                      { type: "string", name: "tabTitle", label: "Tab Button Label" },
                      { type: "string", name: "topEyebrow", label: "Top Eyebrow (small label with dash, e.g. 'Our Story')" },
                      { type: "string", name: "eyebrow", label: "Main Title (e.g. 'Why We're Called Kairos')" },
                      { type: "string", name: "headline", label: "Callout (small text near clock icon)", ui: { component: "textarea" } },
                      { type: "string", name: "definition", label: "Greek Definition" },
                      {
                        type: "object",
                        name: "weightPoints",
                        label: "Weight Points (4 statements with icons)",
                        list: true,
                        fields: [
                          {
                            type: "string",
                            name: "icon",
                            label: "Icon",
                            options: [
                              { label: "Building (Business)", value: "building" },
                              { label: "Person (Founder)", value: "person" },
                              { label: "Group (Employees)", value: "group" },
                              { label: "Handshake (Customers)", value: "handshake" },
                              { label: "Clock", value: "clock" }
                            ]
                          },
                          { type: "string", name: "text", label: "Text" }
                        ]
                      },
                      { type: "string", name: "quoteIntro", label: "Quote \u2014 Question Paragraph", ui: { component: "textarea" } },
                      { type: "string", name: "quoteCallout", label: "Quote \u2014 Callout (e.g. 'That's why we exist.')" },
                      { type: "string", name: "quoteOutro", label: "Quote \u2014 Closing Paragraph", ui: { component: "textarea" } }
                    ]
                  },
                  {
                    type: "object",
                    name: "builtDifferently",
                    label: "Tab 2 \u2014 Built Differently (Red)",
                    fields: [
                      { type: "string", name: "tabTitle", label: "Tab Button Label" },
                      { type: "string", name: "label", label: "Eyebrow (e.g. 'Who We Are')" },
                      { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
                      { type: "string", name: "leadParagraph", label: "Lead Paragraph (use *word* to highlight in yellow)", ui: { component: "textarea" } },
                      {
                        type: "object",
                        name: "principles",
                        label: "Principles (icon + text)",
                        list: true,
                        fields: [
                          {
                            type: "string",
                            name: "icon",
                            label: "Icon",
                            options: [
                              { label: "Group (People)", value: "group" },
                              { label: "Shield (Protection)", value: "shield" },
                              { label: "Chart (Growth)", value: "chart" },
                              { label: "Person", value: "person" },
                              { label: "Building", value: "building" },
                              { label: "Handshake", value: "handshake" },
                              { label: "Clock", value: "clock" }
                            ]
                          },
                          { type: "string", name: "text", label: "Text (use *phrase* for yellow emphasis)", ui: { component: "textarea" } }
                        ]
                      },
                      { type: "string", name: "pullQuoteIntro", label: "Pull-Quote Intro" },
                      { type: "string", name: "pullQuoteCallout", label: "Pull-Quote Callout (yellow)" }
                    ]
                  },
                  {
                    type: "object",
                    name: "investmentPhilosophy",
                    label: "Tab 3 \u2014 Investment Philosophy (Blue)",
                    fields: [
                      { type: "string", name: "tabTitle", label: "Tab Button Label" },
                      { type: "string", name: "label", label: "Section Label" },
                      { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
                      {
                        type: "object",
                        name: "options",
                        label: "Options",
                        list: true,
                        fields: [
                          { type: "string", name: "title", label: "Title" },
                          { type: "string", name: "description", label: "Description" },
                          { type: "string", name: "bullets", label: "Bullets", list: true },
                          { type: "boolean", name: "isHighlighted", label: "Highlighted (Kairos column)" }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "how",
                label: "How We Buy",
                fields: [
                  {
                    type: "string",
                    name: "backgroundColor",
                    label: "Background Color",
                    options: [
                      { label: "Purple", value: "purple" },
                      { label: "Purple Dark", value: "purple-dark" },
                      { label: "Red", value: "red" },
                      { label: "Blue", value: "blue" },
                      { label: "Yellow", value: "yellow" },
                      { label: "Green", value: "green" },
                      { label: "Aqua", value: "aqua" },
                      { label: "Pink", value: "pink" },
                      { label: "White", value: "white" },
                      { label: "Light Gray", value: "light" },
                      { label: "Black", value: "ink" }
                    ]
                  },
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
                      {
                        type: "string",
                        name: "icon",
                        label: "Icon",
                        options: [
                          { label: "Chat (Conversation)", value: "chat" },
                          { label: "Document + Search (Evaluate)", value: "docSearch" },
                          { label: "Group (People/Plan)", value: "group" },
                          { label: "Gear (Execute)", value: "gear" },
                          { label: "Chart (Growth)", value: "chart" },
                          { label: "Shield", value: "shield" },
                          { label: "Handshake", value: "handshake" },
                          { label: "Person", value: "person" },
                          { label: "Building", value: "building" },
                          { label: "Clock", value: "clock" }
                        ]
                      },
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "body", label: "Body", ui: { component: "textarea" } }
                    ]
                  },
                  { type: "string", name: "throughline", label: "Throughline Band Text (e.g. 'Cultural and Financial Due Diligence Throughout')" }
                ]
              },
              {
                type: "object",
                name: "partnership",
                label: "Partnership (Criteria + Promise)",
                fields: [
                  { type: "string", name: "headline", label: "Section Headline (use *word* for italic emphasis)", ui: { component: "textarea" } },
                  { type: "string", name: "criteriaLabel", label: "Left Column Label (e.g. 'What we look for')" },
                  {
                    type: "object",
                    name: "criteriaItems",
                    label: "Criteria Items",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "icon",
                        label: "Icon",
                        options: [
                          { label: "Chart (Growth)", value: "chart" },
                          { label: "Group", value: "group" },
                          { label: "Briefcase", value: "briefcase" },
                          { label: "Shield", value: "shield" },
                          { label: "Refresh (Recurring)", value: "refresh" },
                          { label: "Pin (Geography)", value: "pin" },
                          { label: "Handshake", value: "handshake" },
                          { label: "Building", value: "building" },
                          { label: "Person", value: "person" },
                          { label: "Clock", value: "clock" },
                          { label: "Dollar", value: "dollar" },
                          { label: "Heart", value: "heart" }
                        ]
                      },
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                    ]
                  },
                  { type: "string", name: "promiseLabel", label: "Right Column Label (use *word* for italic)" },
                  {
                    type: "object",
                    name: "promiseItems",
                    label: "Promise Items",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "icon",
                        label: "Icon",
                        options: [
                          { label: "Clock", value: "clock" },
                          { label: "Dollar", value: "dollar" },
                          { label: "Group", value: "group" },
                          { label: "Shield", value: "shield" },
                          { label: "Handshake", value: "handshake" },
                          { label: "Heart", value: "heart" },
                          { label: "Chart (Growth)", value: "chart" },
                          { label: "Briefcase", value: "briefcase" },
                          { label: "Refresh", value: "refresh" },
                          { label: "Pin", value: "pin" },
                          { label: "Building", value: "building" },
                          { label: "Person", value: "person" }
                        ]
                      },
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                    ]
                  },
                  { type: "string", name: "bottomLine1", label: "Bottom Callout \u2014 Line 1" },
                  { type: "string", name: "bottomLine2", label: "Bottom Callout \u2014 Line 2 (yellow)" }
                ]
              },
              {
                type: "object",
                name: "cta",
                label: "CTA",
                fields: [
                  {
                    type: "string",
                    name: "backgroundColor",
                    label: "Background Color",
                    options: [
                      { label: "Purple", value: "purple" },
                      { label: "Purple Dark", value: "purple-dark" },
                      { label: "Red", value: "red" },
                      { label: "Blue", value: "blue" },
                      { label: "Yellow", value: "yellow" },
                      { label: "Green", value: "green" },
                      { label: "Aqua", value: "aqua" },
                      { label: "Pink", value: "pink" },
                      { label: "White", value: "white" },
                      { label: "Light Gray", value: "light" },
                      { label: "Black", value: "ink" }
                    ]
                  },
                  { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
                  { type: "string", name: "sub", label: "Subtext", ui: { component: "textarea" } },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "contactEmail", label: "Contact Email" }
                ]
              }
            ]
          },
          {
            name: "default",
            label: "Content Page",
            fields: [
              { type: "string", name: "title", label: "Title", isTitle: true, required: true },
              { type: "rich-text", name: "body", label: "Body", isBody: true }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
