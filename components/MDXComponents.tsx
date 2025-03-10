import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import type { MDXComponents } from 'mdx/types'
import Image from '@/components/Image'
import CustomLink from '@/components/Link'
import TableWrapper from '@/components/TableWrapper'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
}