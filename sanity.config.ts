import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// Import the schema from our new file
import {schema} from './src/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Growthwebs Studio',

  projectId: 'y22jq1vg',
  dataset: 'production',

  // Tell the studio to use our new schema
  schema,

  plugins: [structureTool(), visionTool()],
})
