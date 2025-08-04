import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// Use the robust path alias to ensure this root file finds the schema correctly.
import {schema} from '@/sanity/schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Growthwebs Studio',

  projectId: 'y22jq1vg',
  dataset: 'production',

  // Tell the studio to use our new schema
  schema,

  plugins: [structureTool(), visionTool()],
})