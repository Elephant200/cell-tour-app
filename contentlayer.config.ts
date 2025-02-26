import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Organelle = defineDocumentType(() => ({
  name: 'Organelle',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    eukaryotic: { type: 'boolean' },
    prokaryotic: { type: 'boolean' },
    animalCell: { type: 'boolean' },
    plantCell: { type: 'boolean' },
    membraneBound: { type: 'boolean' },
    imageUrl: { type: 'string' }
  },
  computedFields: {
    url: { type: 'string', resolve: (organelle) => `/organelles/${organelle._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'organelles', documentTypes: [Organelle] })