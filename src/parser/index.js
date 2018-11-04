const { Parser, Grammar } = require('nearley')
const grammar = Grammar.fromCompiled(require('./grammar'))

module.exports = buffer => {
  const parser = new Parser(grammar)
  parser.feed(buffer)
  if (parser.results.length > 1) {
    throw Error(`ambiguous grammar
    results: ${parser.results.length}
    content: ${buffer}\n`)
  }
  return parser.results[0]
}
