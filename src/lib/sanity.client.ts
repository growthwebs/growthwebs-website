import { createClient } from 'next-sanity'

const projectId = 'y22jq1vg'
const dataset = 'production'
const apiVersion = '2023-05-03' // Use a recent API version

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` if you want to ensure fresh data
})