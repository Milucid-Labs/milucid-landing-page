import rehypeShiki from '@leafac/rehype-shiki'
import nextMDX from '@next/mdx'
import { Parser } from 'acorn'
import jsx from 'acorn-jsx'
import escapeStringRegexp from 'escape-string-regexp'
import * as path from 'path'
import { recmaImportImages } from 'recma-import-images'
import remarkGfm from 'remark-gfm'
import { remarkRehypeWrap } from 'remark-rehype-wrap'
import remarkUnwrapImages from 'remark-unwrap-images'
import shiki from 'shiki'
import { unifiedConditional } from 'unified-conditional'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

function remarkMDXLayout(source, metaName) {
  let parser = Parser.extend(jsx())
  let parseOptions = { ecmaVersion: 'latest', sourceType: 'module' }

  return (tree) => {
    try {
      let imp = `import _Layout from '${source}'`
      let exp = `export default function Layout(props) {
        return <_Layout {...props} ${metaName}={${metaName}} />
      }`

      tree.children.push(
        {
          type: 'mdxjsEsm',
          value: imp,
          data: { estree: parser.parse(imp, parseOptions) },
        },
        {
          type: 'mdxjsEsm',
          value: exp,
          data: { estree: parser.parse(exp, parseOptions) },
        },
      )
    } catch (err) {
      throw new Error(`Failed to process MDX layout: ${err.message}`)
    }
  }
}

export default async function config() {
  try {
    let highlighter = await shiki.getHighlighter({
      theme: 'css-variables',
    })

    let withMDX = nextMDX({
      extension: /\.mdx$/,
      options: {
        recmaPlugins: [recmaImportImages],
        rehypePlugins: [
          [rehypeShiki, { highlighter }],
          [
            remarkRehypeWrap,
            {
              node: { type: 'mdxJsxFlowElement', name: 'Typography' },
              start: ':root > :not(mdxJsxFlowElement)',
              end: ':root > mdxJsxFlowElement',
            },
          ],
        ],
        remarkPlugins: [
          remarkGfm,
          remarkUnwrapImages,
          [
            unifiedConditional,
            [
              new RegExp(`^${escapeStringRegexp(path.resolve('src/app/blog'))}`),
              [[remarkMDXLayout, '@/app/blog/wrapper', 'article']],
            ],
            [
              new RegExp(`^${escapeStringRegexp(path.resolve('src/app/work'))}`),
              [[remarkMDXLayout, '@/app/work/wrapper', 'caseStudy']],
            ],
          ],
        ],
      },
    })

    return withMDX(nextConfig)
  } catch (err) {
    throw new Error(`Failed to create Next.js config: ${err.message}`)
  }
}
