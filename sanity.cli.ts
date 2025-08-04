import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'y22jq1vg',
    dataset: 'production'
  },
  // Add this new 'project' section to point to the studio's base path
  project: {
    basePath: '/studio'
  }
})