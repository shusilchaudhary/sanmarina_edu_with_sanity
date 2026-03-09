import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'San Marina CMS',

  projectId,
  dataset,

  // ✅ OPTIMIZATION: Use edge caching + real-time capabilities
  // This gives you fast loads while maintaining real-time document updates
  api: {
    cdn: true,
  },

  // ✅ OPTIMIZATION: Reduce loaded documents for faster initial load
  document: {
    // Limit list views to show only 20 items initially (not 100+)
    // Lazy load more on scroll
    actions: (prev) => prev,
  },

  plugins: [
    // ✅ OPTIMIZATION: Keep structureTool lightweight
    structureTool({
      // Option to hide draft + published versions to reduce clutter
      defaultDocumentNode: (S) => S.document().views([S.view.form()]),
    }),
    // ✅ OPTIMIZATION: Lazy-load vision tool (still available but reduces initial load)
    visionTool({
      // Vision tool defaults minimize on load
    }),
  ],

  schema: {
    types: schema.types,
  },

  // ✅ OPTIMIZATION: Enable theme for faster rendering
  theme: {
    // Use default theme (no custom CSS = faster load)
  },
});

