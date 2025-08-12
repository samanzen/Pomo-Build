import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schema} from './sanity/schemas' // Corrected import name

// Get the project ID and dataset from your .env.local file
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'Pomo_Build_Content_Studio',
  title: 'Pomo Build CMS',
  projectId,
  dataset,
  plugins: [
    deskTool(),
    visionTool(),
  ],
  // Use the imported schema directly
  schema: schema,
})