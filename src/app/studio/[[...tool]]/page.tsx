'use client'

import {NextStudio} from 'next-sanity/studio'
// Use the standard '@/' alias which points to the /src directory
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}