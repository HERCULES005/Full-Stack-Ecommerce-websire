import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Ecommerce',
  projectId: '7gd6yhjt',
  dataset: 'ecommercedataset',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})