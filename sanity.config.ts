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

  plugins: [
    structureTool({
      // ✅ OPTIMIZATION: Lighter structure for faster rendering
      defaultDocumentNode: (S) => S.document().views([S.view.form()]),
    }),
    visionTool(),
  ],

  schema: {
    types: schema.types,
  },
});

