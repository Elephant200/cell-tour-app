import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Organelle = defineDocumentType(() => ({
  name: 'Organelle',
  filePathPattern: `**/*.mdx`,
  fields: {
    name: { type: 'string', required: true },
    eukaryotic: { type: 'string' },
    prokaryotic: { type: 'string' },
    animalCell: { type: 'string' },
    plantCell: { type: 'string' },
    membraneBound: { type: 'string' }
  },
  computedFields: {
    url: { type: 'string', resolve: (organelle) => `/organelles/${organelle._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'organelles', documentTypes: [Organelle] })