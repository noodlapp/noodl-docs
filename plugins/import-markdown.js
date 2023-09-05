/**
 * Inspired by https://github.com/hashicorp/web-platform-packages/tree/9723b25a054674f9c2bebc12928377c35957508f/packages/remark-plugins/plugins/include-markdown
 * 
 * Problem with that page is that it is not ES6,
 * which Docusaurus doesn't support yet.
 */

const path = require('path')
const remark = require('remark')
const remarkMdx = require('remark-mdx')
const { _parseNoodlMarkupPlugin } = require('./markdown-syntax')
const readFileSync = require('fs').readFileSync

function flatMap(ast, fn) {
  return transform(ast, 0, null)[0]

  function transform(node, index, parent) {
    if (node.children) {
      var out = []
      for (var i = 0, n = node.children.length; i < n; i++) {
        var xs = transform(node.children[i], i, node)
        if (xs) {
          for (var j = 0, m = xs.length; j < m; j++) {
            out.push(xs[j])
          }
        }
      }
      node.children = out
    }

    return fn(node, index, parent)
  }
}

function includeMarkdownPlugin({
  resolveFrom,
  resolveMdx,
} = {}) {
  return function transformer(tree, file) {
    return flatMap(tree, (node) => {
      if (node.type !== 'paragraph') return [node]
      // detect an `@include` statement
      const includeMatch =
        node.children[0].value &&
        node.children[0].value.match(/^@include\s['"](.*)['"]$/)
      if (!includeMatch) {
        //if (JSON.stringify(node).includes('.md'))
        //  console.log('NO MATCH', node)
        return [node]
      }
      //console.log('MATCH', node)

      // read the file contents
      const includePath = path.join(
        resolveFrom || file.dirname,
        includeMatch[1]
      )
      let includeContents
      try {
        includeContents = readFileSync(includePath, {
          encoding: 'utf8'
        })
      } catch (err) {
        throw new Error(
          `The @include file path at ${includePath} was not found.\n\nInclude Location: ${file.path}:${node.position.start.line}:${node.position.start.column}`
        )
      }

      // if we are including a ".md" or ".mdx" file, we add the contents as processed markdown
      // if any other file type, they are embedded into a code block
      if (includePath.match(/\.md(?:x)?$/)) {
        // return the file contents in place of the @include
        // (takes a couple steps because we're processing includes with remark)
        const processor = remark().use(_parseNoodlMarkupPlugin)
        // NOTE: Use our _parseNoodlMarkupPlugin plugin
        
        // use remark-mdx to process the include contents
        processor.use(remarkMdx)

        // use the includeMarkdown plugin to allow recursive includes
        processor.use(includeMarkdownPlugin, {
          resolveFrom,
          resolveMdx
        })
        // Process the file contents, then return them
        const ast = processor.parse(includeContents)
        const res = processor.runSync(ast, includeContents)
        return res.children
      } else {
        // trim trailing newline
        includeContents.value = includeContents.value.trim()

        // return contents wrapped inside a "code" node
        return [{
          type: 'code',
          lang: includePath.match(/\.(\w+)$/)[1],
          value: includeContents,
        }, ]
      }
    })
  }
}

module.exports = includeMarkdownPlugin