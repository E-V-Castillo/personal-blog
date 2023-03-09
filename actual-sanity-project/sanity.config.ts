import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  basePath: "/studio",
  name: 'default',
  title: 'actual-sanity-project',

  projectId: '760e8bo4',
  dataset: 'production',
  

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
